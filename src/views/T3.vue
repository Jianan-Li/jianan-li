<template>
  <div>
    <div class="page-body">
      <component :is="'T3'"></component>
      <ProjectNavigation next="IPDDirectory"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import T3 from "@/components/T3.vue";

export default {
  name: "T3Page",
  components: {
    SiteFooter,
    ProjectNavigation,
    T3
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
