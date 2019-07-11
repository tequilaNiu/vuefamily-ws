<template>
  <van-grid :column-num="grids.length">
    <van-grid-item
      v-for="grid in grids"
      :key="grid.index"
      :icon="grid.img"
      :text="grid.title"
      @click="goto(grid.href)"
    />
  </van-grid>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem)

export default {
  props: ['grids'],
  methods: {
    goto(href = '/') {
      this.$router.push(href)
    }
  }
}
</script>


