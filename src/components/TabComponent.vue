<template>
  <van-tabs v-model="active">
    <van-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :title="tab.name"
    >
      <slot :tab="tab"></slot>
    </van-tab>
  </van-tabs>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)

export default {
  props: ['tabs'],
  computed: {
    active: {
      get() {
        return this.$store.state.order.tabActive
      },
      set(v) {
        this.$store.state.order.tabActive = v
      }
    }
  }
}
</script>
