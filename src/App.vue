<template>
  <div id="app">
    <div class="row">
      <!-- 最后: 点击事件(需要触发) -->
      <zw-button disabled @click="fn">按钮</zw-button>
      <zw-button type="primary">按钮</zw-button>
      <zw-button type="success">按钮</zw-button>
      <zw-button type="info">按钮</zw-button>
      <zw-button type="warning">按钮</zw-button>
      <zw-button type="danger">按钮</zw-button>
    </div>

    <!-- 朴素的按钮,给所有的按钮设置一个plain属性(布尔类型) -->
    <div class="row">
      <zw-button plain>按钮</zw-button>
      <zw-button plain type="primary">按钮</zw-button>
      <zw-button plain type="success">按钮</zw-button>
      <zw-button plain type="info">按钮</zw-button>
      <zw-button plain type="warning">按钮</zw-button>
      <zw-button plain type="danger">按钮</zw-button>
    </div>

    <!-- 带有圆角的按钮,设置一个round属性(布尔类型) -->

    <!-- 来一个既传文字又传图标(有一个问题,贴到一起了) 解决:只要有icon图标就给后面的span加一个margin-left -->
    <!-- 但是这样会带来一个新的问题:在没有传入插槽的时候也会有一个margin-left值 -->
    <div class="row">
      <zw-button plain icon="hm-icon-check" round>按钮</zw-button>
      <zw-button plain icon="hm-icon-check" round type="primary">按钮</zw-button>
      <zw-button plain icon="hm-icon-check" round type="success">按钮</zw-button>
      <zw-button plain icon="hm-icon-check" round type="info">按钮</zw-button>
      <zw-button plain icon="hm-icon-check" round type="warning">按钮</zw-button>
      <zw-button plain icon="hm-icon-check" round type="danger">按钮</zw-button>
    </div>

    <!-- 圆形的按钮 -->
    <div class="row">
      <zw-button plain circle>拆</zw-button>
      <zw-button plain circle type="primary">拆</zw-button>
      <zw-button plain circle type="success">拆</zw-button>
      <zw-button plain circle type="info">拆</zw-button>
      <zw-button plain circle type="warning">拆</zw-button>
      <zw-button plain circle type="danger">拆</zw-button>
    </div>

    <!-- 禁用按钮 -->
    <div class="row">
      <zw-button plain disabled circle>拆</zw-button>
      <zw-button plain disabled circle type="primary">拆</zw-button>
      <zw-button plain disabled circle type="success">拆</zw-button>
      <zw-button plain disabled circle type="info">拆</zw-button>
      <zw-button plain disabled circle type="warning">拆</zw-button>
      <zw-button plain disabled circle type="danger">拆</zw-button>
    </div>

    <!-- 字体图标 -->
    <div class="row">
      <zw-button plain icon="hm-icon-delete" circle></zw-button>
      <zw-button plain icon="hm-icon-delete" circle type="primary"></zw-button>
      <zw-button plain icon="hm-icon-delete" circle type="success"></zw-button>
      <zw-button plain icon="hm-icon-delete" circle type="info"></zw-button>
      <zw-button plain icon="hm-icon-delete" circle type="warning"></zw-button>
      <zw-button plain icon="hm-icon-delete" circle type="danger"></zw-button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    fn (e) {
      console.log(11, e)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .zw-button {
    margin-right: 20px;
  }
}
</style>
