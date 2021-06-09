<template>
  <div class="infr">
    <div class="content">
      <div class="duanxin">
        <p class="username">
          <input
            type="text"
            class=""
            v-model.trim="user"
            placeholder="用户名/邮箱/手机号"
            @input="xian"
          />
          <span @click="del" class="xx"></span>
        </p>
        <p class="password">
          <input
            type="password"
            @input="xian"
            v-model.trim="psd"
            placeholder="请输入密码"
          />
          <span class="x" @click="dell"></span>
          <span class="show" @click="qie"></span>
          <span class="change">修改密码</span>
        </p>
      </div>
      <div class="account"></div>
    </div>
    <a class="login" href="javascript:;" @click="log(user, psd)">登录</a>
    <a class="fastLogin" href="javascript:;">一键登录</a>
    <p class="reg">
      <span>账号密码登录</span>
      <span @click="toreg">手机快速注册</span>
    </p>
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      user: "",
      psd: "",
      flag: 1,
    };
  },
  computed: {},
  watch: {},

  methods: {
    async log(userName, password) {
      let result = await reqLogin({ userName, password });
      console.log(result);
      if (result.data.code == "success") {
        localStorage.setItem("token", result.data.token);
        Toast.setDefaultOptions({ duration: 1000 });
        Toast.success("登录成功");
        setTimeout(() => {
          this.$router.push("/");
          this.$router.go(0);
        }, 1000);
      } else {
        Toast.fail("登录失败");
      }
    },
    xian() {
      if (this.user) {
        document.querySelector(".xx").style.display = "block";
      } else {
        document.querySelector(".xx").style.display = "none";
      }
      if (this.psd) {
        document.querySelector(".x").style.display = "block";
      } else {
        document.querySelector(".x").style.display = "none";
      }
    },
    del() {
      this.user = "";
      document.querySelector(".xx").style.display = "none";
      document.querySelector(".username input").focus();
    },
    dell() {
      this.psd = "";
      document.querySelector(".x").style.display = "none";
      document.querySelector(".password input").focus();
    },
    qie() {
      if (this.flag == 1) {
        document.querySelector(".password .show").style.backgroundImage =
          "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAV1BMVEUAAADNzc3Q0NDNzc3Nzc3Nzc3Ozs7X19fNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7Pz8/Pz8/Nzc3MzMzNzc3MzMzMzMzNzc3Ozs7Ozs7Ozs7V1dXNzc3MzMxIIVLAAAAAHHRSTlMA9RjJwmlkCO7oz72kfFQ1Iory2qt5bVg+KRKJvRKyKgAAAOlJREFUSMftVNcShCAMvAh2VLC3///OgwNGsN3kWffJJLtOGvm8eC6CiNEGoKEsCv6z4zBbHWRhfE/v03WHtL+RTNl6gmy64oegGbQbeRzzsaPahvCcX+ioCJz6hf5Hcc1ns++d2ZWiVP56OAaGWkXKQ/MT6U0qY0UEgETGqH6h/UhalX5lxLkuNg+MQhXS+nyuCLYZkm8Utn3K4J5ASA+x+WwjsFkR+S08AXXqIpuAOB2hnkBthC0LNgHYlqgdQQvQKaGLxrcVPzj8auCXD7/eR0W9uA9oAc3HPlHsEcCeGeQhQ57KF4/FFwhjLcIUtz4iAAAAAElFTkSuQmCC)";
        document.querySelector(".password input").type = "text";
        this.flag = 0;
      } else {
        document.querySelector(".password .show").style.backgroundImage =
          "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAADNzc3Ozs7W1tbNzc3Pz8/Nzc3MzMzNzc3MzMzNzc3Nzc3Nzc3Nzc3Nzc3MzMzNzc3Nzc3MzMzNzc3Ozs7Nzc3Ozs7R0dHX19f////MzMxg+QCeAAAAGnRSTlMA+zoKaiT28One25uCfXPIt6eRTD4zKiETA+EbngEAAACZSURBVEjH7czHDsMgEEXRoYMxuLf5/w8NJIvIlEjJLhJned9ooGma5je0p1+NG0GyQMUSxi1pHhGVgCKhwuiTuJMQjSjemzCRPc0cA00hQzUGPB9s7GRm98pmEruF3GUx0u58t9NpjOwFJQ6f5OjpwdhB/ShfxUHF2mFBt0IV6xUmVM/gE8a723eenecEnwYjpRkmLqBp/tgDwI4Nr7IO2JwAAAAASUVORK5CYII=)";
        document.querySelector(".password input").type = "password";
        this.flag = 1;
      }
    },
    toreg() {
      this.$router.push("/reg");
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
  position: relative;
}
.username input {
  height: 29px;
  border: none;
  width: 325px;
  padding: 0;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.username span {
  position: absolute;
  top: 0;
  right: 5px;
  width: 24px;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 0;
  display: none;
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
  position: relative;
}
.password input {
  height: 29px;
  border: none;
  width: 147px;
  padding: 0;
  font-size: 16px;
}
.password .x {
  position: absolute;
  width: 24px;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
  top: 0;
  right: 154px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 0;
  display: none;
}
.password .show {
  position: absolute;
  right: 130px;
  top: 13px;
  width: 24px;
  height: 24px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAADNzc3Ozs7W1tbNzc3Pz8/Nzc3MzMzNzc3MzMzNzc3Nzc3Nzc3Nzc3Nzc3MzMzNzc3Nzc3MzMzNzc3Ozs7Nzc3Ozs7R0dHX19f////MzMxg+QCeAAAAGnRSTlMA+zoKaiT28One25uCfXPIt6eRTD4zKiETA+EbngEAAACZSURBVEjH7czHDsMgEEXRoYMxuLf5/w8NJIvIlEjJLhJned9ooGma5je0p1+NG0GyQMUSxi1pHhGVgCKhwuiTuJMQjSjemzCRPc0cA00hQzUGPB9s7GRm98pmEruF3GUx0u58t9NpjOwFJQ6f5OjpwdhB/ShfxUHF2mFBt0IV6xUmVM/gE8a723eenecEnwYjpRkmLqBp/tgDwI4Nr7IO2JwAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: 100% auto;
  z-index: 99;
}
.password .change {
  position: absolute;
  top: 12.5px;
  line-height: 23px;
  text-align: center;
  font-size: 14px;
  right: 0;
  height: 23px;
  width: 100px;
  border-left: 1px solid #ccc;
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
  font-size: 16px;
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
  font-size: 16px;
}
.reg {
  height: 19.2px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.reg span {
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
}
</style>