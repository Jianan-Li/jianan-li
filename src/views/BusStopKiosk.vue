<template>
  <div>
    <div class="page-body">
      <component :is="'BusStopKiosk'"></component>
      <ProjectNavigation next="PigPushToy"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import BusStopKiosk from "@/components/BusStopKiosk.vue";

export default {
  name: "BusStopKioskPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    BusStopKiosk
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
