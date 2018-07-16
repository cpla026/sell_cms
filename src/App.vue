<template>
  <div id="app" class="app-container">
   <!-- header -->
    <div>
      <mt-header fixed title="Sue`s Sweet House"></mt-header>
    </div>

    <!-- content -->
    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>


    <!-- foot -->
    <div>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .app-container{
    height: 667px;
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden; /* 影藏下面的滚动条  横向超过设备宽度隐藏 */

  }

  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%); /* 从左侧消失 */
    position: absolute; /* 解决上下跳动 */
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
</style>
