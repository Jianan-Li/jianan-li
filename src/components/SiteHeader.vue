<template>
  <div class="site-header" @click="$router.push('/')">JIANAN LI</div>
</template>

<script>
export default {
  name: "SiteHeader",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header {
  cursor: pointer;
  z-index: 10;
  position: fixed;
  width: 15%;
  text-align: right;
  margin-top: 3rem;
  color: var(--dark-color);
  font-weight: 600;
  font-size: 28px;
  line-height: 0.8;
  letter-spacing: 4px;
}
@media screen and (max-width: 1200px) {
  .site-header {
    margin: 11px 0px;
    position: relative;
    padding-left: 11%;
    width: auto;
    text-align: left;
  }
}
@media screen and (max-width: 992px) {
  .site-header {
    padding-left: 8%;
  }
}
@media screen and (max-width: 768px) {
  .site-header {
    padding-left: 5%;
  }
}
@media screen and (max-width: 576px) {
  .site-header {
    padding-left: 2%;
  }
}
</style>
