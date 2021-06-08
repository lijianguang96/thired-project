<template>
  <div class="">
    <div class="wrap">
      <van-nav-bar
        title="我的订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-contact-card
        type="edit"
        :name="getInfo.receiver"
        :tel="getInfo.regions + getInfo.address"
        @click="onEdit"
      />
      <div class="order" v-for="item in dataOrders" :key="item._id">
        <div class="one">
          <span>JD</span>
          <span>京东自营</span>
        </div>
        <div class="two">
          <img
            src="https://img.youpin.mi-img.com/shopmain/768beb93c53535292eb95bfd3c8b8f82.jpg"
            alt=""
          />
          <span>订单编号：{{ item.no }}</span>
        </div>
        <div class="three">
          <div>7天无理由退货</div>
          <div>价格说明</div>
        </div>
        <div class="four">
          <span>配送</span>
          <span>京东快递</span>
        </div>
        <div class="five">
          <span>总计：</span>
          <span>￥{{ item.price }}</span>
          <button @click="del(item._id)">删除</button>
        </div>
      </div>
    </div>
    <van-button round type="info" size="large" class="zfb" @click="pay1"
      >支付宝支付</van-button
    >
    <van-button round type="info" size="large" @click="pay1"
      >微信支付</van-button
    >
    <van-dialog v-model="show" title="请扫码支付" show-cancel-button>
      <img src="../../assets/weixin1.png" />
    </van-dialog>
  </div>
</template>

<script>
import { reqGetOrder, reqDelOrder } from "../../api/order";
// import { Toast } from "vant";
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      show: false,
      obj: null,
      dataOrders: [],
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
    };
  },
  computed: {
    ...mapGetters(["getInfo", "getData"]),
  },
  watch: {},
  methods: {
    goaddlist() {
      this.$router.push("/addlist");
    },
    onClickLeft() {
      this.$router.back();
    },
    onEdit() {
      this.$router.push("/addlist");
    },
    async getOrderList() {
      const res = await reqGetOrder();
      console.log(res);
      this.dataOrders = res.data.orders;
      console.log(this.dataOrders);
    },
    async del(id) {
      const res = await reqDelOrder(id);
      console.log(res);
      let idx = this.dataOrders.findIndex((v) => v._id == id);
      this.dataOrders.splice(idx, 1);
    },
    pay1() {
      this.show = !this.show;
    },
  },

  created() {
    this.getOrderList();
    // this.dataOrders = this.getData.orderDetails;
    // console.log(this.dataOrders);
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
.order {
  width: 100%;
  height: 185px;
  margin-top: 10px;
  /* background: chartreuse; */
}
.van-dialog {
  width: 300px;
  height: 400px;
}
.van-dialog img {
  text-align: center;
  width: 300px;
  height: 300px;
}
.one {
  width: 100%;
  height: 20px;
  /* background: darkred; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.one img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
.one span {
  color: #333;
  padding: 0 10px;
  font-weight: 600;
}
.two {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  /* background: darkorange; */
}
.two img {
  width: 75px;
  height: 75px;
}
.two span {
  /* background: crimson; */
  font-size: 14px;
  color: #333;
}
.three {
  width: 300px;
  height: 30px;
  margin-left: 75px;
  /* background: cyan; */
}
.three div {
  width: 100%;
  height: 15px;
  line-height: 15px;
}
.four {
  width: 350px;
  height: 17px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.four span {
  padding: 5px 0;
}
.five {
  width: 350px;
  height: 30px;
  display: flex;
  font-size: 20px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}
.five span:nth-child(1) {
  color: #333;
  text-align: right;
  font-size: 14px;
}
.five span:nth-child(2) {
  color: #f2270c;
}
.zfb {
  margin: 20px 0;
}
</style>