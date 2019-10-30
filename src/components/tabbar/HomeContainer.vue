<template>
  <div>
    <!-- 使用轮播图 组件-->
    <swipe :lunbotuList="lunbotuList"></swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <!--<span class="mui-icon mui-icon-home"></span>-->
          <!-- 可以使用img 引入 -->
          <img src="../../assets/logo.png"/>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import swipe from '../subcomponents/Swiper.vue'

    export default {
      name: "home-container",
      data(){
         return {
           lunbotuList:[
             {'a': 1},
             {'a': 2}
           ] // 保存轮播图的list
         }
      },
      created(){
        //this.getLunbotu();
      },
      methods: {
        // 获取轮播图数据
        getLunbotu(){
          /*Toast("获取轮播图失败");
          this.$http.get("url").then(result => {
            console.log(result.body);
            if(result.body.status === 20){
              this.lunbotuList = result.body.data;
            }else{
              Toast("获取轮播图失败");
            }
          });*/
          // 使用axios 发送请求
          this.$ajax.get("/ron/api/city/12"/*,{
            params: {
              ID: 12345
            }
          }*/)
            .then(res => {
              console.log(res.data); // 即返回的数据  {cityName: "武汉", description: "bloody hell", id: 12, provinceId: 27}
              this.lunbotuList = res.data.data;
            }).catch(err => {
              console.log(err);
          });

          // post 
          // get   this.$ajax.get(URL, options)
          // post  this.$ajax.post(URL, data, options)
          // options: { params: {id: 1}// 查询字符串, headers:{'content-type': 'XXX' }}
          // post 请求的时候, 如果数据是字符串,默认就是键值对, 如果数据是对象就是application/json
          // this.$ajax.post("/ron/api/city",
          //   {id:'10',provinceId: 90, cityName: '深圳',description: 'lovely city'}
          //   )
          //   .then(res => {
          //
          //   }).catch(err => {
          //   console.log(err);
          // })
        }
      },
      // 注册 swipe 组件
      components:{
        swipe
      }
    }
</script>

<style lang="scss" scoped>
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-media-body{
      font-size: 13px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
  }
</style>
