<template>
  <div>
    <div class="page-body">
      <component :is="'Shi'"></component>
      <ProjectNavigation next="Kollapse"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import Shi from "@/components/Shi.vue";

export default {
  name: "ShiPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    Shi
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
