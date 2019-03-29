<template>
  <div
    class="my-graph"
    :style="{
      width: '100%',
      height: height + 'px'
    }"
  >
    <svg :width="width" :height="height" class="my-graph-svg cutout">
      <defs>
        <!-- <filter id="f3" x="0" y="0" width="130%" height="130%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>-->
        <filter id="dropshadow" x="0" y="0" width="130%" height="130%">
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="3"
            result="blur"
          ></feGaussianBlur>
          <!-- stdDeviation is how much to blur -->
          <feOffset dx="0" dy="2" result="offset-blur"></feOffset>
          <!-- how much to offset -->
          <feComponentTransfer>
            <feFuncA
              type="linear"
              slope="0.4"
              result="offset-opacity-blur"
            ></feFuncA>
            <!-- slope is the opacity of the shadow -->
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="offset-opacity-blur"></feMergeNode>
            <!-- this contains the offset blurred image -->
            <feMergeNode in="SourceGraphic"></feMergeNode>
            <!-- this contains the element that the filter is applied to -->
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "MyGraph",
  data: () => ({
    previousWindowWidth: null,
    width: null,
    height: null,
    gridSize: 100,
    selections: {},
    pathStrokeWidth: [1.5, 1.25, 1, 1],
    circleSizes: [44, 37, 33, 30, 30],
    fontSizes: [25, 15, 12, 11, 11],
    linkColor: "#ffffff",
    nonLinkColor: "#000000",
    enlargeRatioOnHover: 2,
    patterns: ["Andrew", "Jordan"],
    simulation: null,
    zoom: null,
    forceProperties: {
      center: {
        x: 0.5,
        y: 0.5
      },
      charge: {
        enabled: true,
        strength: -2000,
        distanceMin: 1,
        distanceMax: 2000
      },
      collide: {
        enabled: true,
        strength: 1,
        iterations: 1,
        radius: 50
      },
      forceX: {
        enabled: true,
        strength: 0.18,
        x: 0.5
      },
      forceY: {
        enabled: true,
        strength: 0.32,
        y: 0.5
      },
      link: {
        enabled: true,
        distance: 55,
        iterations: 2
      }
    },
    data: {
      nodes: [],
      links: []
    }
  }),
  computed: {
    nodes() {
      return this.data.nodes;
    },
    links() {
      return this.data.links;
    }
  },
  created() {},
  async mounted() {
    // Get initial width when things are mounted
    // also add listener for width change
    this.width = document.getElementById("datavis").clientWidth;
    this.height = (this.width * 2) / 3;
    // this.height = this.width>576? (this.width * 2) / 3 : this.width;
    window.addEventListener("resize", this.resizeCanvas);

    // Attach event listener to prevent scrolling inside the nodes graph
    // document.getElementById("nodes").addEventListener("wheel", this.scrollListener);

    // You can set data in any ways you want
    this.data = await d3.json(
      "https://gist.githubusercontent.com/Jianan-Li/c56cd37d21ed6b23e73ebcbe0a1bd12d/raw/myInterestGraph.json"
    );

    // Moved here from created
    this.simulation = d3
      .forceSimulation(this.nodes)
      .force("link", d3.forceLink(this.links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("collide", d3.forceCollide())
      .force("center", d3.forceCenter())
      .force("forceX", d3.forceX())
      .force("forceY", d3.forceY())
      .on("tick", this.tick);
    // Call first time to setup default values
    this.updateForces();

    this.selections.svg = d3.select(this.$el.querySelector("svg"));
    const svg = this.selections.svg;

    // Add zoom and panning triggers
    this.zoom = d3
      .zoom()
      .scaleExtent([1 / 3, 2])
      .on("zoom", this.zoomed);

    svg
      .call(this.zoom)
      .call(
        d3.zoom().transform,
        d3.zoomIdentity.translate(125, 83).scale(0.735)
      );

    this.selections.graph = svg.append("g");
    this.selections.graph.attr("transform", "translate(125,83) scale(.735)");
    // this.zoom.scaleTo(this.selections.graph, 0.735);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.resizeCanvas);
    // document.getElementById("nodes").removeEventListener("wheel", this.scrollListener);
  },
  methods: {
    tick() {
      // only run when the graph is moving, stops when the graph settles
      const transform = d => {
        // return "translate(" + Math.max(30, Math.min(this.width - 30, d.x)) + "," + Math.max(30, Math.min(this.height - 30, d.y)) + ")";
        return "translate(" + d.x + "," + d.y + ")";
      };

      const graph = this.selections.graph;
      graph
        .selectAll("line")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      graph.selectAll("circle").attr("transform", transform);
      graph.selectAll("text").attr("transform", transform);
    },
    updateData() {
      // this.simulation.nodes(this.nodes);
      // this.simulation.force("link").links(this.links);

      const simulation = this.simulation;
      const graph = this.selections.graph;

      // Links should only exit if not needed anymore
      graph
        .selectAll("line")
        .data(this.links)
        .exit()
        .remove();

      graph
        .append("g")
        .attr("id", "links")
        .selectAll("line")
        .data(this.links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke-width", l => this.pathStrokeWidth[l.value]);

      // Nodes should always be redrawn to avoid lines above them
      graph.select("#nodes").remove();
      graph.selectAll("circle").remove();

      // const circles = graph.append("g").attr("id", "circles");
      graph
        .append("g")
        .attr("id", "nodes")
        // .attr("filter", "url(#dropshadow)")
        .selectAll("circle")
        .data(this.nodes)
        .enter()
        .append("circle")
        .attr("r", d => this.circleSizes[d.group])
        .attr("id", d => d.id)
        .attr("class", d =>
          d.link ? " my-graph-circle url" : "my-graph-circle nonurl"
        )
        .call(
          d3
            .drag()
            .on("start", this.nodeDragStarted)
            .on("drag", this.nodeDragged)
            .on("end", this.nodeDragEnded)
        )
        .on("mouseover", this.nodeMouseOver)
        .on("mouseout", this.nodeMouseOut)
        .on("click", this.nodeClick);

      graph.selectAll("text").remove();

      let textRegion = graph
        .selectAll("text")
        .data(this.nodes)
        .enter();

      textRegion
        .filter(d => d.name)
        .append("text")
        .attr("x", "0em")
        .attr("y", "0.14em") //.31em
        .attr("font-size", d => this.fontSizes[d.group])
        .attr("fill", d => (d.link ? this.linkColor : this.nonLinkColor))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => d.name);

      textRegion
        .filter(d => d.name1)
        .append("text")
        .attr("x", "0em")
        .attr("y", "-0.41em")
        .attr("font-size", d => this.fontSizes[d.group])
        .attr("fill", d => (d.link ? this.linkColor : this.nonLinkColor))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => d.name1);

      textRegion
        .filter(d => d.name2)
        .append("text")
        .attr("x", "0em")
        .attr("y", "0.69em")
        .attr("font-size", d => this.fontSizes[d.group])
        .attr("fill", d => (d.link ? this.linkColor : this.nonLinkColor))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => d.name2);

      textRegion
        .filter(d => d.name3)
        .append("text")
        .attr("x", "0em")
        .attr("y", "-0.96em")
        .attr("font-size", d => this.fontSizes[d.group])
        .attr("fill", d => (d.link ? this.linkColor : this.nonLinkColor))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => d.name3);

      textRegion
        .filter(d => d.name4)
        .append("text")
        .attr("x", "0em")
        .attr("y", "0.14em")
        .attr("font-size", d => this.fontSizes[d.group])
        .attr("fill", d => (d.link ? this.linkColor : this.nonLinkColor))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => d.name4);

      textRegion
        .filter(d => d.name5)
        .append("text")
        .attr("x", "0em")
        .attr("y", "1.24em")
        .attr("font-size", d => this.fontSizes[d.group])
        .attr("fill", d => (d.link ? this.linkColor : this.nonLinkColor))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => d.name5);

      simulation.alpha(1).restart();
    },
    updateForces() {
      const { simulation, forceProperties, width, height } = this;
      simulation
        .force("center")
        .x(width * forceProperties.center.x)
        .y(height * forceProperties.center.y);
      simulation
        .force("charge")
        .strength(
          forceProperties.charge.strength * forceProperties.charge.enabled
        )
        .distanceMin(forceProperties.charge.distanceMin)
        .distanceMax(forceProperties.charge.distanceMax);
      simulation
        .force("collide")
        .strength(
          forceProperties.collide.strength * forceProperties.collide.enabled
        )
        .radius(forceProperties.collide.radius)
        .iterations(forceProperties.collide.iterations);
      simulation
        .force("forceX")
        .strength(
          forceProperties.forceX.strength * forceProperties.forceX.enabled
        )
        .x(width * forceProperties.forceX.x);
      simulation
        .force("forceY")
        .strength(
          forceProperties.forceY.strength * forceProperties.forceY.enabled
        )
        .y(height * forceProperties.forceY.y);
      simulation
        .force("link")
        .distance(forceProperties.link.distance)
        .iterations(forceProperties.link.iterations);

      // updates ignored until this is run
      // restarts the simulation (important if simulation has already slowed down)
      simulation.alpha(1).restart();
    },
    zoomed() {
      const transform = d3.event.transform;
      this.selections.graph.attr("transform", transform);

      // Define some world boundaries based on the graph total size
      // so we don't scroll indefinitely
      const graphBox = this.selections.graph.node().getBBox();
      // console.log(`graphBox.x: ${graphBox.x}`);
      // console.log(`graphBox.y: ${graphBox.y}`);
      // console.log(`graphBox.width: ${graphBox.width}`);
      // console.log(`graphBox.height: ${graphBox.height}`);
      const margin_x = 8000;
      const total_x = graphBox.width + 2 * margin_x;
      const total_y = (total_x / 3) * 2;
      const margin_y = (total_y - graphBox.height) / 2;
      const worldTopLeft = [graphBox.x - margin_x, graphBox.y - margin_y];
      const worldBottomRight = [
        graphBox.x + graphBox.width + margin_x,
        graphBox.y + graphBox.height + margin_y
      ];
      this.zoom.translateExtent([worldTopLeft, worldBottomRight]);
    },
    nodeDragStarted(d) {
      if (!d3.event.active) {
        this.simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    },
    nodeDragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    nodeDragEnded(d) {
      if (!d3.event.active) {
        this.simulation.alphaTarget(0.0001);
      }
      d.fx = null;
      d.fy = null;
    },
    nodeMouseOver(d) {
      if (d.link) {
        const allCircles = this.selections.graph.selectAll("circle");
        const allText = this.selections.graph.selectAll("text");
        const mouseOverCircle = allCircles.filter(td => td === d);
        const mouseOverText = allText.filter(td => td === d);
        allCircles.classed("hover", false);
        mouseOverCircle.classed("hover", true);
        mouseOverCircle
          // .style("fill", d => (this.patterns.indexOf(d.name1) >= 0)? `url(#${d.name1})`:"")
          .transition()
          .ease(d3.easeElastic)
          .duration(800)
          .attr("r", this.circleSizes[d.group] * this.enlargeRatioOnHover);

        mouseOverText
          .transition()
          .ease(d3.easeElastic)
          .duration(800)
          .attr(
            "font-size",
            d => this.fontSizes[d.group] * this.enlargeRatioOnHover
          );
      }
    },
    nodeMouseOut(d) {
      const allCircles = this.selections.graph.selectAll("circle");
      const allText = this.selections.graph.selectAll("text");
      const mouseOutCircle = allCircles.filter(td => td === d);
      const mouseOutText = allText.filter(td => td === d);
      allCircles.classed("hover", false);
      mouseOutCircle
        .transition()
        .ease(d3.easeElastic)
        .duration(800)
        .attr("r", d => this.circleSizes[d.group]);

      mouseOutText
        .transition()
        .ease(d3.easeElastic)
        .duration(800)
        .attr("font-size", d => this.fontSizes[d.group]);
    },
    nodeClick(d) {
      if (d.link) {
        window.open(d.link);
      }
    },
    resizeCanvas() {
      if (window.innerWidth != this.previousWindowWidth) {
        this.width = document.getElementById("datavis").clientWidth;
        this.height = (this.width * 2) / 3;
        // this.height = this.width>576? (this.width * 2) / 3 : this.width;
        this.previousWindowWidth = window.innerWidth;

        // Update the centering force
        // update center location, then restart simulation
        // otherwise, if cooled down already, won't be responsive
        const { simulation, forceProperties, width, height } = this;
        simulation
          .force("center")
          .x(width * forceProperties.center.x)
          .y(height * forceProperties.center.y);
        simulation
          .force("forceX")
          .strength(
            forceProperties.forceX.strength * forceProperties.forceX.enabled
          )
          .x(width * forceProperties.forceX.x);
        simulation
          .force("forceY")
          .strength(
            forceProperties.forceY.strength * forceProperties.forceY.enabled
          )
          .y(height * forceProperties.forceY.y);
        simulation.alpha(1).restart();
      }
    },
    scrollListener(e) {
      e.preventDefault();
    }
  },
  watch: {
    data: {
      handler() {
        this.updateData();
      },
      deep: true
    },
    forceProperties: {
      handler() {
        this.updateForces();
      },
      deep: true
    }
  }
};
</script>

<style>
.my-graph {
  padding-top: 3rem;
}
@media screen and (max-width: 600px) {
  .my-graph {
    padding-top: 1rem;
  }
}
.faded {
  opacity: 0.1;
  transition: 0.3s opacity;
}
.highlight {
  opacity: 1;
}
line.link {
  fill: none;
  stroke: #aaaaaa;
}
circle.my-graph-circle {
  transition: 0.3s fill;
  stroke-width: 1px;
  fill: #eeeeee;
  opacity: 0.9;
}
circle.url {
  fill: #004e79;
}
circle.hover {
  cursor: pointer;
  fill: #0085ce;
  transition: 0.3s fill;
}
text {
  /* font: 12px FuturaPT; */
  pointer-events: none;
}
</style>
