<template>
  <div class="">
    <div @click="back" class="back">返回</div>
    <div @click="goaddlist">收货人管理</div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { reqGetOrder } from "../../api/order";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    goaddlist() {
      this.$router.push("/addlist");
    },
    back() {
      this.$router.back();
    },
    async getOrderList() {
      const res = await reqGetOrder();
      console.log(res);
    },
  },
  created() {
    this.getOrderList();
  },
  mounted() {},
};
</script>
<style scoped>
.back {
  width: 20;
  height: 20px;
  color: chartreuse;
  font-size: 19px;
}
</style>