<template>
  <div>
    <CustomNavBar title="订单查询" />
    <CustomTab :tabs="tabs" v-slot="tabsSlotProps">
      <CustomList>
        <van-cell
          v-for="(obj, index) in data[tabsSlotProps.tab.key]"
          :key="index"
          :title="obj.name"
        />
      </CustomList>
    </CustomTab>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Cell } from 'vant'
import CustomNavBar from '@/components/NavBarComponent'
import CustomTab from '@/components/TabComponent'
import CustomList from '@/components/ListComponent'

Vue.use(Cell)

export default {
  name: 'order',
  components: {
    CustomNavBar,
    CustomTab,
    CustomList,
  },
  computed: mapState({
    tabs: state => state.order.tabs,
    data: state => state.order.data,
  }),
  mounted () {
    this.$store.dispatch('order/getTabs')
    this.$store.dispatch('order/getData')
  }
}
</script>

