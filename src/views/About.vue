<template>
  <div>
    <!-- <SiteHeader /> -->
    <div class="page-body">
      <component :is="'About'"></component>
      <ProjectNavigation next="Grocery"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";

import About from "@/components/About.vue";

export default {
  name: "AboutPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    About
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
