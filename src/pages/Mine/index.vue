<template>
  <div class="mine">
    <div class="avatar">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="my">
        <h2>name</h2>
        <p>金牌用户</p>
      </div>
    </div>
    <div id="order">
      <van-cell is-link @click="showOrder">
        <van-icon name="balance-list-o" size="30" />
        我的订单
      </van-cell>
      <van-grid clickable :column-num="4">
        <van-grid-item
          icon="pending-payment"
          badge="99+"
          text="待付款"
          to="/"
        />
        <van-grid-item icon="logistics" badge="99+" text="待收货" to="/" />
        <van-grid-item
          icon="comment-circle-o"
          badge="99+"
          text="待评价"
          to="/"
        />
        <van-grid-item icon="orders-o" badge="99+" text="待退换" to="/" />
      </van-grid>
    </div>

    <div id="wallet">
      <van-cell is-link @click="showWallet">
        <van-icon name="balance-o" size="30" />我的钱包
      </van-cell>
      <van-popup v-model="wallet">我的钱包</van-popup>
    </div>

    <div id="updata">
      <van-cell is-link @click="showUpdata">
        <van-icon name="setting-o" size="30" />
        设置
      </van-cell>
      <van-popup v-model="updata">设置</van-popup>
    </div>
  </div>
</template>

<script>
import { reqUserInfo } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      show: false,
      updata: false,
      wallet: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    showOrder() {
      this.show = true;
    },
    showUpdata() {
      this.updata = true;
    },
    showWallet() {
      this.wallet = true;
    },
    async getUserInfo() {
      const result = await reqUserInfo();
      console.log(result);
    },
  },
  created() {
    this.getUserInfo();
  },
  mounted() {},
};
</script>
<style scoped>
.mine {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.avatar {
  float: left;
  margin: 0 auto;
  padding-top: 20px;
  padding-left: 50px;
  width: 100%;
  background: orange;
  margin-bottom: 20px;
}
.avatar img {
  float: left;
}
.van-image {
  margin-bottom: 10px;
}
.my {
  float: right;
  margin-right: 170px;
  margin-top: 10px;
}
.my h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.my p {
  font-size: 0.8rem;
}
.van-hairline--top {
  float: left;
}
.van-cell {
  margin-bottom: 10px;
  text-align: center;
  line-height: 1;
}
.van-grid {
  width: 100%;
}
</style>
