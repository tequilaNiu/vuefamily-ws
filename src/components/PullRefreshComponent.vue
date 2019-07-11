<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <slot />
  </van-pull-refresh>
</template>

<script>
import Vue from 'vue'
import { PullRefresh } from 'vant'

Vue.use(PullRefresh)

export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        this.$emit('onRefresh')
      }, 500)
    }
  }
}
</script>

