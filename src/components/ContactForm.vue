<template>
  <div class="contact-form">
    <form action="https://formspree.io/ljn07050@gmail.com" method="POST">
      <div class="field">
        <!-- <label class="label">Name</label> -->
        <div class="control">
          <input
            class="input text"
            type="text"
            name="Name"
            autocomplete="name"
            placeholder="name"
          />
        </div>
      </div>

      <div class="field">
        <!-- <label class="label">Email</label> -->
        <div class="control">
          <input
            class="input text"
            type="email"
            name="Email"
            autocomplete="email"
            placeholder="email"
          />
        </div>
      </div>

      <div class="field">
        <!-- <label class="label">Message</label> -->
        <div class="control">
          <textarea
            class="textarea text"
            rows="5"
            name="Message"
            placeholder="message"
          ></textarea>
        </div>
      </div>

      <input class="button" type="submit" value="SEND" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {}
};
</script>

<style scoped>
.contact-form {
  margin: 15rem auto 6rem;
  width: 30rem;
}
@media screen and (max-width: 768px) {
  .contact-form {
    margin: 6rem 0rem 6rem;
    width: auto;
  }
}
/* @media screen and (max-width: 600px) {
  .contact-form {
    margin: 6rem 0rem 6rem;
    width: auto;
  }
} */
.field {
  margin: 1rem 0rem 0rem;
}
.button {
  width: 100%;
  margin: 1rem 0rem 0rem;
}
</style>
