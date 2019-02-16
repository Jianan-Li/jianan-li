<template>
  <div id="T3">
    <div class="page-body-modal">
      <!-- <div class="project-title-media-container"> -->
      <video
        class="project-title-media card-no-round"
        autoplay
        loop
        muted
        playsinline
      >
        <source :src="require('@/assets/t3/0.mp4')" type="video/mp4" />
      </video>
      <!-- </div> -->

      <div class="project-content">
        <div class="project-title">T3</div>
        <div class="project-date">01/2019</div>

        <div class="project-description">
          <p>A simple tic-tac-toe game.</p>
          <p>This is my first iOS app.</p>
          <p>
            Link to
            <a
              class="underline-link"
              href="https://github.com/Jianan-Li/T3"
              target="_blank"
              rel="noreferrer"
              >source code</a
            >
            and
            <a
              class="underline-link"
              href="https://www.figma.com/file/0jlrKEiaoLU1eGTS04cpR5EA/T3?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
              >design file</a
            >
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
  name: "T3",
  components: {},
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
