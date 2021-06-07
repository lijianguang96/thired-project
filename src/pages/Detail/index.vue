<template>
  <div class="desc" v-if="obj">
    <div class="img">
      <img :src="obj.coverImg" alt="" />
    </div>
    <div class="seckill">
      <span class="jdms">京东秒杀</span>
      <span class="jdpr">￥{{ obj.price }}</span>
      <div class="time">
        <p>距离结束还剩</p>
        <p>
          <van-count-down :time="time">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </p>
      </div>
    </div>
    <div class="name">
      {{ obj.name }}
    </div>
    <div class="other-one">
      <div>
        <span>优惠</span>
        <span><van-tag type="danger">满199减20</van-tag></span>
        <span><van-tag type="danger">满299减40</van-tag></span>
        <span><van-tag type="danger">满1000减100</van-tag></span>
      </div>
      <div>
        <span><van-tag type="danger">限购</van-tag></span>
        <span>购买不超过5件</span>
      </div>
      <div><span>白条</span> <span>3期免息</span></div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addcart(obj._id, 1)"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="nowpay" />
    </van-goods-action>
  </div>
</template>

<script>
import { reqDetail } from "../../api/detail";
import { reqAddCart } from "../../api/cart.js";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      obj: null,
      id: "",
      time: 60 * 60 * 60 * 1000,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getDetail(id) {
      const result = await reqDetail(id);
      console.log(result);
      this.obj = result.data;
    },
    async addcart(product, quantity) {
      // product   商品id
      //   quantity  数量(默认值1)
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      Toast("加入购物车成功");
      this.$router.push("/cart");
    },
    nowpay() {
      Toast("立即购买");
    },
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getDetail(this.id);
  },
  mounted() {},
};
</script>
<style scoped>
.img {
  width: 375px;
  height: 375px;
  /* background: chartreuse; */
  margin: auto;
}
.img img {
  width: 375px;
  height: 375px;
}
.seckill {
  width: 375px;
  height: 53px;
  background: rgb(255, 12, 95);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.seckill .jdms {
  display: block;
  background: red;
  color: #fff;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  text-align: center;
}
.seckill .jdpr {
  display: block;
  font-size: 24px;
  color: #fff;
  width: 100px;
  height: 30px;
  margin-left: 10px;
}

.time {
  width: 108px;
  height: 53px;
  text-align: center;
  margin-left: 117px;
  background: rgb(255, 234, 233);
}
.time p:nth-child(1) {
  width: 100%;
  height: 12px;
  color: #f71471;
  padding: 5px 0;
}
.colon {
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  width: 40px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.name {
  width: 339px;
  height: 62px;
  color: #262626;
  font-size: 16px;
  font-weight: 900;
  text-indent: 2em;
}
.other-one {
  width: 100%;
  height: 128px;
  background: rgb(242, 242, 242);
  border-radius: 10px;
}
.other-one div:nth-child(1) {
  width: 339px;
  height: 20px;
  padding-top: 20px;
  /* background: crimson; */
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-bottom: solid 1px #fff;
  padding-bottom: 2px;
}
.other-one div:nth-child(1) span {
  padding: 0 5px;
  margin-left: 5px;
  text-align: center;
}
.other-one div:nth-child(1) > span:nth-child(1) {
  font-size: 16px;
}
.other-one div:nth-child(2) {
  width: 339px;
  padding-top: 20px;
  height: 30px;
  /* background: fuchsia; */
  margin: auto;
  display: flex;
  justify-content: flex-start;
}
.other-one div:nth-child(2) span {
  margin-left: 30px;
}
/* .other-one div:nth-child(2) > span:nth-child(1) {
  display: inline;
  width: 50px;
  height: 20px;
} */
/* .other-one div:nth-child(2) > span:nth-child(2) {
  display: block; 
   width: 348px;
  height: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} */
.other-one div:nth-child(3) {
  width: 339px;
  height: 43px;
  font-size: 14px;
  /* background: #f71471; */
  margin: auto;
  color: #262626;
}
.other-one div:nth-child(3) span {
  margin-left: 10px;
}
</style>