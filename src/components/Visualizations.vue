<template>
  <div class="visualizations">
    <div class="flex-container">
      <MyGraph />
      <Kickstarter />
    </div>
  </div>
</template>

<script>
import MyGraph from "@/components/MyGraph.vue";
import Kickstarter from "@/components/Kickstarter.vue";

export default {
  name: "Visualizations",
  props: {
    projects: Object
  },
  components: {
    MyGraph,
    Kickstarter
  }
};
</script>

<style scoped></style>
