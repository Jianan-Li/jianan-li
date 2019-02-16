<template>
  <div class="my-graph" id="nodes"><div id="graph"></div></div>
</template>

<script>
import ForceGraph from "force-graph";

export default {
  name: "MyGraph",
  props: {},
  data: () => ({
    data: null,
    previousWidth: null,
    onHoverNodeID: null
  }),
  methods: {
    drawGraph() {
      // console.log(this.data);
      ForceGraph()(document.getElementById("graph"))
        .width(document.getElementById("nodes").clientWidth)
        // eslint-disable-next-line
        .height(document.getElementById("nodes").clientWidth>768? document.getElementById("nodes").clientWidth*2.0/3:document.getElementById("nodes").clientWidth)
        .backgroundColor("#f8f8f8")
        .graphData(this.data)
        .nodeId("id")
        .enableNodeDrag(false)
        // .enableZoomPanInteraction(false)
        .onNodeHover(node => {
          if (node == null) {
            this.onHoverNodeID = null;
            document.getElementById("graph").style.cursor = "default";
          } else {
            this.onHoverNodeID = node.id;
            if (node.link == null) {
              document.getElementById("graph").style.cursor = "default";
            } else {
              document.getElementById("graph").style.cursor = "pointer";
            }
          }
        })
        .onNodeClick(node => {
          if (node.link) {
            window.open(node.link);
          }
        })
        .nodeCanvasObject((node, ctx, globalScale) => {
          const label = node.id;
          const fontSizeLookup = [18, 18, 14, 12, 10];
          // eslint-disable-next-line
          const fontSize = (this.onHoverNodeID==node.id)? 22/globalScale : fontSizeLookup[node.group] / globalScale;
          ctx.font = `${fontSize}px FuturaPT`;
          // const textWidth = ctx.measureText(label).width;
          // const bckgDimensions = [textWidth, fontSize].map(
          //   n => n + fontSize * 0.2
          // );
          // ctx.fillStyle = "#f8f8f8";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          // console.log("lollollollol");
          // eslint-disable-next-line
          const fillStyleLookup = ["#222222","#333333","#444444","#555555","#666666"];
          ctx.fillStyle = node.link ? "#036C8C" : fillStyleLookup[node.group];
          ctx.fillText(label, node.x, node.y);
        })
        .zoom(2.4)
        // eslint-disable-next-line
        .d3Force('charge').strength(-40);
    },
    resizeCanvas() {
      if (window.innerWidth != this.previousWidth) {
        this.drawGraph();
        this.previousWidth = window.innerWidth;
      }
    }
  },
  created: function() {
    window.addEventListener("resize", this.resizeCanvas);
    console.log(`Component created. EventListener added.`);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.resizeCanvas);
    console.log(`Component destroyed. EventListener removed.`);
  },
  mounted: function() {
    fetch("/mydata.json")
      .then(res => res.json())
      .then(data => (this.data = data))
      .then(() => this.drawGraph());
  }
};
</script>

<style scoped>
.my-graph {
  width: 100%;
}
</style>
