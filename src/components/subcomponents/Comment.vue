<template>
    <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="please write what you want to BB here!!!(up to 100 words)" maxlength="100" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

      <div class="cmt-list">

        <!-- 模板 -->
        <!--<div class="cmt-item">
          <div class="cmt-title">
            第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2020-12-12 12:30
          </div>
          <div class="cmt-body">
            May your life likes nougat,
            Sweet slightly not too greasy,
            and the warmth will last forever!
          </div>
        </div>-->

        <div class="cmt-item" v-for="(item, i) in comments" :key="item.id">
          <div class="cmt-title">
            第{{i + 1}}楼&nbsp;&nbsp;用户: {{item.name}}&nbsp;&nbsp;发表时间:2020-12-12 12:30
          </div>
          <div class="cmt-body">
            {{item.description}}
          </div>
        </div>

      </div>

      <mt-button type="danger" size="large" plain @click="getMoreComment">加载更多</mt-button>

    </div>
</template>

<script>

    import {Toast} from 'mint-ui';

    export default {
      name: "comment",
      data(){
        return {
          currentPage: 1, // 默认展示第一页数据  之后可以拼接到URL 中
          comments: [],  // 所有评论的数据
          msg: '' // 评论输入的内容
        }
      },
      created(){
        this.getComments();
      },
      // 接受父组件的值
      props:["id"],
      methods:{
        getComments(){
          this.$ajax.get("/ron/api/getUserListByCityId/" + this.id).then(res => {
            if(res.data.status === 200){
              console.log(res.data.data);
              // 加载更多的时候把之前的数据清空了
              //this.comments = res.data.data;
              // 如果有(加载更多功能) 将后面的数据拼接到之前的数据上
              this.comments = this.comments.concat(res.data.data);
            }else{
              Toast('请求新闻详情失败');
            }
          })
        },
        getMoreComment(){  // 点击加载更多
          this.currentPage++;
          this.getComments();
        },
        postComment(){  // 发表评论
          // 校验评论是否为空内容
          if(this.msg.trim().length === 0){
            return Toast('评论内容不能为空')
          }

          this.$ajax.post("/ron/api/saveUser/",
            {id: 4, name: 'heimei', age: 18, description: this.msg.trim(), cityId: this.id})
            .then(res => {
              if(res.data.status === 200){
                console.log(res.data.data);
                // 发表评论成功后 手动的在客户端拼接一个对象,然后调用数组的 unshift 方法, 把最新的评论加到数组(comments)的开始
                var cmt = {id: 4, name: 'heimei', age: 18, description: this.msg.trim(), cityId: this.id};
                this.comments.unshift(cmt);
                this.msg = '';

              }else{
                Toast('发表评论失败');
              }
            })
            .catch(err => {
              console.log(err.message);
            })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .cmt-container{
    h3{
      font-size: 18px;
    }
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0px;
    }
    .cmt-list{
      margin: 5px 0;
      .cmt-item{
        font-size: 13px;
        margin: 5px 0 5px 0;
        .cmt-title{
          height: 35px;
          background-color: #cccccc;
        }
        .cmt-body{
          height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>
