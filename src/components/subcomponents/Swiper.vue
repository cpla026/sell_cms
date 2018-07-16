<template>
  <div>
    <!-- 抽出的 轮播图 组件 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用 v-for 一定要使用 key  唯一即可  -->
      <!-- lunbotuList 使用父组件像子组件传值 使用 props 接收-->
      <!-- 测试 父子组件传值 -->
      <!--<mt-swipe-item v-for="item in lunbotuList">
       &lt;!&ndash; <img :src="item.a">&ndash;&gt;
        {{item.a}}
      </mt-swipe-item>-->

      <mt-swipe-item>
        <img src="http://img3.imgtn.bdimg.com/it/u=3771844755,1959515242&fm=200&gp=0.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img1.imgtn.bdimg.com/it/u=1359619667,895430210&fm=27&gp=0.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531676819457&di=dc6c45e314479eb84fc4aa556bf2caac&imgtype=0&src=http%3A%2F%2Ffile31.mafengwo.net%2FM00%2FD6%2F00%2FwKgBs1ZAhWiAcu-oAEGs9VRhF3A12.groupinfo.w680.jpeg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "swiper",
        props: ['lunbotuList'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1){
        background-color: #2ac845;
      }
      &:nth-child(2){
        background-color: #007aff;
      }
      &:nth-child(3){
        background-color: #f0ad4e;
      }
    }
    img{
      width: 100%;
      height: 100%
    }

  }
</style>
