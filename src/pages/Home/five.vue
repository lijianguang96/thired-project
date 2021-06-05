<template>
  <div class="seckill">
    <div class="one">
      <span class="letter-one">京东秒杀</span>
      <span class="letter-two">18点场</span>
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <span class="letter-three">更多秒杀+</span>
    </div>
    <div class="two">
      <dl v-for="(item, index) in list" :key="index">
        <dt><img :src="item.coverImg" alt="" /></dt>
        <dd>￥{{ item.price }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { reqProducts } from "../../api/products";
export default {
  components: {},
  data() {
    return {
      time: 60 * 60 * 1000,
      list: [],
      per: 4,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getProducts() {
      let params = { per: this.per };
      const res = await reqProducts(params);
      this.list = res.data.products;
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {},
};
</script>
<style scoped>
.seckill {
  width: 100%;
  height: 159px;
  background: #fff;
}
.one {
  width: 355px;
  height: 34px;
  padding-top: 15px;
  padding-bottom: 10px;
  /* background: chartreuse; */
  display: flex;
  align-items: center;
  margin: auto;
}
.letter-one {
  font-size: 25px;
  color: #333;
}
.letter-two {
  font-size: 17px;
  color: #ff2727;
}
.colon {
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  width: 25px;
  height: 18px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.van-count-down {
  width: 57px;
  height: 18px;
  padding: 0 0 0 9px;
}
.letter-three {
  font-size: 14px;
  color: #f23030;
  margin-left: 65px;
}
img {
  width: 76px;
  padding: 0 5px;
  height: 77px;
}
.two {
  width: 350px;
  height: 95px;
  margin: auto;
  display: flex;
}
</style>