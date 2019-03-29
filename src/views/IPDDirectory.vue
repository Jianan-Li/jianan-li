<template>
  <div>
    <div class="page-body">
      <component :is="'IPDDirectory'"></component>
      <ProjectNavigation next="PigPushToy"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import IPDDirectory from "@/components/IPDDirectory.vue";

export default {
  name: "IPDDirectoryPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    IPDDirectory
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
