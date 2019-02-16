<template>
  <div class="site-footer">
    <div class="flex-container">
      <a
        href="http://instagram.com/jiananlidesign"
        target="_blank"
        rel="noreferrer"
      >
        <instagram-icon class="custom-class"></instagram-icon>
      </a>

      <a href="https://dribbble.com/jiananli" target="_blank" rel="noreferrer">
        <i class="fab fa-dribbble"></i>
      </a>

      <a
        href="https://www.youtube.com/channel/UCG5ZGGQu7GGCYT4Y1pxYzuw"
        target="_blank"
        rel="noreferrer"
      >
        <youtube-icon class="custom-class"></youtube-icon>
      </a>

      <a href="https://github.com/Jianan-Li" target="_blank" rel="noreferrer">
        <github-icon class="custom-class"></github-icon>
      </a>

      <a href="mailto:ljn07050@gmail.com">
        <mail-icon class="custom-class"></mail-icon>
      </a>

      <a
        href="http://www.linkedin.com/in/jiananl"
        target="_blank"
        rel="noreferrer"
      >
        <linkedin-icon class="custom-class"></linkedin-icon>
      </a>
    </div>
    <MyNotes id="notes"></MyNotes>
  </div>
</template>

<script>
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  MailIcon,
  GithubIcon
} from "vue-feather-icons";
import MyNotes from "@/components/MyNotes.vue";

export default {
  name: "SiteFooter",
  props: {},
  components: {
    InstagramIcon,
    YoutubeIcon,
    LinkedinIcon,
    MailIcon,
    GithubIcon,
    MyNotes
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-footer {
  margin: 0rem;
}
.flex-container {
  margin: 0rem;
  justify-content: center;
}
.custom-class {
  font-size: 1.5rem;
  margin: 0rem 1rem;
}
.fa-dribbble {
  font-size: 1.5rem;
  margin: 0rem 1rem;
  -webkit-text-stroke: 0.45px white;
}
</style>
