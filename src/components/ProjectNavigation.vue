<template>
  <div class="project-navigation">
    <div class="navigation flex-container">
      <div class="navigation-item" @click="$router.push('/')">
        <chevron-left-icon class="navigation-icon"></chevron-left-icon
        ><span class="navigation-text">home</span>
      </div>
      <div class="navigation-item" @click="$router.push(`/${next}`)">
        <span class="navigation-text">next</span
        ><chevron-right-icon class="navigation-icon"></chevron-right-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "vue-feather-icons";

export default {
  name: "ProjectNavigation",
  props: {
    next: String
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-navigation {
  margin: 4rem 0rem;
}
</style>
