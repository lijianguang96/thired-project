<template>
  <div class="cart">
    <header class="header">
      <span @click="back">返回</span>
      <p>购物车</p>
      <div class="list">
        <van-icon class="list2" name="ellipsis" v-on:click="toggle()" />
        <van-list v-show="isShow" class="list1">
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
            class="list3"
          />
        </van-list>
      </div>
    </header>

    <!-- 未登录部分 -->
    <div class="text" v-if="!flag">
      <p>登录后可同步账户购物车中的商品</p>
      <!-- <input type="button" placeholder="登录" @click="login" /> -->
      <van-button round type="danger" @click="login" class="btn"
        >登录</van-button
      >
    </div>
    <div class="kong" v-if="!flag">
      <van-icon size="60" name="shopping-cart-o" />
      <p>登录后可同步购物车中的商品</p>
    </div>
    <!-- 秒杀场部分 -->
    <van-divider
      v-if="!flag"
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >京东秒杀</van-divider
    >

    <div class="mall-seckill" v-if="!flag">
      <div class="mall-head">
        <div class="mall-title">京东秒杀</div>

        <span class="time">16点场</span>
        <van-count-down :time="time" class="time2" />
      </div>
      <div class="mall-sider"></div>
    </div>

    <!-- 商品展示部分 -->
    <div class="good-list">
      <div v-for="item in products" :key="item._id" class="goods">
        <van-checkbox
          v-model="item.checked"
          checked-color="#00CCFF"
          icon-size="24px"
          :id="item.product._id"
          aria-checked="true"
        ></van-checkbox>
        <img :src="item.product.coverImg" alt="" />
        <div class="txt">
          <div class="pro-name">{{ item.product.name }}</div>
          <div class="pro-price">{{ item.product.price }}</div>
          <div class="a-r">
            <span @click="add(item.product._id, 1)">+</span>

            <div>{{ item.quantity }}</div>

            <span @click="item.quantity > 1 && reduce(item.product._id, -1)"
              >-</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 登录后token存在页面 -->

    <div class="kong" v-if="flag1">
      <van-icon size="60" name="shopping-cart-o" />
      <p>快去加入商品吧</p>
    </div>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >猜你喜欢</van-divider
    >

    <!-- 全选结算部分 -->
    <van-submit-bar
      :price="sumPrice * 100"
      button-text="立即结算"
      v-show="!kong"
      @submit="onSubmit"
      v-if="flag1"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <van-icon name="delete" v-show="checked" @click="dels" />
    </van-submit-bar>
  </div>
</template>

<script>
import { getToken } from "../../utils/auth";
import { reqCartlist, reqAddCart, reqDelAll, reqOrder } from "../../api/cart";
// import { reqAddCart } from "../../api/products";
export default {
  components: {},
  data() {
    return {
      isShow: false,
      time: 30 * 60 * 60 * 1000,
      list: ["首页", "分类搜索", "购物车", "我的京东", "浏览记录"],
      // loading: false,
      // finished: false,
      flag: getToken(),
      products: [],
      kong: false,
      flag1: false,
    };
  },
  computed: {
    //计算选中的
    sumPrice() {
      // 打对勾的全部算上
      return this.products
        .filter((item) => item.checked)
        .reduce((pre, cur) => {
          return pre + parseInt(cur.product.price) * parseInt(cur.quantity);
        }, 0);
    },
    // 全选
    checked: {
      set(flag) {
        return this.products.forEach((item) => (item.checked = flag));
      },
      get() {
        return (
          this.products.length ==
          this.products.filter((item) => item.checked == true).length
        );
      },
    },
  },
  watch: {},
  methods: {
    //返回
    back() {
      this.$router.back();
    },

    //右上角三个点显示
    toggle() {
      this.isShow = !this.isShow;
    },
    login() {
      this.$router.push("/login");
    },
    //请求列表
    async getCartlist() {
      const result = await reqCartlist();
      console.log(result);
      this.products = result.data;
      if (this.products.length == 0) {
        this.flag1 = false;
      } else {
        this.flag1 = true;
      }
    },

    // 添加
    async add(product, quantity) {
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      // 这里并没有重新调用获取购物车列表接口,而是在this.products里面进行数据减少或者增加
      this.products.forEach((data) => {
        if (data.product._id == product) {
          data.quantity = data.quantity + quantity;
        }
      });
    },
    // 减少
    async reduce(product, quantity) {
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      // this.getCartlist();
      // 找到购物当前的id
      this.products.forEach((data) => {
        if (data.product._id == product) {
          data.quantity = data.quantity + quantity;
        }
      });
    },

    // 生成订单
    async onSubmit() {
      //新建订单商品数组
      var orderDetails = [];
      //遍历
      this.products.forEach((item) => {
        //如果选中，放入订单数组中
        if (item.checked == true) {
          orderDetails.push({
            //数组内容
            quantity: item.product.quantity,
            product: item.product._id,
            price: item.product.price,
          });
        }
      });
      //发起请求 reqAddorder 请求订单接口
      const result = await reqOrder({
        //放入参数
        receiver: "李连杰",
        regions: "河南郑州荥阳",
        address: "黄河边儿1号楼1023",
        orderDetails,
      });
      console.log(result);
      //跳转订单页面
      this.$router.push("/order");
    },

    async dels() {
      console.log(this.products);

      var ids = [];
      this.products
        //filter 筛选出打对勾的
        .filter((item) => item.checked)
        .forEach((item) => {
          console.log(item._id);
          ids.push(item._id);
        });

      console.log(ids);

      // console.log(ids);
      const result = await reqDelAll({ ids });

      this.products = [];
      console.log(result.statusText);
    },
  },
  created() {
    this.getCartlist();
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: black;
  text-align: center;
  border-bottom: solid 2px bisque;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list2 {
  position: relative;
}
.list1 {
  width: 100px;
  height: 40px;
  /* background: chartreuse; */
  position: absolute;
  z-index: 20;
  right: 20px;
}
.list3 {
  /* width: 150px; */
  background: black;
  color: #fff;
}

.header span {
  float: left;
}
* {
  margin: 0;
  padding: 0;
}

.text {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 60px;
  text-align: center;
}
.kong {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shoping {
  font-size: 50px;
}
.mall-title {
  font-size: 16px;
  color: #333;
  margin: 0 10px 0 15px;
  font-weight: 700;
}
.mall-head {
  display: flex;
}
.time {
  color: #999;
  font-size: 12px;
}
.time2 {
  margin-left: 10px;
  color: red;
}
</style>