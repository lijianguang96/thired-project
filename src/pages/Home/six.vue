<template>
  <div class="six">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="40"
    >
      <van-grid :column-num="2" icon-size="150">
        <van-grid-item
          v-for="item in products"
          :key="item._id"
          :icon="item.coverImg"
          :text="item.name"
          @click="godetail(item._id)"
        />
      </van-grid>
    </van-list>
  </div>
</template>

<script>
import { reqProducts } from "../../api/products";
export default {
  components: {},
  data() {
    return {
      products: [],
      page: 1,
      loading: false,
      finished: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getProducts() {
      this.loading = true;
      const result = await reqProducts({ page: this.page });
      console.log(result);
      this.loading = false;
      this.products = [...this.products, ...result.data.products]; // 把每次加载的数据拼接起来，这样就实现加载更多了
      // 判断一下数据是不是加载完了
      if (result.data.products < 10) {
        //如果返回的数据<10说明是最后一页,数据已经没有
        this.finished = true;
      } else {
        this.page++;
      }
    },
    godetail(id) {
      this.$router.push("/detail/" + id);
    },
    // 滚动条触底触发onLoad
    onLoad() {
      //在上拉加载中onLoad方法会自行执行一次的
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {},
};
</script>
<style scoped>
.six {
  width: 370px;
  min-height: 400px;
  /* background: chartreuse; */
  margin: auto;
}
/* .van-grid{
    display: flex;

} */
</style>