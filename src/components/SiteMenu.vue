<template>
  <nav class="site-menu">
    <div
      class="site-menu-item-container"
      v-for="menuItem in menuItems"
      :key="menuItem"
    >
      <router-link
        :to="`#${menuItem}`"
        v-scroll-to="{
          el: '#' + menuItem,
          cancelable: false,
          duration: 500,
          offset: 0,
          easing: 'ease-in-out',
          onStart: onScrollStart,
          onDone: onScrollDone
        }"
        class="link-responsive"
      >
        <div
          class="site-menu-item"
          @mouseover="mouseoverFunc(menuItem)"
          @mouseout="mouseoutFunc()"
          @click="activeSection = menuItem"
          v-bind:class="classObject(menuItem)"
        >
          {{ menuItem }}
        </div>
      </router-link>
    </div>

    <!-- <div class="site-menu-item-divider">—</div> -->
    <!--
    <router-link
      to="#contact"
      v-scroll-to="{
        el: '#' + 'contact',
        cancelable: false,
        onStart: onScrollStart,
        onDone: onScrollDone
      }"
    >
      <div
        class="site-menu-item"
        @mouseover="mouseoverFunc('contact')"
        @mouseout="mouseoutFunc()"
        @click="activeSection = 'contact'"
        v-bind:class="classObject('contact')"
      >
        contact
      </div>
    </router-link> -->
  </nav>
</template>

<script>
const TIMEOUT = 1;

export default {
  name: "SiteMenu",
  props: {},
  data: () => ({
    menuItems: ["apps", "datavis", "objects", "devices", "sketches", "things"],
    activeSection: "",
    pageIsScrolling: false,
    mouseoverOverride: false,
    mouseoverSection: ""
  }),
  computed: {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT);
    }
  },
  methods: {
    classObject: function(section) {
      return {
        "site-menu-item-active":
          this.activeSection === section &&
          !(this.mouseoverOverride && this.mouseoverSection !== section)
      };
    },
    mouseoverFunc: function(section) {
      // console.log(`mouse over: ${section}`);
      this.mouseoverOverride = true;
      this.mouseoverSection = section;
    },
    mouseoutFunc: function() {
      // console.log(`mouse out`);
      this.mouseoverOverride = false;
    },
    onScrollStart: function() {
      this.pageIsScrolling = true;
    },
    onScrollDone: function() {
      this.pageIsScrolling = false;
    },
    scrollTo: function(hashtag) {
      setTimeout(() => {
        location.href = hashtag;
      }, TIMEOUT);
    },
    handleScroll() {
      // console.log(document.getElementById("apps").getBoundingClientRect().top);
      if (!this.pageIsScrolling) {
        // console.log("page is not scrolling");
        if (
          document.getElementById("contact").getBoundingClientRect().top < 250
        ) {
          this.activeSection = "contact";
        } else if (
          document.getElementById("things").getBoundingClientRect().top < 160
        ) {
          this.activeSection = "things";
        } else if (
          document.getElementById("sketches").getBoundingClientRect().top < 160
        ) {
          this.activeSection = "sketches";
        } else if (
          document.getElementById("devices").getBoundingClientRect().top < 160
        ) {
          this.activeSection = "devices";
        } else if (
          document.getElementById("objects").getBoundingClientRect().top < 160
        ) {
          this.activeSection = "objects";
        } else if (
          document.getElementById("datavis").getBoundingClientRect().top < 160
        ) {
          this.activeSection = "datavis";
        } else if (
          document.getElementById("apps").getBoundingClientRect().top < 160
        ) {
          this.activeSection = "apps";
        } else {
          this.activeSection = "";
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-menu {
  cursor: pointer;
  z-index: 10;
  position: fixed;
  width: 12rem;
  text-align: right;
  margin-top: 7.5rem;
  /* color: #4a4a4a; */
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 2.5;
}
.site-menu-item-small {
  font-size: 1.2rem;
}
.site-menu-item-divider {
  line-height: 1.5;
  cursor: default;
  color: var(--light-color);
}
.site-menu-item-active {
  color: var(--dark-color);
  transition: var(--off-transition);
}
.site-menu-item {
  transition: var(--off-transition);
}
@media screen and (max-width: 1200px) {
  .site-menu {
    display: none;
  }
}
</style>
