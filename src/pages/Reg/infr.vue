<template>
  <div class="infr">
    <div class="content">
      <div class="duanxin">
        <p class="username">
          <input type="text" v-model="user" placeholder="用户名/邮箱/手机号" />
        </p>
        <p class="password">
          <input type="password" v-model="psd" placeholder="请输入密码" />
        </p>
      </div>
      <div class="account"></div>
    </div>
    <a class="login" @click="reg(user, psd)" href="javascript:;">注册</a>
    <a class="fastLogin" href="javascript:;">一键注册</a>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqReg } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      user: "",
      psd: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async reg(userName, password) {
      console.log(userName, password);
      let nickName = "女帝";
      let avatar =
        "https://img1.baidu.com/it/u=217736605,3368236980&fm=26&fmt=auto&gp=0.jpg";
      let result = await reqReg({ userName, password, nickName, avatar });
      if (result.data.code == "success") {
        Toast.setDefaultOptions({ duration: 1000 });
        Toast.success("注册成功");
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      } else {
        Toast.fail("注册失败");
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.infr {
  height: 120px;
}
.content {
  margin-bottom: 30px;
  position: relative;
}
.duanxin {
  height: 120px;
}
.username {
  box-sizing: border-box;
  padding-bottom: 10px;
  padding-top: 10px;
  height: 50px;
  margin-top: 20px;
  border-bottom: solid 1px #efefef;
}
.username input {
  height: 29px;
  border: none;
  width: 325px;
  padding: 0;
}
.account {
  height: 120px;
}
.password {
  box-sizing: border-box;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: solid 1px #efefef;
  height: 50px;
  margin-top: 20px;
}
.password input {
  height: 29px;
  border: none;
  width: 325px;
  padding: 0;
}
.account {
  position: absolute;
  left: 0;
  top: 0;
  width: 325px;
  display: none;
}
.login {
  display: block;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #fab3b3),
    color-stop(73%, #ffbcb3),
    to(#ffcaba)
  );
  color: #fff;
}
.fastLogin {
  display: block;
  border-radius: 25px;
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid #ff2000;
  color: #f10000;
  background: #fff;
}
</style>