
import Vue from 'vue'
// 引入路由
import  router from './router/router.js'
import './assets/common.css'

// 导入 vue-resource
import VueResource from 'vue-resource';
// 安装vue-resource
Vue.use(VueResource);

// 导入axios
import Axios from 'axios';
// 全局默认设置
//Axios.defaults.baseURL = 'http://localhost:8080/';
// 给Vue原型挂载一个属性
Vue.prototype.$ajax = Axios;

// 1. 安装 Vuex  cnpm i vuex -D
// 2. 导入 Vuex
import Vuex from 'vuex';
// 3. 注册 Vuex 到 Vue
Vue.use(Vuex);
// 4. new Vuex.store() 实例, 得到一个数据仓储对象
var store = new Vuex.Store({
  state:{
    // 组件中的 data   专门用来存储数据的
    // 如果组件中要访问store 中的数据,只能通过 this.$store.state.count 访问 count的值
    count: 0
  },
  mutations:{
    // 不推荐直接操作state 中的数据, 应该调用 mutations 提供的方法去操作对应的数据  每隔数据直接操作state 容易导入数据的混乱, 不能快速定位导致错误的方法
    // 如果组件想要调用 mutations 中的方法, 只能使用 this.$store.commit('increment')  方法名
    increment(state){  // 让count + 1 的方法
      state.count++;
    },
    // 注意, mutations 的函数参数列表中 最多支持两个参数, 参数1: state 状态  参数2: 通过 commit 提交过来的参数  多个参数 可以使用对象的形式
    substract(state, c){  // 让count - c 的方法
      state.count -= c;
    }
  },
  getters:{
    // 注意: getters 值负责对外提供数据, 不负责修改数据, 如果想要修改 state 中的数据  只用 mutations
    // 和 computed 比较, 只要state 中的数据发生变化,就会立即触发 getters 重新取值
    optCount: function (state) {
      return '当前最新的 count 值是: ' + state.count;
    }
  }
});


// 导入格式化时间的插件
// 安装 cnpm i moment -D
import moment from 'moment'
// 定义全局的时间过滤器
Vue.filter('dateFormat',function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    // moment() // 得到的是当前时间
    return moment(dataStr).format(pattern);
});

// 导入app 组件
import App from './App.vue';

// // 导入mint-ui
// import MintUI from 'mint-ui' // 把所有的组件都导入进来
// // 可以省略node_modules
// import 'mint-ui/lib/style.css'
// // 将MinUI 安装到Vue 中
// Vue.use(MintUI) // 把所有的组件注册为全局的组件

// 按需导入 mint-ui
import { Header,Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

// 导入 mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 导入mui 的(滑动) js 组件,需要初始化   移步 PhotoList.vue
// 1. 导入mui.js
//import mui from './lib/mui/js/mui.js';
// 2. 调用官方的初始化方式
// mui('.mui-scroll-wrapper').scroll({
//   deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });

//Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue 构造函数 指定各属性
new Vue({
  el: '#app',
  data:{

  },
  router,  // 挂在路由对象
  // render: function (createdElements) {
  //   return createdElements(login);
  // },
  // 简写
  // render 会把el 指定的容器中所有的内容都清空覆盖
  // 路由的 router-view 和 router-link 直接写到el 控制的元素中
  // 建议写到 App.vue 组件中
  render: c => c(App),
  store: store  // 将 vuex 创建的 store 挂载到 VM 实例上, 只要挂载到了vm 实例上, 任何组件都能使用 store 来存取数据
})

