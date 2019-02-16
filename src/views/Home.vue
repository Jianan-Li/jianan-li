<template>
  <div class="home">
    <!-- <SiteHeader /> -->
    <SiteMenu />
    <div class="page-body">
      <SayHi id="about" class=""></SayHi>
      <ProjectGallery id="HeroShots" :projects="projects"></ProjectGallery>
      <Gallery id="sketches" path="sketches" :media="sketches"></Gallery>
      <MyGraph id="interests"></MyGraph>
      <MyThings id="things"></MyThings>
      <ContactForm id="contact"></ContactForm>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
import SiteMenu from "@/components/SiteMenu.vue";
import SayHi from "@/components/SayHi.vue";
import ProjectGallery from "@/components/ProjectGallery.vue";
import Gallery from "@/components/Gallery.vue";
import MyThings from "@/components/MyThings.vue";
import MyGraph from "@/components/MyGraph.vue";
import ContactForm from "@/components/ContactForm.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "home",
  components: {
    SiteMenu,
    SayHi,
    ProjectGallery,
    Gallery,
    MyThings,
    MyGraph,
    ContactForm,
    SiteFooter
  },
  data: () => ({
    projects: {
      categories: ["apps", "objects", "devices"],
      apps: ["Grocery", "T3"],
      objects: [
        "PigPushToy",
        "WateringCan",
        "LetterOpener",
        "Shi",
        "Kollapse",
        "TwoSix"
      ],
      devices: ["Tetris", "FloorPiano", "BusStopKiosk"]
    },
    sketches: [
      "tape-measure.jpg",
      "chair.jpg",
      "fiftythree-pencil.jpg",
      "kollapse.jpg",
      "shoes.jpg",
      "cube.mp4"
    ]
  })
};
</script>

<style scoped></style>
