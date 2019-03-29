<template>
  <div id="T3">
    <div class="page-body-modal">
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
        <source :src="require('@/assets/t3/0.mp4')" type="video/mp4" />
      </video>

      <div class="project-content">
        <div class="project-title">T3</div>
        <div class="project-date">01/2019</div>

        <div class="project-description">
          <p>
            A simple tic-tac-toe game wrote as a quick iOS Swift programming
            exercise.
          </p>
          <p>
            Links to
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
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T3",
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
