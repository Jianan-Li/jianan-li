<template>
  <div class="home">
    <SiteMenu />
    <div class="page-body">
      <SayHi id="about" class></SayHi>
      <ProjectGallery id="HeroShots1" :projects="projects1"></ProjectGallery>
      <Visualizations id="datavis"></Visualizations>
      <ProjectGallery id="HeroShots2" :projects="projects2"></ProjectGallery>
      <Gallery id="sketches" path="sketches" :media="sketches"></Gallery>
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
import Visualizations from "@/components/Visualizations.vue";
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
    Visualizations,
    ContactForm,
    SiteFooter
  },
  data: () => ({
    projects1: {
      categories: ["apps"],
      apps: ["Grocery", "T3", "IPDDirectory"]
    },
    projects2: {
      categories: ["objects", "devices"],
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
