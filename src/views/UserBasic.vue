<template>
  <div>
    <CustomNavBar title="用户基本信息" />
    <van-cell-group>
      <van-cell title="姓名" value="狗蛋儿" />
      <van-cell title="手机号" value="13788888888" />
      <van-cell title="住址" value="美国加利福尼亚3-121" />
      <van-cell title="邮编" value="1000001" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { CellGroup, Cell } from 'vant'
import CustomNavBar from '@/components/NavBarComponent'

Vue.use(CellGroup).use(Cell)

export default {
  components: {
    CustomNavBar,
  }
}
</script>

