<template>
  <div class="">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
// import { reqAddlist } from "../../api/order";
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
export default {
  components: {},
  data() {
    return {
      areaList,
      searchResult: [],
      userList: localStorage.getItem("userList")
        ? JSON.parse(localStorage.getItem("userList"))
        : [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async onSave(e) {
      //请求新增地址
      let userInfo = {
        receiver: e.name,
        regions: e.city + e.county,
        address: e.addressDetail,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      let obj2 = {
        receiver: e.name,
        regions: e.city + e.county,
        address: e.addressDetail,
        tel: e.tel,
      };
      let userInfoData = JSON.parse(localStorage.getItem("userInfoData")) || [];
      userInfoData.push(obj2);
      localStorage.setItem("userInfoData", JSON.stringify(userInfoData));

      Toast("保存成功");
      this.$router.back();
      // if (e.city == e.province) {
      //   const info = {
      //     id: this.id,
      //     name: e.name,
      //     regions: e.city,
      //     address: e.county + e.addressDetail,
      //     tel: e.tel,
      //   };
      //   this.userList.push(info);
      //   localStorage.setItem("userList", JSON.stringify(this.userList));
      //   this.$store.commit("getuser", this.userList);
      //   Toast("保存成功");
      //   this.id++;
      //   localStorage.setItem("id", this.id);

      //   this.$router.back();
      // } else {
      //   const info = {
      //     id: this.id,
      //     name: e.name,
      //     regions: e.province + e.city,
      //     address: e.county + e.addressDetail,
      //     tel: e.tel,
      //   };
      //   this.userList.push(info);
      //   localStorage.setItem("userList", JSON.stringify(this.userList));
      //   this.$store.commit("getuser", this.userList);
      //   this.id++;
      //   localStorage.setItem("id", this.id);
      //   Toast("保存成功");
      //   this.$router.back();
      // }

      /* 
      addressDetail: "朝阳街道东大厦1230"
      areaCode: "110101"
      city: "北京市"
      country: ""
      county: "东城区"
      isDefault: false
      name: "小虾米"
      postalCode: "000111"
      province: "北京市"
      tel: "13318566345"
      info: {
            receiver: "",
            regions: "",
            address: "",
        }
       */
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      console.log(val);
      //   if (val) {
      //     this.searchResult = [
      //       {
      //         name: "黄龙万科中心",
      //         address: "杭州市西湖区",
      //       },
      //     ];
      //   } else {
      //     this.searchResult = [];
      //   }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>