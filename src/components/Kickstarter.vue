<template>
  <div
    class="kickstarter-graph cutout"
    :style="{
      width: '100%'
    }"
  >
    <div id="kickstarter"></div>
    <div id="kickstarter-hidden" style="display: none;"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { Runtime, Inspector } from "@observablehq/runtime";

// Your notebook, compiled as an ES module.
import notebook from "@/visualizations/kickstarter-time-series-analysis-part-2";

export default {
  name: "MyGraph",
  data: () => ({
    previousWindowWidth: null,
    width: null,
    height: null
  }),
  created() {},
  mounted() {
    this.width = document.getElementById("datavis").clientWidth;
    this.height = (this.width * 2) / 3;
    window.addEventListener("resize", this.resizeCanvas);

    const cellsToBeLoaded = [
      "question",
      "viewof compositionChoice",
      "chart",
      "styles"
    ];

    Runtime.load(notebook, cell => {
      if (cellsToBeLoaded.includes(cell.name)) {
        let div = document.createElement("div");
        document.getElementById("kickstarter").appendChild(div);
        return new Inspector(div);
      } else {
        let div = document.createElement("div");
        document.getElementById("kickstarter-hidden").appendChild(div);
        return new Inspector(div);
      }
    });
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.resizeCanvas);
  },
  methods: {
    resizeCanvas() {
      if (window.innerWidth != this.previousWindowWidth) {
        this.width = document.getElementById("datavis").clientWidth;
        this.height = (this.width * 2) / 3;
        this.previousWindowWidth = window.innerWidth;

        d3.select("#kickstarter-graph")
          .style("width", this.width - 32)
          .style("height", this.height * 0.8);
      }
    }
  },
  watch: {}
};
</script>

<style scoped>
.kickstarter-graph {
  margin-top: 3rem;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple   Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
}
#kickstarter {
  margin: -1.5rem 0rem -1.5rem;
  padding: 1rem;
}
@media screen and (max-width: 600px) {
  .kickstarter-graph {
    margin-top: 1rem;
  }
}
</style>
