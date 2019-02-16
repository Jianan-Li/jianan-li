<template>
  <div class="my-info">
    <div
      class="site-title"
      @click="window.width > 900 ? openModal('About') : $router.push(`/about`)"
    >
      <div
        class="flex-container site-title-flex-container"
        @mouseover="mouseoverTitle()"
        @mouseout="mouseoutTitle()"
      >
        <div class="site-title-emoji">🙋🏻‍♂️</div>
        <div class="site-title-word">
          <div class="site-title-text">
            Hi! My name is <span class="site-title-emphasis">Jianan</span>,
          </div>
          <div class="site-title-subtext">
            <span
              class="site-title-subtext-span"
              v-bind:class="{
                'site-title-subtext-span-underline': showUnderline
              }"
              >and I'm slowly figuring out my life's mission as a product
              designer.</span
            >
            <chevron-right-icon></chevron-right-icon>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="site-title-alt-1">🙋🏻‍♂️</div>
    <div class="site-title-alt-2">
      Hi! My name is <span class="site-title-emphasis">Jianan</span>,
    </div>
    <div class="site-title-alt-3">
      and I'm slowly figuring out my life's mission as a product designer.
    </div> -->
    <!-- <p>Hi there!</p>
    <p>
      My name is Jianan. I’m an engineer turned product designer passionately
      exploring the role of technology in helping us become better versions of
      ourselves.
    </p>
    <p>
      Having learned the basics of how things work and how to make things look
      nice, I’m now shifting my focus to understanding human psychology and
      behavior, with the goal of creating tools that empower individuals to
      understand their personal values, craft their microenvironment, achieve
      goals aligned with the greater good, and connect with other like-minded
      individuals to change our world for the better.
    </p>
    <p>
      If any of the above interest you, please let me know! I would love to chat
      with you, and see what we can come up with!
    </p> -->
    <transition name="modal">
      <div class="modal" @click.self="closeModal()" v-if="showModal">
        <component
          :is="currentModalItem"
          id="about-modal-component"
          class="modal-content card-modal"
          v-on:mounted="disableBodyScroll"
        ></component>
      </div>
    </transition>
  </div>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import About from "@/components/About.vue";

export default {
  name: "SayHi",
  props: {},
  components: {
    About,
    ChevronRightIcon
  },
  data: () => ({
    showUnderline: false,
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
    mouseoverTitle() {
      this.showUnderline = true;
    },
    mouseoutTitle() {
      this.showUnderline = false;
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
      const targetElement = document.getElementById("about-modal-component");
      disableBodyScroll(targetElement);
    },
    closeModal() {
      this.showModal = false;
      clearAllBodyScrollLocks();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-info:hover {
  cursor: pointer;
}
.site-title-flex-container {
  justify-content: flex-start;
}
.site-title {
  margin: 3rem 0rem 0rem;
  color: var(--dark-color);
  font-weight: 200;
  font-size: 2.2rem;
  line-height: 1;
}
.site-title-alt-1 {
  margin: 3rem 0rem 0rem;
  color: var(--dark-color);
  font-weight: 400;
  font-size: 5rem;
  line-height: 0.75;
  display: none;
}
.site-title-alt-2 {
  margin: 1.8rem 0rem 0rem;
  color: var(--dark-color);
  font-weight: 400;
  font-size: 1.95rem;
  line-height: 0.75;
  display: none;
}
.site-title-alt-3 {
  margin: 1.3rem 0rem 0rem;
  color: var(--dark-color);
  font-weight: 400;
  font-size: 1.95rem;
  line-height: 0.75;
  display: none;
}
/* @media screen and (max-width: 800px) {
  .site-title {
    display: none;
  }
  .site-title-alt-1,
  .site-title-alt-2,
  .site-title-alt-3 {
    display: inherit;
  }
} */
.site-title-emoji {
  font-size: 5.5rem;
  margin-left: -0.45rem;
  margin-right: 1.2rem;
  margin-bottom: 1rem;
}
.site-title-more {
  font-size: 1rem;
  margin-left: 2rem;
}
/* .site-title-word {
} */
.site-title-text {
  margin-top: 0.35rem;
  color: var(--dark-color);
}
.site-title-subtext {
  margin-top: 1.15rem;
  line-height: 1.5;
  font-size: 1.3rem;
}
.site-title-subtext-span {
  margin-right: 0.3rem;
}
.site-title-subtext-span-underline {
  /* text-decoration: underline; */

  background: linear-gradient(
    to top,
    transparent 8%,
    var(--dark-color) 9%,
    var(--dark-color) 14%,
    transparent 15%
  );
}
.site-title-subtext-span:hover {
  /* text-decoration: underline; */

  /* background: linear-gradient(
    to top,
    transparent 8%,
    var(--dark-color) 9%,
    var(--dark-color) 14%,
    transparent 15%
  ); */
}
.site-title-emphasis {
  font-weight: 600;
}
.site-title-highlight {
  cursor: pointer;
  background: linear-gradient(to top, #fff1de 50%, transparent 50%);
}
.site-title-highlight:hover {
  background: linear-gradient(to top, #fff6d2 50%, transparent 50%);
}
.feather-chevron-right {
  color: var(--dark-color);
  font-size: 1.3rem;
  margin: -0.1rem 0rem 0rem 0rem;
  stroke-width: 2.1;
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
