<template>
  <div class="banner">
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="red">
        <van-swipe-item v-for="item in lists" :key="item._id"
          ><img :src="item.coverImg" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>

    <div class="hide"></div>
  </div>
</template>

<script>
import { reqBanner } from "../../api/banner";
export default {
  components: {},
  data() {
    return {
      lists: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getProducts() {
      const res = await reqBanner();
      console.log(res);
      this.lists = res.data.products;
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {},
};
</script>
<style scoped>
.banner {
  width: 100%;
  height: 140px;
  /* background: chartreuse; */
  border-radius: 10px;
  position: relative;
}
.swiper {
  width: 350px;
  height: 140px;
  margin: auto;
  overflow: hidden;
  z-index: 10;
  border-radius: 10px;
  background: darkorange;
  padding-bottom: 10px;
}
img {
  width: 100%;
  height: 140px;
}
.hide {
  width: 100%;
  height: 70px;
  border-radius: 0 0 24px 24px;
  background: rgb(228, 49, 48);
  position: absolute;
  left: 0;
  top: 0;
}
.my-swipe {
  z-index: 10;
}
</style>