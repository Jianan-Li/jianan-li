<template>
  <div>
    <div class="page-body">
      <component :is="'WateringCan'"></component>
      <ProjectNavigation next="LetterOpener"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import WateringCan from "@/components/WateringCan.vue";

export default {
  name: "WateringCanPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    WateringCan
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
