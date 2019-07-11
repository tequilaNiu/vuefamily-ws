<template>
  <!-- <HomeSkeleton> -->
    <CustomPullRefresh @onRefresh="onrefresh">
      <CustomBanner :banners="banners"></CustomBanner>
      <CustomGrid :grids="grids"></CustomGrid>
      <CustomList @onLoad="onload">
        <van-cell
          v-for="item in list"
          :key="item"
          :title="item"
        />
      </CustomList>
      <CustomTabbar :infoCount="infoCount" />
    </CustomPullRefresh>
  <!-- </HomeSkeleton> -->
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Cell, Skeleton } from 'vant'
import CustomTabbar from '@/components/TabbarComponent'
import CustomBanner from '@/components/BannerComponent'
import CustomGrid from '@/components/GridComponent'
import CustomList from '@/components/ListComponent'
import CustomPullRefresh from '@/components/PullRefreshComponent'
// import HomeSkeleton from '@/components/skeleton/HomeSkeleton'

Vue.use(Cell).use(Skeleton)

export default {
  name: 'home',
  components: {
    CustomTabbar,
    CustomBanner,
    CustomGrid,
    CustomList,
    CustomPullRefresh,
    // HomeSkeleton,
  },
  computed: mapState({
    grids: state => state.home.grids,
    banners: state => state.home.banners,
    list: state => state.home.list,
    infoCount: state => state.home.infoCount,
  }),
  mounted () {
    this.$store.dispatch('home/initWS')
    this.$store.dispatch('home/getBanners')
    this.$store.dispatch('home/getGrids')
    this.$store.dispatch('home/getList')
  },
  methods: {
    onload () {
      this.$store.dispatch('home/getList')
    },
    onrefresh () {},
  },
}
</script>
<style>
.custom-list {
  height: calc(100vh - 300px);
}
</style>

