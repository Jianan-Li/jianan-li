<template>
  <div>
    <div class="page-body">
      <component :is="'LetterOpener'"></component>
      <ProjectNavigation next="Shi"></ProjectNavigation>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";
import LetterOpener from "@/components/LetterOpener.vue";

export default {
  name: "LetterOpenerPage",
  components: {
    SiteFooter,
    ProjectNavigation,
    LetterOpener
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
