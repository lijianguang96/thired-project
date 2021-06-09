<template>
  <div class="mine">
    <!-- <div v-if="isLogin"> -->
    <div class="avatar">
      <van-image
        round
        width="5rem"
        height="5rem"
        :src="obj.avatar"
        v-if="obj"
      />
      <div class="my">
        <h2 v-if="currentname">{{ currentname }}</h2>
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

    <div id="account">
      <van-cell is-link @click="showAccount(obj)">
        <van-icon name="user-o" size="30" />信息管理
      </van-cell>
      <van-popup v-model="account">
        <van-form @submit="onSubmit">
          <h2>修改昵称</h2>
          <van-field
            v-model="nickName"
            name="nickName"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="avatar"
            name="avatar"
            label="头像"
            placeholder="头像"
            :rules="[{ required: true, message: '请填写头像地址' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </van-popup>
    </div>

    <div id="password">
      <van-cell is-link @click="showPassword">
        <van-icon name="edit" size="30" />密码管理
      </van-cell>
      <van-popup v-model="uppassword">
        <van-form @submit="onPassword">
          <h2>修改密码</h2>
          <van-field
            autocomplete="off"
            v-model="password"
            name="oldPassword"
            label="原密码"
            placeholder="原密码"
            :rules="[{ required: true, message: '请填写原密码' }]"
          />
          <van-field
            autocomplete="off"
            v-model="newpassword"
            name="password"
            label="新密码"
            placeholder="新密码"
            :rules="[{ required: true, message: '请填写新密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </van-popup>
    </div>

    <div id="updata">
      <van-cell is-link @click="showUpdata">
        <van-icon name="setting-o" size="30" />
        退出登陆
      </van-cell>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { reqUserInfo } from "../../api/user";
import { reqChangename } from "../../api/user";
import { reqChangepwd } from "../../api/user";
import { removeToken } from "../../utils/auth";
import { Notify } from "vant";
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  components: {},
  data() {
    return {
      isLogin: localStorage.getItem("token") || "",
      currentname: "",
      show: false,
      updata: false,
      wallet: false,
      account: false,
      uppassword: false,
      obj: null,
      nickName: "",
      password: "",
      newpassword: "",
      avatar: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    showOrder() {
      this.show = true;
      this.$router.push("/order");
    },
    showUpdata() {
      this.updata = true;
      Dialog.confirm({
        title: "正在退出登陆",
        message: "确认是否退出",
      })
        .then(() => {
          removeToken();
          this.$router.push("/");
          this.$router.go(0);
        })
        .catch(() => {
          // 取消
        });
    },
    showWallet() {
      this.wallet = true;
    },
    showAccount(obj) {
      this.account = true;
      this.nickName = obj.nickName;
      this.avatar = obj.avatar;
    },
    showPassword() {
      this.uppassword = true;
    },
    async getUserInfo() {
      const result = await reqUserInfo();
      // console.log(result.data);
      this.obj = result.data;
      this.currentname = result.data.nickName;
    },
    async onSubmit(values) {
      // console.log("submit", values);
      const result = await reqChangename(values);
      // console.log(result);
      if (result.data.code == "success") {
        Notify({ type: "success", message: "修改成功" });
        this.account = false;
        this.currentname = this.nickName;
      }
    },
    async onPassword(values) {
      // console.log("submit", values);
      // console.log(values.password);
      const pas = /(?=.*\d)(?=.*[a-z])(?=.*[@#$%!^*/~`])/;
      if (pas.test(values.password)) {
        const result = await reqChangepwd(values);
        // console.log(result);
        if (result.data.code == "error") {
          Toast("原始密码输入错误");
        } else {
          Toast("密码修改成功,请重新登陆");
          setTimeout(() => {
            removeToken();
            this.$router.push("/login");
          }, 2000);
        }
      } else {
        Toast("新密码必须由(数字,字母,特殊符号组成)");
      }
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
  background: #d2433a;
  margin-bottom: 20px;
  position: relative;
}
.avatar img {
  float: left;
}
.van-image {
  margin-bottom: 10px;
}
.my {
  float: right;
  position: absolute;
  top: 55px;
  left: 162px;
  color: white;
}
.my h2 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}
.my p {
  font-size: 0.5rem;
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
.van-popup--center {
  width: 100%;
  height: 50%;
}
.van-popup--center h2 {
  font-size: 20px;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.van-form {
  margin-top: 30px;
}
.van-field--error {
  margin-bottom: 30px;
}
</style>
