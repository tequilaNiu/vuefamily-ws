<template>
  <div>
    <van-cell-group>
      <van-cell value="基本信息" is-link @click="goUserBasic">
        <template slot="title">
          <van-icon
            name="https://www.xlmclub.com/xlm_ad/ad_img/card/5b129651-dd24-45e3-91da-ca7ddf5f645b.png"
          ></van-icon>
          &nbsp;&nbsp;&nbsp;
          <span>狗蛋儿</span>
        </template>
      </van-cell>
      <van-switch-cell v-model="checked" title="开关" />
      <van-cell title="版本" value="1.1.1" />
      <van-cell title="公司" value="随性付" />
    </van-cell-group>
    <CustomTabber></CustomTabber>
  </div>
</template>

<script>
import Vue from 'vue'
import { CellGroup, Cell, Icon, SwitchCell } from 'vant'
import CustomTabber from '@/components/TabbarComponent'

Vue.use(CellGroup).use(Cell).use(Icon).use(SwitchCell)

export default {
  name: 'user',
  data () {
    return {
      checked: true,
    }
  },
  components: {
    CustomTabber,
  },
  methods: {
    goUserBasic () {
      this.$router.push('/user/basic')
    }
  }
}
</script>

<style>
.custom-cell{
  height: 1rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
