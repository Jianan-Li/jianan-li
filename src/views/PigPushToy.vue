<template>
  <div>
    <div class="page-body">
      <component :is="'PigPushToy'"></component>
      <ProjectNavigation next="WateringCan"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import PigPushToy from "@/components/PigPushToy.vue";

export default {
  name: "PigPushToyPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    PigPushToy
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
