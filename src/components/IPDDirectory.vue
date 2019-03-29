<template>
  <div id="IPDDirectory">
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
        <source
          :src="require('@/assets/ipddirectory/0.mp4')"
          type="video/mp4"
        />
      </video>

      <div class="project-content">
        <div class="project-title">IPD Directory</div>
        <div class="project-date">07/2018 - 08/2018</div>

        <div class="project-description">
          <p>
            A
            <a
              href="https://ipd-directory.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              student directory page
            </a>
            built for
            <a
              href="https://ipd.me.upenn.edu/"
              target="_blank"
              rel="noreferrer"
            >
              my master's program
            </a>
            at the University of Pennsylvania.
          </p>
          <p>
            I used
            <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
              Vue.js
            </a>
            for front-end,
            <a href="https://vuematerial.io/" target="_blank" rel="noreferrer">
              Vue Material
            </a>
            for quick Material Design styling, and
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Firebase
            </a>
            for authentication, database, storage, and hosting.
          </p>
          <p>
            <a
              class="underline-link"
              href="https://ipd-directory.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
              >Visit the website →</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "IPDDirectory",
  components: {},
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
