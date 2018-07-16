<template>
  <div>
    <h3>shopcarContainer</h3>
    <button @click="add">增加</button>
    <button @click="decrease">减少</button>
    <!--{{$store.state.count}}-->
    <!-- 使用 getters 获取数据-->
    {{ $store.getters.optCount}}
  </div>
</template>

<script>
    export default {
        name: "shopcar",
      data(){
        return {

        }
      },
      methods:{
        add(){
          // 这么做可以实现, 但是不规范,容易造成数据混乱
          //this.$store.state.count++;
          // 使用 中间的数据管理员 操作数据
          this.$store.commit("increment");
        },
        decrease(){
          this.$store.commit("substract", 3); // 每次减 3
        }
      }
    }
</script>

<style scoped>

</style>
