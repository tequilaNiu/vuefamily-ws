<template>
  <van-swipe :autoplay="3000" class="banner">
    <van-swipe-item v-for="(image, index) in banners" :key="index">
      <img class="banner-img" v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Lazyload);

export default {
  props: ['banners']
}
</script>

<style>
.banner {
  margin: 0.1rem auto;
  width: 95vw;
  height: 2.5rem;
}
.banner-img {
  height: 2.5rem;
  width: 95vw;
}
</style>

