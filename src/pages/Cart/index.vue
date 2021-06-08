<template>
  <div class="cart">
    <header class="header">
      <span @click="back">返回</span>
      <p>购物车</p>
      <van-popover
        v-model="showPopover"
        theme="dark"
        trigger="click"
        :actions="actions"
      >
        <template #reference>
          <van-icon
            class="list2"
            name="ellipsis"
            v-on:click="toggle()"
            size="40px
          "
          />
          <!-- <van-button type="primary">更多</van-button> -->
        </template>
      </van-popover>
      <!-- <div class="list">
        <van-icon class="list2" name="ellipsis" v-on:click="toggle()" />
        <van-list v-show="isShow" class="list1">
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
            class="list3"
          />
        </van-list>
      </div> -->
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

    <!-- 购物车-商品展示部分 -->
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
          <div class="pro-price">价格{{ item.product.price }}</div>
          <div class="a-r">
            <!-- <span @click="add(item.product._id, 1)">+</span>

            {{ item.quantity }}

            <span @click="item.quantity > 1 && reduce(item.product._id, -1)"
              >-</span
            > -->
            <van-stepper
              v-model="item.quantity"
              @minus="reduce(item.product._id, -1)"
              @plus="add(item.product._id, 1)"
            />
            <div class="del">
              <van-icon name="delete" @click="del(item._id)" size="30px" />
            </div>
            <!-- <van-stepper
              v-model="item.quantity"
              @minus="item.quantity > 1 && reduce(item.product._id, -1)"
              @plus="add(item.product._id, 1)"
              step="1"
            /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 登录后token存在页面 -->

    <div class="kong" v-if="!flag1">
      <van-icon size="60" name="shopping-cart-o" />
      <p>快去加入商品吧</p>
    </div>

    <!-- 猜你喜欢部分 -->
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >猜你喜欢</van-divider
    >
    <van-grid :column-num="2" icon-size="150">
      <van-grid-item
        v-for="item in products1"
        :key="item._id"
        :icon="item.coverImg"
        :text="item.name"
        @click="godetail(item._id)"
      />
    </van-grid>
    <!-- <div class="love" v-for="item in products1" :key="item._id">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div> -->

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
import { Toast } from "vant";
import {
  reqCartlist,
  reqAddCart,
  reqDelAll,
  reqOrder,
  reqDel,
} from "../../api/cart";
import { reqProducts } from "../../api/products";
import { mapGetters } from "vuex";
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
      products1: [],
      kong: false,
      flag1: false,

      showPopover: false,
      actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
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
    ...mapGetters(["getInfo"]),
  },
  watch: {},
  methods: {
    //返回
    back() {
      this.$router.back();
    },
    async del(id) {
      const res = await reqDel(id);
      console.log(res);
      let idx = this.products.findIndex((v) => v._id == id);
      this.products.splice(idx, 1);
    },
    //右上角三个点显示
    toggle() {
      this.isShow = !this.isShow;
    },
    login() {
      this.$router.push("/login");
    },
    //请求购物车列表
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
    //请求猜你喜欢列表
    async getProlist() {
      const result = await reqProducts();
      console.log(111);
      console.log(result);
      this.products1 = result.data.products;
      // if (this.products.length == 0) {
      // } else {
      // }
    },

    // 添加
    async add(product, quantity) {
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      console.log(product, quantity);

      // 这里并没有重新调用获取购物车列表接口,而是在this.products里面进行数据减少或者增加
      // this.products.forEach((data) => {
      //   if (data.product._id == product) {
      //     data.quantity = data.quantity + quantity;
      //   }
      //   console.log(data.product._id);
      //   console.log(data.quantity);
      // });
    },
    // 减少
    async reduce(product, quantity) {
      const result = await reqAddCart({ product, quantity });
      console.log(result);
      console.log(product, quantity);
    },
    godetail(id) {
      this.$router.push("/detail/" + id);
    },

    // 生成订单+
    async onSubmit() {
      if (this.getInfo) {
        const userInfo = this.getInfo;
        const orderDetails = [];
        let arr = this.products.filter((v) => v.checked == true);
        if (arr.length) {
          arr.forEach((v) => {
            let obj = {
              quantity: v.quantity,
              product: v.product._id,
              price: v.product.price,
            };
            orderDetails.push(obj);
          });
          let data = { ...userInfo, orderDetails };
          localStorage.setItem("data", JSON.stringify(data));
          const res = await reqOrder(data);
          console.log(res);
          if (res.data.code == "success") {
            this.$router.push("/order");
          }
        } else {
          Toast("请选择商品");
        }
      } else {
        Toast("您还没有地址，快去填写吧");
        this.$router.push("/address");
      }
    },
    //全部删除
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
    this.getProlist();
  },
  mounted() {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
  flex-shrink: 0;
  flex-grow: 1;
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
.good-list {
  width: 100%;
  min-height: 300px;
}
.goods {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
}
.goods img {
  margin: 0 10px;
  /* width: 50px;
  height: 50px; */
}
</style>