<template>
  <div id="TwoSix">
    <!-- <SiteHeader /> -->
    <div class="page-body-modal">
      <!-- <div class="project-title-media-container"> -->
      <video
        class="project-title-media card-no-round"
        autoplay
        loop
        muted
        playsinline
      >
        <!-- <source
            :src="require('@/assets/2-6/0.webm')"
            type="video/webm"
          /> -->
        <source :src="require('@/assets/2-6/0.mp4')" type="video/mp4" />
      </video>
      <!-- </div> -->

      <div class="project-content">
        <div class="project-title">2-6 Dining Set</div>
        <div class="project-date">09/2017 - 12/2017</div>

        <div class="project-description">
          <p>
            2-6 is a dining set designed for those living with another person in
            small to medium sized apartments and houses. It consists of an
            expandable dining table, two chairs, and two benches that can be
            stored in the table frame. When used by just the owners themselves,
            the relatively small size of the table creates an atmosphere of
            intimacy. When the owners invite friends over for a meal, the
            tabletop can be expanded, and the benches pulled out to accommodate
            up to six people.
          </p>
          <p>
            Submitted to the 2017 Collab student design competition, and
            displayed at the Philadelphia Museum of Art from November 13th to
            18th, 2017.
          </p>
          <p>Model at 1:10 scale.</p>
        </div>

        <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Fusion 360</p>
            <p class="project-detail-value">Keyshot</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Model Materials</p>
            <p class="project-detail-value">ABS</p>
            <p class="project-detail-value">PVC Leather</p>
            <p class="project-detail-value">Magnets</p>
            <p class="project-detail-value">Steel Sheet</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Production Materials</p>
            <p class="project-detail-value">Glass-reinforced PP</p>
            <p class="project-detail-value">Chrome-plated Steel</p>
            <p class="project-detail-value">Polyurethane Foam</p>
            <p class="project-detail-value">Leather</p>
          </div>
        </div>

        <div class="project-section">
          <div class="project-section-title">IDEATION SKETCHES</div>
          <img
            :src="require('@/assets/2-6/1.jpg')"
            alt="2-6-1"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/2.jpg')"
            alt="2-6-2"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">SKETCH MODELS</div>
          <img
            :src="require('@/assets/2-6/3.jpg')"
            alt="2-6-3"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/4.jpg')"
            alt="2-6-4"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/5.jpg')"
            alt="2-6-5"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">
            INITIAL 3D MODEL AND RENDERING
          </div>
          <img
            :src="require('@/assets/2-6/6.jpg')"
            alt="2-6-6"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/7.jpg')"
            alt="2-6-7"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">
            REFINED 3D MODEL AND RENDERING
          </div>
          <img
            :src="require('@/assets/2-6/8.jpg')"
            alt="2-6-8"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/9.jpg')"
            alt="2-6-9"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">SCALE MODEL</div>
          <img
            :src="require('@/assets/2-6/10.jpg')"
            alt="2-6-10"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/11.jpg')"
            alt="2-6-11"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/2-6/12.jpg')"
            alt="2-6-12"
            class="project-process-pic card-no-hover"
          />
        </div>

        <!-- <ProjectNavigation next="tetris"></ProjectNavigation> -->
      </div>
    </div>
    <!-- <SiteFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
// import SiteFooter from "@/components/SiteFooter.vue";
// import ProjectNavigation from "@/components/ProjectNavigation.vue";

export default {
  name: "TwoSix",
  components: {
    // SiteHeader,
    // SiteFooter,
    // ProjectNavigation
  },
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
