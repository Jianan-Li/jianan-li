<template>
  <div>
    <!-- <SiteHeader /> -->
    <div class="page-body">
      <component :is="'Grocery'"></component>
      <ProjectNavigation next="T3"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";

import Grocery from "@/components/Grocery.vue";

export default {
  name: "GroceryPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    Grocery
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
