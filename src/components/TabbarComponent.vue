<template>
  <van-tabbar v-model="active" @change="onChangeTab">
    <van-tabbar-item replace icon="home-o" to="/">
      办卡
    </van-tabbar-item>
    <van-tabbar-item replace icon="friends-o" to="/user" :info="infoCount">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)

export default {
  props: ['infoCount'],
  created () {
    const routeName = this.$route.name
    let routeIndex = 0
    switch(routeName) {
      case 'home':
        routeIndex = 0
        break;
      case 'user':
        routeIndex = 1
        break;
    }
    this.$store.dispatch('home/setActive', routeIndex)
  },
  data () {
    return {}
  },
  computed: {
    active: {
      get() {
        return this.$store.state.home.active
      },
      set(v) {
        this.$store.state.home.active = v
      }
    }
  },
  methods: {
    onChangeTab (active) {
      this.$store.dispatch('home/setActive', active)
    },
  }
}
</script>

