<template>
  <van-skeleton
    :title="true"
    title-width="100%"
    row="10"
    :loading="true"
    class="custom-skeleton"
  >
    <slot></slot>
  </van-skeleton>
</template>

<script>
import Vue from 'vue'
import { Skeleton } from 'vant'

Vue.use(Skeleton)

export default {}
</script>
