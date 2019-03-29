<template>
  <footer>
    <div class="flex-container">
      <a
        href="http://instagram.com/jiananlidesign"
        target="_blank"
        rel="noreferrer"
      >
        <instagram-icon class="social-icon"></instagram-icon>
      </a>

      <a href="https://dribbble.com/jiananli" target="_blank" rel="noreferrer">
        <i class="fab fa-dribbble social-icon"></i>
      </a>

      <a
        href="https://www.youtube.com/channel/UCG5ZGGQu7GGCYT4Y1pxYzuw"
        target="_blank"
        rel="noreferrer"
      >
        <youtube-icon class="social-icon"></youtube-icon>
      </a>

      <a href="https://github.com/Jianan-Li" target="_blank" rel="noreferrer">
        <github-icon class="social-icon" />
      </a>

      <a
        href="https://observablehq.com/@jianan-li"
        target="_blank"
        rel="noreferrer"
      >
        <ObservableIcon class="social-icon" />
      </a>

      <a href="mailto:ljn07050@gmail.com">
        <mail-icon class="social-icon"></mail-icon>
      </a>

      <a
        href="http://www.linkedin.com/in/jiananl"
        target="_blank"
        rel="noreferrer"
      >
        <linkedin-icon class="social-icon"></linkedin-icon>
      </a>
    </div>
    <MyNotes id="notes"></MyNotes>
  </footer>
</template>

<script>
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  MailIcon,
  GithubIcon
} from "vue-feather-icons";
import ObservableIcon from "@/assets/icons/observable.svg";
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
    ObservableIcon,
    MyNotes
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  /* margin: 0rem; */
}
.flex-container {
  margin: 0rem;
  justify-content: center;
}
.social-icon {
  font-size: 1.5rem;
  margin: 0rem 1rem;
}
.fa-dribbble {
  padding: 0.05rem 0rem 0rem;
  -webkit-text-stroke: 0.45px white;
}
</style>
