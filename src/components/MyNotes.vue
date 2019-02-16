<template>
  <div class="my-notes">
    <div class="flex-container">
      <div>
        <a
          href="https://www.notion.so/Building-My-Website-a76a08776b8a4a20a66ec3c68d4dd330"
          target="_blank"
          rel="noreferrer"
        >
          <book-open-icon class="custom-class"></book-open-icon
          ><span class="footnote"> Made with Flexbox and Vue.js</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { BookOpenIcon } from "vue-feather-icons";

export default {
  name: "MyNotes",
  props: {},
  components: {
    BookOpenIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-notes {
  margin: 2rem 0rem 1rem;
}
.flex-container {
  justify-content: center;
}
span.footnote {
  font-size: 0.85rem;
}
</style>
