<template>
  <div>
    <div class="page-body">
      <component :is="'TwoSix'"></component>
      <ProjectNavigation next="Tetris"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import TwoSix from "@/components/TwoSix.vue";

export default {
  name: "TwoSixPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    TwoSix
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
