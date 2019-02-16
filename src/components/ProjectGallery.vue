<template>
  <div class="project-gallery">
    <div class="flex-container">
      <div
        class="project-catogery"
        v-for="category in projects.categories"
        :key="category"
        :id="category"
      >
        <div
          class="hero-shot"
          v-for="project in projects[category]"
          @click="
            window.width > 900
              ? openModal(project)
              : $router.push(`/${project}`)
          "
          :key="project"
        >
          <!-- <div class = "gallery-video-container card" v-if="project === 'Grocery'">
            <video
              id="video-grocery"
              class="gallery-video"
              @mouseover="playVideo('video-grocery')"
              @mouseout="pauseVideo('video-grocery')"
              loop
              muted
              playsinline
            >
              <source
                :src="require('@/assets/grocery/0.mp4')"
                type="video/mp4"
              />
            </video>
          </div> -->
          <div class="gallery-picture-container card">
            <!-- v-if="project !== 'Grocery'" -->
            <picture>
              <!-- <source
                type="image/webp"
                :srcset="require(`@/assets/heroshots/${project}.webp`)"
              /> -->
              <img
                :src="require(`@/assets/heroshots/${project}.jpg`)"
                :alt="project"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal">
      <div class="modal" @click.self="closeModal()" v-if="showModal">
        <component
          :is="currentModalItem"
          id="heroshots-modal-component"
          class="modal-content card-modal"
          v-on:mounted="disableBodyScroll"
        ></component>
      </div>
    </transition>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import Grocery from "@/components/Grocery.vue";
import T3 from "@/components/T3.vue";
import PigPushToy from "@/components/PigPushToy.vue";
import WateringCan from "@/components/WateringCan.vue";
import LetterOpener from "@/components/LetterOpener.vue";
import Shi from "@/components/Shi.vue";
import Kollapse from "@/components/Kollapse.vue";
import TwoSix from "@/components/TwoSix.vue";
import Tetris from "@/components/Tetris.vue";
import FloorPiano from "@/components/FloorPiano.vue";
import BusStopKiosk from "@/components/BusStopKiosk.vue";

export default {
  name: "ProjectGallery",
  props: {
    projects: Object
  },
  components: {
    Grocery,
    T3,
    PigPushToy,
    WateringCan,
    LetterOpener,
    Shi,
    Kollapse,
    TwoSix,
    Tetris,
    FloorPiano,
    BusStopKiosk
  },
  data: () => ({
    showModal: false,
    currentModalItem: "",
    window: {
      width: 0,
      height: 0
    }
  }),
  created() {
    window.addEventListener("keydown", this.handleKeydown);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    playVideo(videoId) {
      document.getElementById(videoId).play();
    },
    pauseVideo(videoId) {
      document.getElementById(videoId).pause();
      // document.getElementById(videoId).currentTime = 0;
      // document.getElementById(videoId).load();
    },
    handleKeydown(e) {
      if (e.key == "Escape") {
        this.closeModal();
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    openModal(project) {
      this.currentModalItem = project;
      this.showModal = true;
    },
    disableBodyScroll() {
      const targetElement = document.getElementById(
        "heroshots-modal-component"
      );
      disableBodyScroll(targetElement);
    },
    closeModal() {
      this.showModal = false;
      clearAllBodyScrollLocks();
    }
  }
};
</script>

<style scoped>
.project-gallery {
  margin-top: -1rem;
}
.gallery-video {
  width: 100%;
  display: block;
}
.flex-container {
  margin: 0rem;
  padding-top: 0rem;
}
.hero-shot {
  box-sizing: border-box;
  flex: 1 0 51%; /* explanation below */
  margin: 3rem 0rem 0rem;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .hero-shot {
    margin-top: 1rem;
  }
  .flex-container {
    padding-top: 2rem;
  }
}
.modal {
  display: block;
  bottom: 0;
  right: 0;
  overflow: auto;
  position: fixed;
}
.modal-content {
  display: block;
  margin-top: 3rem;
  margin-bottom: 3rem;
  /* width: 90%; */
  /* max-height: 100%; */
  background-color: white;
  cursor: auto;
  border-radius: var(--border-radius);
  -webkit-overflow-scrolling: touch;
}
</style>
