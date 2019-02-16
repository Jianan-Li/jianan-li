<template>
  <div class="hero-shots">
    <div class="flex-container">
      <div
        class="hero-shot card"
        v-for="project in projects"
        @click="
          window.width > 900 ? openModal(project) : $router.push(`/${project}`)
        "
        :key="project"
      >
        <picture>
          <source
            type="image/webp"
            :srcset="require(`@/assets/heroshots/${project}.webp`)"
          />
          <img
            :src="require(`@/assets/heroshots/${project}.jpg`)"
            :alt="project"
          />
        </picture>
      </div>
    </div>
    <div
      class="modal"
      :style="{ display: modalDisplayMode }"
      @click.self="closeModal()"
    >
      <component
        :is="currentModalItem"
        id="heroshots-modal-component"
        class="modal-content card-modal"
        v-on:mounted="disableBodyScroll"
      ></component>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

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
  name: "HeroShots",
  props: {
    projects: Array
  },
  components: {
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
    currentModalItem: "",
    modalDisplayMode: "none",
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
  // mounted() {
  //   clearAllBodyScrollLocks();
  // },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleKeydown(e) {
      if (e.key == "Escape") {
        this.modalDisplayMode = "none";
        this.closeModal();
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    openModal(project) {
      this.currentModalItem = project;
      this.modalDisplayMode = "flex";
    },
    disableBodyScroll() {
      const targetElement = document.getElementById(
        "heroshots-modal-component"
      );
      disableBodyScroll(targetElement);
    },
    closeModal() {
      this.modalDisplayMode = "none";
      clearAllBodyScrollLocks();
    }
  }
};
</script>

<style scoped>
.flex-container {
  margin: -1.5rem;
  padding-top: 1.5rem;
}
.hero-shot {
  box-sizing: border-box;
  flex: 1 0 51%; /* explanation below */
  margin: 1.5rem;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .hero-shot {
    margin: 0.5rem;
  }
  .flex-container {
    margin: -0.5rem;
    padding-top: 0.5rem;
  }
}
.modal {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAARNJREFUWAntl9EKwzAIRcP+rm992//T39joriEBlzobNaSMLZCVRj1eY8nalP6j7MC+7wvmVuY6emPAXRl/OfCLEZc8Hvi9H5ycC8TCJGYd2wEFC1XPxxARALbJKYcogLaIqyTHkAjES8mJKbdYCTC3w81yB7KmhhkRQCSW1ZCSB+SJeUva3liAFt82j3rfA+7xUZOcGbUEmu2Ma7J/SPTEOk0+QmeHKgpZpINlTvKqrIhoqyYRtGY+sG4V/BXXUn37f0HV1zG9/3MeQpQnPXy5Ws02pK09CXp8XGIsYItvlxgP0BMjiomAIrFZTBgAipvhDhT20cxCwLUvpRBw+Ws5FzD0SBXaIX4XXPtpJjxHv7H0AnPC/MPt80nyAAAAAElFTkSuQmCC)
      16 16,
    auto;
}
.modal-content {
  overflow: auto;
  height: 95%;
  width: 100%;
  max-height: 95%;
  margin: 0rem 16rem;
  background-color: white;
  cursor: auto;
  border-radius: var(--border-radius);
  -webkit-overflow-scrolling: touch;
}
@media screen and (max-width: 1200px) {
  .modal-content {
    margin: 0rem 6.5rem;
  }
}
@media screen and (max-width: 900px) {
  .modal-content {
    margin: 0rem 2.75rem;
  }
}
@media screen and (max-width: 600px) {
  .modal-content {
    margin: 0rem 1rem;
  }
}
::-webkit-scrollbar {
  width: 0rem;
}
/* ::-webkit-scrollbar {
  width: 0.25rem;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0.25rem rgba(0,0,0,0.6);
}
::-webkit-scrollbar-thumb {
  background-color: var(--light-color);
} */
</style>
