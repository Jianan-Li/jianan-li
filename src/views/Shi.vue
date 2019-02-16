<template>
  <div class="shi">
    <!-- <SiteHeader /> -->
    <div class="page-body">
      <img
        :src="require('@/assets/shi/1.png')"
        alt="shi-1"
        class="project-title-media card-no-hover"
      />
      <div class="project-content">
        <div class="project-title">Shí Cup & Saucer</div>
        <div class="project-date">08/2017</div>

        <div class="project-description">
          <p>
            The Ten Commandments. The base ten numeral system. Humans have ten
            fingers. Created from various polyhedra containing decagonal
            surfaces and cross sections, the Shí (ten in Chinese) cup and saucer
            celebrates the significant role that the number ten plays in our
            lives. Regular decagons can be found throughout its design, and the
            stacking of repeated sections is used to achieve a tapered
            silhouette. It is comfortable to hold in your hands, easy to drink
            out of, and suitable for the drinking of most beverages.
          </p>
        </div>

        <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Rhino</p>
            <p class="project-detail-value">Illustrator</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Material</p>
            <p class="project-detail-value">Paper</p>
            <p class="project-detail-value">Butter Board</p>
            <p class="project-detail-value">Museum Board</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Tool</p>
            <p class="project-detail-value">Laser Cutter</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Finish</p>
            <p class="project-detail-value">Gesso Spray</p>
          </div>
        </div>

        <div class="project-section">
          <div class="project-section-title"></div>
          <img
            :src="require('@/assets/shi/2.jpg')"
            alt="shi-2"
            class="project-process-pic card-no-hover"
          />
          <!-- <p>Paper Prototype</p> -->
          <img
            :src="require('@/assets/shi/3.jpg')"
            alt="shi-3"
            class="project-process-pic card-no-hover"
          />
          <!-- <p>Butter Board Prototype</p> -->
          <img
            :src="require('@/assets/shi/4.jpg')"
            alt="shi-4"
            class="project-process-pic card-no-hover"
          />
          <!-- <p>4-Ply Museum Board Prototype</p> -->
          <img
            :src="require('@/assets/shi/5.jpg')"
            alt="shi-5"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/shi/6.jpg')"
            alt="shi-6"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title"></div>
          <img
            :src="require('@/assets/shi/7.png')"
            alt="shi-7"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/shi/8.png')"
            alt="shi-8"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/shi/9.png')"
            alt="shi-9"
            class="project-process-pic card-no-hover"
          />
        </div>

        <ProjectNavigation next="Kollapse"></ProjectNavigation>
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
  name: "Shi",
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
