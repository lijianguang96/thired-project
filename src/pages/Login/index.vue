<template>
  <div class="mine">
    <div class="nav">
      <span><img src="../../assets/xiaoyuhao.png" alt="" @click="back" /></span>
      <span style="margin-left: 70px">京东登录注册</span>
    </div>
    <p class="ipt">
      <span>+86</span>
      <span class="jiantou"
        ><img src="../../assets/iconfontjiantou.png" alt=""
      /></span>
      <input type="text" placeholder="请输入手机号" v-model="phonenum" />
    </p>
    <p class="ipt">
      <input type="text" placeholder="请输入验证码" v-model="sum" />
      <button class="btn" @click="getpwd">获取验证码</button>
    </p>
    <a class="btn-login a1" @click="login">登录</a>
    <a class="btn-login a2" @click="easylogin">一键登录</a>
    <div class="regidea">
      <span>账号密码登录</span>
      <span>手机号快速注册</span>
    </div>
    <div class="other">
      <span></span>
      <span>其他方式登录</span>
      <span></span>
    </div>
    <div class="otherLogin">
      <dl>
        <dt><img src="../../assets/QQ.png" alt="" /></dt>
        <dd>QQ</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/weixin.png" alt="" /></dt>
        <dd>微信</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/ai-ios.png" alt="" /></dt>
        <dd>苹果</dd>
      </dl>
    </div>
    <p class="policy_tip">
      <span data-v-6863f57b="">未注册的手机号验证后将自动创建京东账号, </span>
      登录即代表您已同意
      <a href="https://ihelp.jd.com/n/help/tip/getTipsFacade.json?tipId=74"
        >京东隐私政策</a
      >
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      phonenum: "",
      sum: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    login() {
      //登录
      if (this.phonenum && this.sum) {
        let obj = {
          phonenum: this.phonenum,
          yanzheng: this.sum,
        };
        localStorage.setItem("obj", JSON.stringify(obj));
        this.$router.push("/");
      } else {
        alert("请重新输入");
      }
    },
    back() {
      //返回
      this.$router.push("/");
    },
    getpwd() {
      //获取验证码
      console.log();
      this.sum = "";
      for (let i = 0; i < 5; i++) {
        this.sum += parseInt(Math.random() * 10);
      }
    },
    easylogin() {
      //一键登录
      let phonenum = JSON.parse(localStorage.getItem("obj")).phonenum || "";
      if (phonenum) {
        this.phonenum = phonenum;
      }
    },
  },
  created() {
    // const isLogin = localStorage.getItem("token") || "";
    // if (!isLogin) {
    //   //如果不存在，就会路由跳转
    //   //   this.$router.push("/login");
    //   this.$router.push({
    //     path: "/login",
    //   });
    // }
  },
  mounted() {},
};
</script>
<style scoped>
.nav {
  width: 325px;
  margin-left: 25px;
  height: 44px;
  /* background: chartreuse; */
  display: flex;
  align-items: center;
}
.nav span {
  font-size: 24px;
  color: #000;
}
.nav span img {
  width: 24px;
  height: 24px;
}
.ipt {
  height: 50px;
  width: 325px;
  margin-left: 25px;
  /* background: greenyellow; */
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.ipt span:nth-child(1) {
  width: 16px;
  color: #000;
  font-weight: 900;
  padding-right: 20px;
}
.ipt .jiantou img {
  display: block;
  width: 14px;
  height: 6px;
}
.ipt input {
  outline: none;
  border: none;
  height: 29px;
  padding-left: 20px;
}
.ipt .btn {
  border: none;
  outline: none;
  border-left: solid 1px #333;
  background: #fff;
  text-indent: 2em;
}
.btn-login {
  display: block;
  width: 325px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  margin: 10px 25px;
}
.a1 {
  background: rgb(255, 188, 179);
}
.a2 {
  border: solid 1px red;
  color: red;
}
.regidea {
  width: 325px;
  height: 20px;
  margin-left: 25px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #00000066;
}
.other {
  width: 325px;
  font-size: 14px;
  height: 16px;
  color: #00000033;
  display: flex;
  margin-left: 25px;
  margin-top: 80px;
}
.other span:nth-child(1) {
  width: 95px;
  height: 16px;
  border-bottom: solid 1px #00000033;
  margin-right: 10px;
}
.other span:nth-child(3) {
  width: 95px;
  height: 16px;
  border-bottom: solid 1px #00000033;
  margin-left: 10px;
}
dl {
  width: 325px;
  height: 70px;
  margin-left: 30px;
}
dl dt {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* background: crimson; */
}
dl dt img {
  width: 30px;
  height: 30px;
}
dl dd {
  width: 48px;
  height: 16px;
  color: rgba(0, 0, 0, 0.4);
  color: #4a90e2;
  text-align: center;
}
.otherLogin dl:nth-child(1) dt {
  background: #1cbaf6;
}
.otherLogin dl:nth-child(2) dt {
  background: #0abb08;
}
.otherLogin dl:nth-child(3) dt {
  background: #ccc;
}
.otherLogin {
  width: 325px;
  height: 70px;
  display: flex;
  margin-top: 40px;
  margin-left: 25px;
  /* background: chartreuse; */
  justify-content: space-between;
}
.policy_tip {
  width: 325px;
  height: 40px;
  margin-left: 25px;
  text-align: center;
  line-height: 20px;
  margin-top: 25px;
  /* background: crimson; */
}
</style>