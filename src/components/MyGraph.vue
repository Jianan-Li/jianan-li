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
        </filter> -->
        <filter id="dropshadow" x="0" y="0" width="130%" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <!-- stdDeviation is how much to blur -->
          <feOffset dx="2" dy="2" result="offset-blur" />
          <!-- how much to offset -->
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.4" result="offset-opacity-blur" />
            <!-- slope is the opacity of the shadow -->
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="offset-opacity-blur" />
            <!-- this contains the offset blurred image -->
            <feMergeNode in="SourceGraphic" />
            <!-- this contains the element that the filter is applied to -->
          </feMerge>
        </filter>
        <!-- <pattern id="Andrew" x="0" y="0" height="1" width="1">
          <image
            x="0"
            y="0"
            width="60"
            height="60"
            xlink:href="https://yt3.ggpht.com/a-/AN66SAzs8DmwITc00osvw7xV_blFvWfisegTxaxhVw=s288-mo-c-c0xffffffff-rj-k-no"
          ></image>
        </pattern>
        <pattern id="Jordan" x="0" y="0" height="1" width="1">
          <image
            id="Jordan-img"
            x="0"
            y="0"
            width="44"
            height="44"
            :xlink:href="require(`@/assets/avatars/jordan.png`)"
          ></image>
        </pattern> -->
        <pattern
          id="innerGrid"
          :width="innerGridSize"
          :height="innerGridSize"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="100%"
            height="100%"
            fill="none"
            stroke="#CCCCCC7A"
            stroke-width="0.5"
          />
        </pattern>
        <pattern
          id="grid"
          :width="gridSize"
          :height="gridSize"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="100%"
            height="100%"
            fill="url(#innerGrid)"
            stroke="#CCCCCC7A"
            stroke-width="1.5"
          />
        </pattern>
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
        radius: 55
      },
      forceX: {
        enabled: true,
        strength: 0.18,
        x: 0.5
      },
      forceY: {
        enabled: true,
        strength: 0.28,
        y: 0.5
      },
      link: {
        enabled: true,
        distance: 35,
        iterations: 1
      }
    },
    data: {
      nodes: [],
      links: []
    }
  }),
  computed: {
    innerGridSize() {
      return this.gridSize / 10;
    },
    nodes() {
      return this.data.nodes;
    },
    links() {
      return this.data.links;
    }
  },
  created() {},
  mounted() {
    // Get initial width when things are mounted
    // also add listener for width change
    this.width = document.getElementById("interests").clientWidth;
    this.height = (this.width * 2) / 3;
    // this.height = this.width>576? (this.width * 2) / 3 : this.width;
    window.addEventListener("resize", this.resizeCanvas);

    // Attach event listener to prevent scrolling inside the nodes graph
    // document.getElementById("nodes").addEventListener("wheel", this.scrollListener);

    // Moved here from created
    this.simulation = d3
      .forceSimulation()
      .force("link", d3.forceLink())
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
    svg.call(this.zoom);

    // A background grid to help user experience
    // The width and height depends on the minimum scale extent and
    // the + 10% and negative index to create an infinite grid feel
    // The precedence of this element is important since you'll have
    // click events on the elements above the grid
    // this.selections.grid = svg
    //   .append("rect")
    //   .attr("x", "-50%")
    //   .attr("y", "-50%")
    //   .attr("width", "450%")
    //   .attr("height", "450%")
    //   .attr("fill", "url(#grid)");

    this.selections.graph = svg.append("g");
    // const graph = this.selections.graph;

    // You can set data in any ways you want
    d3.json("/mydata.json")
      .then(data => {
        this.data = data;
      })
      .catch(error => {
        // eslint-disable-next-line
        console.error(`Failed to retrieve data. Error: ${error}`);
      });
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

      const link = d => {
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          " L" +
          d.target.x +
          "," +
          d.target.y
        );
      };

      const graph = this.selections.graph;
      graph.selectAll("path").attr("d", link);
      graph.selectAll("circle").attr("transform", transform);
      graph.selectAll("text").attr("transform", transform);
    },
    updateData() {
      this.simulation.nodes(this.nodes);
      this.simulation.force("link").links(this.links);

      const simulation = this.simulation;
      const graph = this.selections.graph;

      // Links should only exit if not needed anymore
      graph
        .selectAll("path")
        .data(this.links)
        .exit()
        .remove();

      graph
        .selectAll("path")
        .data(this.links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("stroke-width", l => this.pathStrokeWidth[l.value]);

      // Nodes should always be redrawn to avoid lines above them
      graph.select("#circles").remove();
      graph.selectAll("circle").remove();

      // const circles = graph.append("g").attr("id", "circles");
      graph
        .append("g")
        .attr("id", "circles")
        // .attr("filter", "url(#f3)")
        .selectAll("circle")
        .data(this.nodes)
        .enter()
        .append("circle")
        .attr("r", d => this.circleSizes[d.group])
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
      // The trick here is to move the grid in a way that the user doesn't perceive
      // that the axis aren't really moving
      // The actual movement is between 0 and gridSize only for x and y
      // const translate =
      //   (transform.x % (this.gridSize * transform.k)) +
      //   "," +
      //   (transform.y % (this.gridSize * transform.k));
      // this.selections.grid.attr(
      //   "transform",
      //   "translate(" + translate + ") scale(" + transform.k + ")"
      // );
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
        // .attr("transform", "scale(1.5)")

        // d3.select("#Jordan-img")
        //   .transition()
        //   .ease(d3.easeElastic)
        //   .duration(800)
        //   .attr("transform", "scale(2.25)")
        // .attr("x", "0")
        // .attr("y", "0")

        mouseOverText
          .transition()
          .ease(d3.easeElastic)
          .duration(800)
          // .attr("x", 0)
          // .attr("fill", "#ffffff")
          // .attr("fill-opacity", "0")
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
      // .style("fill", d => "")

      // d3.select("#Jordan-img")
      //   .transition()
      //   .ease(d3.easeElastic)
      //   .duration(800)
      // .attr("transform", "scale(0.66667)")

      mouseOutText
        .transition()
        .ease(d3.easeElastic)
        .duration(800)
        // .attr("x", 0)
        // .attr("y", "0.31em")
        // .attr("fill-opacity", "1")
        .attr("font-size", d => this.fontSizes[d.group]);
    },
    nodeClick(d) {
      if (d.link) {
        window.open(d.link);
      }
    },
    resizeCanvas() {
      if (window.innerWidth != this.previousWindowWidth) {
        this.width = document.getElementById("interests").clientWidth;
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
path.link {
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
