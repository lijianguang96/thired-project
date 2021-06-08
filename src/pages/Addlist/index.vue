<template>
  <div class="addlist">
    <van-nav-bar
      title="收货人列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="ids"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="sel()"
    />
    <!-- <van-button round type="info" size="large" @click="goback"
      >确定使用</van-button
    > -->
  </div>
</template>

<script>
import { Toast } from "vant";
// import { mapGetters } from "vuex";
// import { reqSigleleAddress, reqAddressslist } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      chosenAddressId: "0",
      ids: [],
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "张三",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
        {
          id: "3",
          name: "张三",
          tel: "1310000000",
          address: "",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  computed: {
    // ...mapGetters(["getInfo"]),
  },
  watch: {},
  methods: {
    goback() {},
    onAdd() {
      //   Toast("新增地址");
      this.$router.push("/address");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    sel(e) {
      console.log(e);
    },
    onClickLeft() {
      this.$router.back();
    },
  },
  created() {
    const arr = JSON.parse(localStorage.getItem("userInfoData"));
    arr.forEach((v, index) => {
      let obj = {
        id: index,
        name: v.receiver,
        tel: v.tel,
        address: v.regions + v.address,
      };
      this.ids.push(obj);
    });
    console.log(this.ids);
  },
  mounted() {},
};
</script>
<style scoped>
</style>