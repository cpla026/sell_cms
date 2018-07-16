<template>
    <div class="goods-list">
      <div class="goods-item">
        <img src="https://img12.360buyimg.com/n4/jfs/t16054/33/2463877928/246631/3977f26d/5ab47909N5d070446.jpg!q95.jpg" alt="">
        <h1 class="title">【移动专享版】华为 HUAWEI P20 Pro 6GB+128GB 亮黑色 </h1>
        <div class="info">
          <p class="price">
            <span class="now">¥3599.00</span>
            <span class="old">¥3999.00</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div><div class="goods-item">
        <img src="https://img11.360buyimg.com/n7/jfs/t20128/2/119038649/216906/b669638f/5afd2c19N464156d8.jpg" alt="">
        <h1 class="title">【移动专享版】一加手机6 8GB+128GB 亮瓷黑 全面屏双摄游戏手机 全网通4G 双卡双待</h1>
        <div class="info">
          <p class="price">
            <span class="now">¥3599.00</span>
            <span class="old">¥3999.00</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>
      <div class="goods-item">
        <img src="https://img11.360buyimg.com/n7/jfs/t20128/2/119038649/216906/b669638f/5afd2c19N464156d8.jpg" alt="">
        <h1 class="title">【移动专享版】一加手机6 8GB+128GB 亮瓷黑 全面屏双摄游戏手机 全网通4G 双卡双待</h1>
        <div class="info">
          <p class="price">
            <span class="now">¥3599.00</span>
            <span class="old">¥3999.00</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "goods-list"
    }
</script>

<style lang="scss" scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap; // 换行
    padding: 7px;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      border: 1px solid #cccccc;
      box-shadow: 0 0 8px #cccccc;
      margin: 4px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;  // 默认是x轴 方向  改为 Y 方向
      justify-content: space-between;  // 上下对齐
      min-height: 293px;
      img{
        width: 100%;
      }
      .title{
        font-size: 14px;
      }
      .info{
        background-color: #eeeeee;
        p{
          margin: 0;
          padding: 5px;
        }
        .price{
          .now{
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .old{
            font-size: 13px;
            text-decoration: line-through;
            margin-left: 10px;
          }
        }
        .sell{
          display: flex;
          justify-content: space-between; // 设置两端对齐
          font-size: 10px;
        }
      }
    }

  }
</style>
