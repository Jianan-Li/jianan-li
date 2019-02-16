<template>
  <div class="gallery">
    <div class="flex-container">
      <div
        class="gallery-item card"
        @click="openModal(item)"
        v-for="item in media"
        :key="item"
      >
        <picture v-if="item.includes('.jpg')">
          <source
            class="model-picture-webp"
            type="image/webp"
            :srcset="require(`@/assets/${path}/${item.slice(0, -3)}webp`)"
          />
          <img :src="require(`@/assets/${path}/${item}`)" :alt="item" />
        </picture>
        <!-- <img
          v-if="item.includes('.jpg')"
          :src="require(`@/assets/${path}/${item}`)"
          :alt="item"
        /> -->
        <video v-if="item.includes('.mp4')" autoplay loop muted playsinline>
          <source :src="require(`@/assets/${path}/${item}`)" type="video/mp4" />
        </video>
      </div>
    </div>

    <!-- An empty div for use with disableBodyScroll() -->
    <div id="empty-div"></div>

    <!-- The Modal -->
    <transition name="modal">
      <div class="modal" @click.self="closeModal()" v-if="showModal" id="modal">
        <div v-if="currentModalItem.includes('.jpg')" class="modal-content">
          <picture @click.self="closeModal()" class="model-content-picture">
            <source
              type="image/webp"
              :srcset="
                require(`@/assets/${path}/${currentModalItem.slice(0, -3)}webp`)
              "
            />
            <img
              class="card-modal"
              :src="require(`@/assets/${path}/${currentModalItem}`)"
              :alt="currentModalItem"
            />
          </picture>
          <!-- <img
            :src="require(`@/assets/${path}/${currentModalItem}`)"
            :alt="currentModalItem"
          /> -->
        </div>
        <div v-if="currentModalItem.includes('.mp4')" class="modal-content">
          <video
            @click.self="closeModal()"
            class="model-content-video"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              class="video-source"
              :src="require(`@/assets/${path}/${currentModalItem}`)"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default {
  name: "Gallery",
  props: {
    path: String,
    media: Array
  },
  data: () => ({
    showModal: false,
    currentModalItem: ""
  }),
  created() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleKeydown(e) {
      if (e.key == "Escape") {
        this.modalDisplayMode = "none";
        this.closeModal();
      }
    },
    openModal(item) {
      this.currentModalItem = item;
      this.showModal = true;
      this.disableBodyScroll();
    },
    disableBodyScroll() {
      const targetElement = document.getElementById("empty-div");
      // console.log(targetElement);
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
.flex-container {
  margin: 0rem -0.5rem -0.5rem;
  padding-top: 2.5rem;
}
.gallery-item {
  flex: 1 0 34%; /* explanation below */
  margin: 0.5rem;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .flex-container {
    padding-top: 0.5rem;
  }
}
video {
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
}
.model-content-picture {
  display: flex;
  width: 100%;
  height: 100%;
}
.modal-content {
  display: flex;
  height: 90%;
  width: auto;
  max-height: 90%;
  max-width: 90%;
  /* cursor: auto; */
}
img,
.video-source {
  cursor: auto;
}
/* .close {
  position: absolute;
  top: 13px;
  right: 15px;
  transition: 0.3s;
  cursor: pointer;
  font-size: 28px;
  color: #999999;
}
.close:hover {
  color: #4a4a4a;
} */
</style>
