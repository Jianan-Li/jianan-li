<template>
  <div>
    <div class="page-body">
      <component :is="'Tetris'"></component>
      <ProjectNavigation next="FloorPiano"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import Tetris from "@/components/Tetris.vue";

export default {
  name: "TetrisPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    Tetris
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
