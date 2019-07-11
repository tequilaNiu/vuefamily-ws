<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    right-text=""
    left-arrow
    @click-left="onPrev"
  />
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)

export default {
  props: ['title'],
  methods: {
    onPrev() {
      this.$router.go(-1)
    },
  }
}
</script>

