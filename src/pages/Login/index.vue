<template>
  <div class="login">
    <div class="banner">
      <Header></Header>
      <Infr></Infr>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Infr from "./infr";
import Footer from "./footer";
export default {
  components: {
    Header,
    Infr,
    Footer,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.banner {
  height: 600px;
  width: 325px;
  margin-left: 25px;
}
</style>
