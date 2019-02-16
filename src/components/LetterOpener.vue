<template>
  <div id="LetterOpener">
    <!-- <SiteHeader /> -->
    <div class="page-body-modal">
      <img
        :src="require('@/assets/letter-opener/1.jpg')"
        alt="letter-opener-1"
        class="project-title-media card-no-round"
      />
      <div class="project-content">
        <div class="project-title">Letter Opener</div>
        <div class="project-date">01/2018 - 02/2018</div>

        <div class="project-description">
          <p>
            Design brief: design and fabricate a wooden letter opener that is
            effective at opening a sealed envelope, comfortable to hold, and
            formally communicates its purpose and desirability.
          </p>
          <p>
            My design is inspired by both the grain pattern of the provided wood
            blank and the shape of a Prince Rupert’s Drop.
          </p>
          <p>
            This is my first project for the IPD527 Industrial Design class at
            the University of Pennsylvania.
          </p>
        </div>

        <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Illustrator</p>
            <p class="project-detail-value">Rhino</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Material</p>
            <p class="project-detail-value">Sapele</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Tools</p>
            <p class="project-detail-value">Band Saw</p>
            <p class="project-detail-value">Belt Sander</p>
            <p class="project-detail-value">Spindle Sander</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Finish</p>
            <p class="project-detail-value">Gel Stain</p>
          </div>
        </div>

        <div class="project-section">
          <div class="project-section-title">FINDING THE SHAPE</div>
          <p>
            I scanned the grain of the wood blank, imported the image into
            Illustrator, and used the curvature tool to create simple organic
            shapes that best fit the grain.
          </p>
          <img
            :src="require('@/assets/letter-opener/2.jpg')"
            alt="letter-opener-2"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/3.jpg')"
            alt="letter-opener-3"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/4.jpg')"
            alt="letter-opener-4"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">DEFINING THE GEOMETRY</div>
          <p>
            I slightly extended the shape, imported it into Rhino, and created a
            top view of the letter opener that matches the side view.
          </p>
          <img
            :src="require('@/assets/letter-opener/5.png')"
            alt="letter-opener-5"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">CREATING THE FORM</div>
          <p>
            I printed out the two views, taped them to the two sides on the wood
            blank, and cut it on a band saw in both orientations. I then used
            the belt sander and the spindle sander to get the piece into the
            rough shape, a rasp to further remove some material, and then
            increasingly higher grit sandpaper to achieve a smooth surface
            finish.
          </p>
          <p>
            The last step was to apply a gel stain finish that both protects the
            wood and brings out its true color.
          </p>
          <img
            :src="require('@/assets/letter-opener/6.jpg')"
            alt="letter-opener-6"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/7.jpg')"
            alt="letter-opener-7"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/8.jpg')"
            alt="letter-opener-8"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/9.jpg')"
            alt="letter-opener-9"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/10.jpg')"
            alt="letter-opener-10"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/letter-opener/11.jpg')"
            alt="letter-opener-11"
            class="project-process-pic card-no-hover"
          />
        </div>

        <!-- <ProjectNavigation next="shi"></ProjectNavigation> -->
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
  name: "LetterOpener",
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
