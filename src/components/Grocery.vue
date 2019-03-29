<template>
  <div id="Grocery">
    <div class="page-body-modal">
      <!-- <div class="project-title-media-container"> -->
      <video
        class="project-title-media"
        v-bind:class="[
          this.$route.path == '/' ? 'card-top-round' : 'card-full-round'
        ]"
        autoplay
        loop
        muted
        playsinline
      >
        <source :src="require('@/assets/grocery/0.mp4')" type="video/mp4" />
      </video>
      <!-- </div> -->

      <div class="project-content">
        <div class="project-title">Grocery</div>
        <div class="project-date">02/2019</div>

        <div class="project-description">
          <p>
            After a year of using Google Keep for grocery list, I decided to
            create my own.
          </p>
          <p>
            Links to
            <a
              class="underline-link"
              href="https://github.com/Jianan-Li/Grocery"
              target="_blank"
              rel="noreferrer"
              >source code</a
            >,
            <a
              class="underline-link"
              href="https://www.figma.com/file/LHeimgr6L0XzblQHEWefetUv/Grocery?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
              >design file</a
            >, and
            <a
              class="underline-link"
              href="https://beta.observablehq.com/@jianan-li/visualization-of-my-week"
              target="_blank"
              rel="noreferrer"
              >a visualization</a
            >
            showing how I spent my time on this project.
          </p>
        </div>

        <!-- <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Xcode</p>
            <p class="project-detail-value">Figma</p>
            <a href="https://rotato.xyz/" target="_blank" rel="noreferrer"
              ><p class="project-detail-value">Rotato</p></a
            >
          </div>
        </div> -->

        <!-- <div class="project-section">
          <div class="project-section-title"></div>
          <p></p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Grocery",
  components: {},
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
