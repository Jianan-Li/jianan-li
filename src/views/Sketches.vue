<template>
  <div class="sketches">
    <SiteHeader />
    <div class="page-body">
      <img
        :src="require('@/assets/sketches/tape-measure.jpg')"
        id="tape-measure"
        alt="sketches-1"
        class="sketch"
      />
      <img
        :src="require('@/assets/sketches/chair.jpg')"
        id="chair"
        alt="sketches-2"
        class="sketch"
      />
      <img
        :src="require('@/assets/sketches/fiftythree-pencil.jpg')"
        id="fiftythree-pencil"
        alt="sketches-3"
        class="sketch"
      />
      <img
        :src="require('@/assets/sketches/kollapse.jpg')"
        id="kollapse"
        alt="sketches-4"
        class="sketch"
      />
      <img
        :src="require('@/assets/sketches/shoes.jpg')"
        id="shoes"
        alt="sketches-5"
        class="sketch"
      />
      <img
        :src="require('@/assets/sketches/cube.gif')"
        id="cube"
        alt="sketches-6"
        class="sketch"
      />
      <div class="project-content">
        <div class="navigation flex-container">
          <div class="navigation-icon" @click="$router.push('/')">
            <font-awesome-icon
              :icon="{ prefix: 'fa', iconName: 'angle-left' }"
            /><span> home</span>
          </div>
          <div class="navigation-icon" @click="$router.push('/pig-push-toy')">
            <span>next </span
            ><font-awesome-icon
              :icon="{ prefix: 'fa', iconName: 'angle-right' }"
            />
          </div>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "Sketches",
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
