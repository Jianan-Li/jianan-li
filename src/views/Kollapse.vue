<template>
  <div class="kollapse">
    <!-- <SiteHeader /> -->
    <div class="page-body">
      <!-- <div class="project-title-media-container"> -->
      <video
        class="project-title-media card-no-hover"
        autoplay
        loop
        muted
        playsinline
      >
        <!-- <source
            :src="require('@/assets/kollapse/0.webm')"
            type="video/webm"
          /> -->
        <source :src="require('@/assets/kollapse/0.mp4')" type="video/mp4" />
      </video>
      <!-- </div> -->

      <div class="project-content">
        <div class="project-title">Kollapse</div>
        <div class="project-date">09/2017 - 12/2017</div>

        <div class="project-description">
          <p>
            Still digging in your pencil case trying to find that pen you need?
            The pencil case takes up too much space on your desk? Tired of all
            the zipping and unzipping? A pencil holder allows you to find the
            pen you need more quickly and takes up less surface area on your
            desk, but you can't put it in your backpack and take it everywhere
            with you. Kollapse offers the best of both worlds by combining the
            two. It functions as a pencil case when it's in your backpack. Once
            you take it out, it becomes a pencil holder. You can open it simply
            by applying a downward force when setting it on a horizontal
            surface, and close it simply by lifting it up.
          </p>
        </div>

        <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Fusion 360</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Material</p>
            <p class="project-detail-value">ABS</p>
            <p class="project-detail-value">Silicone</p>
            <p class="project-detail-value">Magnets</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Tool</p>
            <p class="project-detail-value">3D Printer</p>
          </div>
        </div>

        <div class="project-section">
          <div class="project-section-title">SKETCHES</div>
          <img
            :src="require('@/assets/kollapse/1.jpg')"
            alt="kollapse-1"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/2.jpg')"
            alt="kollapse-2"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/3.jpg')"
            alt="kollapse-3"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/4.jpg')"
            alt="kollapse-4"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/5.jpg')"
            alt="kollapse-5"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">CAD Model</div>
          <img
            :src="require('@/assets/kollapse/6.jpg')"
            alt="kollapse-6"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">PROTOTYPES</div>
          <img
            :src="require('@/assets/kollapse/7.jpg')"
            alt="kollapse-7"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/8.jpg')"
            alt="kollapse-8"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/9.jpg')"
            alt="kollapse-9"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/10.jpg')"
            alt="kollapse-10"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/kollapse/11.jpg')"
            alt="kollapse-11"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">Poster</div>
          <img
            :src="require('@/assets/kollapse/12.jpg')"
            alt="kollapse-12"
            class="project-process-pic card-no-hover"
          />
        </div>

        <ProjectNavigation next="TwoSix"></ProjectNavigation>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";

export default {
  name: "Kollapse",
  components: {
    // SiteHeader,
    SiteFooter,
    ProjectNavigation
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
