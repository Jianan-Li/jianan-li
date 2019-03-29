<template>
  <div>
    <div class="page-body">
      <component :is="'Kollapse'"></component>
      <ProjectNavigation next="TwoSix"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import Kollapse from "@/components/Kollapse.vue";

export default {
  name: "KollapsePage",
  components: {
    SiteFooter,
    ProjectNavigation,
    Kollapse
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
