<template>
  <div class="seach-list">
    <div class="header">
      <div class="backBtn"></div>
      <div class="seach">
        <i></i>
        <input type="text" />
      </div>
      <div class="more"></div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注册到对象(components)中才能使用
  components: {},
  data() {
    //这里存放数据,返回值为一个对象
    return {};
  },
  //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
  computed: {},
  //监控data中的数据变化,不依赖缓存,一对多,支持异步
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.header {
  width: 100%;
  min-height: 40px;
  position: fixed;
  border-bottom: 1px solid #e5e5e5;
  min-height: 44px;
  background: #fff;
  padding: 3px;
  z-index: 999;
}
.backBtn {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTF1famFhal1fal1fal5ga39/f15hbF5ga2JidV1fasLnCw4AAAAKdFJOUwDxN13aWgVemg1awhgkAAAATUlEQVQoz2NgGAjA5FiAKai4SgxToRQWQcVVqwKwKFyMTaHBUFTI4IVFIeeqVQ0MRKnEGkAg25cyEGc9VocOCqUBxKUQrGkJe6qjEgAAfcYsJDT7oy4AAAAASUVORK5CYII=)
    no-repeat;
  float: left;
  background-size: 100% 100%;
  margin-left: 10px;
}

.seach {
  width: 290px;
  float: left;
  border: none;
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  background: #f7f7f7;
  font-size: 12px;
  line-height: 30px;
  margin-top: 5px;
  margin-left: 11px;
}
.seach input {
  outline: none;
  border: none;
  height: 28px;
  width: 200px;
  background: #f7f7f7;
  position: absolute;
  top: 8px;
  left: 85px;
}
.seach i {
  position: relative;
  display: block;
  margin-right: 10px;
  width: 18px;
  height: 28px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTGZmZmVlZWdnZ2ZmZmQUBPYAAAAEdFJOUwDmSUqpTpZKAAAAMklEQVQoz2NQdAEDIQYGOEsEwnBkQLBcGMDAhQHBGnZCWLxtCGEIMyCxqAhGw56ksAcACQo3hfAlFFAAAAAASUVORK5CYII=)
    50% no-repeat;
  background-size: 18px auto;
  z-index: 2;
}
</style>