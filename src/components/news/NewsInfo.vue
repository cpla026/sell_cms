<template>
    <div class="newsinfo-container">
      <!-- 标题区 -->
      <h3 class="title">新闻标题--- {{id}}</h3>
      <p class="subtitle">
        <span>发表时间: 2020-12-12 20:30:08</span>
        <span>点击次数 : 0 次</span>
      </p>
      <hr>
      <!-- 内容区 -->
      <div class="content" v-text="newsinfo">
      </div>

      <hr>
      <!-- 评论区子组件 父组件向子组件传值 -->
      <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    // 1. 导入评论子组件
    import Comment from '../subcomponents/Comment.vue'

    export default {
        name: "news-info",
      data(){
          return {
            // 使用 $route.params 将 URL 地址中传递过来的 id 挂载到data 中 方便以后直接使用
            id: this.$route.params.id,
            newsinfo:{} // 新闻详情对象
          }
      },
      created(){
        this.getNewsInfo();
      },
      methods:{
          getNewsInfo(){
            this.$ajax.get("/ron/api/city/" + this.id).then(res => {
                if(res.data.status === 200){
                  console.log(res.data.data);
                  this.newsinfo = res.data.data.description;
                }else{
                  Toast('请求新闻详情失败');
                }
            })
          }
      },
      // 用来注册子组件的节点
      components:{
          'comment-box': Comment
      }

    }
</script>

<style lang="scss" scoped>
  .newsinfo-container{
    padding: 0 4px;
    .title{
      font-size: 16px;
      margin: 10px;
      text-align: center;
      color: red;
    }
    .subtitle{
      font-size: 14px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    .content{}
  }
</style>
