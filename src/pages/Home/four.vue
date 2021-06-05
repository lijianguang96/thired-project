<template>
  <div class="four">
    <dl v-for="(item, index) in lists" :key="index">
      <dt><img :src="item.url" alt="" /></dt>
      <dd>{{ item.name }}</dd>
    </dl>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      lists: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index);
    },
  },
  created() {
    const list = [
      {
        url: "http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp",
        name: "京东超市",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp",
        name: "数码电器",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp",
        name: "京东服饰",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp",
        name: "京东生鲜",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp",
        name: "京东到家",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp",
        name: "充值缴费",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/179511/33/4023/3422/609e0d45Ea495a996/3783165b48cf1e08.png.webp",
        name: "9.9元拼",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp",
        name: "领券",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp",
        name: "领金贴",
      },
      {
        url: "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp",
        name: "PLUS会员",
      },
    ];
    this.lists = list;
  },
  mounted() {},
};
</script>
<style scoped>
.four {
  height: 162px;
  width: 100%;
  /* background: #ccc; */
  display: flex;
  flex-wrap: wrap;
}
.four dl {
  width: 75px;
  height: 73px;
}
.four dt {
  width: 75px;
  height: 57px;
  display: flex;
  justify-content: center;
}
.four dl {
  width: 75px;
  height: 16px;
}
.four dt img {
  display: block;
  width: 40px;
  height: 40px;
  margin-left: 8px;
}
.four dd {
  text-align: center;
}
</style>