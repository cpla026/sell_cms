<template>
    <div>

      <!--  顶部滑动条区域-->
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <!--这个地方的分类应该是一个循环   传入点击事件里面的参数也应该是在循环的参数中获取的-->
            <a class="mui-control-item mui-active"  data-wid="tab-top-subpage-1.html" @click="getPhotoListByCateId(1)">
              推荐
            </a>
            <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
              热点
            </a>
            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
              北京
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
              社会
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              娱乐
            </a>
          </div>
        </div>
      </div>

      <!-- 图片列表区域-->
      <ul class="photo-list">
        <li v-for="item in list">
          <img v-lazy="item.img_url">
          <!-- 图片的文字-->
          <div class="info">
            <h1 class="info-title">{{item.title}}</h1>
            <div class="info-body">
              {{item.zhaiyao}}
            </div>
          </div>
        </li>
      </ul>

    </div>
</template>

<script>
    // 导入mui 的(滑动) js 组件,需要初始化
    // 1. 导入mui.js
    // import mui from '../../lib/mui/js/mui.js';


    export default {
      name: "photo-list",
      data(){
          return {
            list: [] // 图片列表的数组
          }
      },
      created(){
        this.getPhotoListByCateId(0);  // 默认进入页面主动请求所有的图片列表
      },

      // 当组件中的 DOM 结构贝渲染好并放到页面中,会执行 这个钩子函数
      // 如果要操作元素了, 最好在 mounted 里面, 因为这个时候的DOM 元素是最新的
      // mounted(){
      //   // 2. 调用官方工的初始化方式
      //   mui('.mui-scroll-wrapper').scroll({  // 选中 mui-scroll-wrapper 这个类
      //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      //   });
      // },
      methods:{
        // 通过类ID 获取图片列表
        getPhotoListByCateId(cateId){
          this.$ajax.get("api/getimages/" + cateId).then(res=>{

          })
        }
      }
    }
</script>

<style lang="scss" scoped>

  .photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      position: relative;
      img{
        width: 100%;
        vertical-align: middle;
        box-shadow: 0 0 9px #999;
      }
      // 懒加载图片
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title{
          font-size: 14px;
        }
        .info-body{
          font-size: 13px;
        }
      }
    }
  }
</style>
