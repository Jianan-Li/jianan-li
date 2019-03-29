<template>
  <div>
    <div class="page-body"><component :is="'About'"></component></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
import About from "@/components/About.vue";

export default {
  name: "ResumePage",
  components: {
    About
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
