<template>
  <div>
    <div class="page-body">
      <component :is="'FloorPiano'"></component>
      <ProjectNavigation next="BusStopKiosk"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import FloorPiano from "@/components/FloorPiano.vue";

export default {
  name: "FloorPianoPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    FloorPiano
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
