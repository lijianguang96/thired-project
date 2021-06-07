<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <Thired></Thired>
    <Four></Four>
    <Five></Five>
    <Six></Six>
  </div>
</template>

<script>
import Header from "./header.vue";
import Swiper from "./swiper.vue";
import Thired from "./third.vue";
import Four from "./four.vue";
import Five from "./five.vue";
import Six from "./six";
export default {
  components: {
    Header,
    Swiper,
    Thired,
    Four,
    Five,
    Six,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    document.onscroll = function () {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let heder = document.querySelector(".header");
      if (heder) {
        if (scrollTop > 40) {
          heder.style.position = "fixed";
        } else {
          heder.style.position = "static";
          heder.style.zIndex = "1";
        }
      }
    };
  },
};
</script>
<style scoped>
</style>