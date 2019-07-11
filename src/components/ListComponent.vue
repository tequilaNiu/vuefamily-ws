<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <slot />
  </van-list>
</template>

<script>
import Vue from 'vue'
import { List } from 'vant'

Vue.use(List)

export default {
  data() {
    return {
      error: false,
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      this.loading = false
      this.$emit('onLoad')
    }
  }
}
</script>
