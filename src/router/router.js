/**
 * Created by Administrator on 2018/7/10.
 */
import Vue from 'vue';
// 1.导入 vue-router包
import VueRouter from 'vue-router';
// 2.手动安装VueRouter
Vue.use(VueRouter);

// 导入相关组件
import HomeContainer from '../components/tabbar/HomeContainer';
import MemberContainer from '../components/tabbar/MemberContainer';
import SearchContainer from '../components/tabbar/SearchContainer';
import ShopcarContainer from '../components/tabbar/ShopcarContainer';

import NewsList from '../components/news/NewsList';
import NewsInfo from '../components/news/NewsInfo';
import PhotoList from  '../components/photos/PhotoList'

import GoodsList from '../components/goods/GoodsList'

// 3.创建 路由对象
var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'  // 根路径重定向
    },
     {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer,
    },
    {
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      name: 'PhotoList',
      component: PhotoList
    },
    {
      path: '/home/goodslist',
      name: 'GoodsList',
      component: GoodsList
    }
  ],
  linkActiveClass: 'mui-active'  // 覆盖默认的 router-link-active    mui-active: mui 中的高亮
});

export default router;
