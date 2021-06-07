<template>
  <div class="thired">
    <img src="../../assets/tu1.png" alt="" />
    <img src="../../assets/tu3.gif" alt="" />
    <img src="../../assets/涂.png" alt="" />
    <img src="../../assets/tuoxie.jpg" alt="" />
    <img src="../../assets/diannao.jpg" alt="" />
    <img src="../../assets/xianhua.jpg" alt="" />
    <img src="../../assets/tu5.jpg" alt="" />
    <div class="left">满200减30</div>
    <div class="right">低之两件5折</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.thired {
  width: 100%;
  height: 125px;
  background: #fff;
  margin: auto;
  display: flex;
  position: relative;
}
.thired img:nth-child(1) {
  width: 90px;
  height: 115px;
}
.thired img:nth-child(2) {
  width: 195px;
  height: 115px;
}
.thired img:nth-child(3) {
  width: 90px;
  height: 115px;
}
.thired img:nth-child(4) {
  width: 67px;
  height: 65px;
  position: absolute;
  border-radius: 10px;
  top: 21px;
  left: 13px;
}
.thired img:nth-child(5) {
  width: 67px;
  height: 65px;
  position: absolute;
  border-radius: 10px;
  top: 21px;
  left: 109px;
}
.thired img:nth-child(6) {
  width: 67px;
  height: 65px;
  position: absolute;
  border-radius: 10px;
  top: 21px;
  left: 198px;
}
.thired img:nth-child(7) {
  width: 67px;
  height: 65px;
  position: absolute;
  border-radius: 10px;
  top: 21px;
  left: 292px;
}
.left {
  color: #fff;
  font-size: 14px;
  position: absolute;
  left: 11px;
  top: 87px;
}
.right {
  color: #fff;
  font-size: 14px;
  position: absolute;
  right: 7px;
  top: 86px;
}
</style>
