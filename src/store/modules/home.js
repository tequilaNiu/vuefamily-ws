import ws from '@/utils/ws';

// state
const state = {
  banners: [],
  active: 0,
  grids: [],
  list: [],
  infoCount: 0,
  info: [],
}

// getters
const getters = {}

// actions
const actions = {
  initWS ({ dispatch }) {
    ws.onopen = () => {
      ws.send('yaya')
    }

    ws.onmessage = (data) => {
      console.log('message: ', data)
      dispatch('setWSInfo', data)
    }
  },
  setWSInfo ({ commit }, info) {
    commit('setInfo', info)
  },
  getBanners ({ commit }) {
    commit('setBanners', [
      'https://www.xlmclub.com/xlm_ad/ad_img/loan/b80f410c-95f7-4f45-98f9-8b075af76ab0.png',
      'https://www.xlmclub.com/xlm_ad/ad_img/loan/06baae7e-7264-4879-b6f1-717570b515c7.png',
      'https://www.xlmclub.com/xlm_ad/ad_img/loan/2d88e416-fe6d-408b-bae3-d8571caa1764.png'
    ])
  },
  setActive ({ commit }, routeName) {
    commit('setActive', routeName)
  },
  getGrids ({ commit }) {
    commit('setGrids', [{
      index: 1,
      title: '极速办卡',
      img: 'shopping-cart-o',
      href: '/user/basic'
    }, {
      index: 2,
      title: '订单查询',
      img: 'gift-o',
      href: '/order'
    }, {
      index: 3,
      title: '成为会员',
      img: 'bag-o'
    }])
  },
  getList ({ commit, state }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let i = state.list.length
        const max = i + 10
        let list = []
        for(i; i < max; i++ ) {
          list.push(i)
        }
        commit('setList', list)
        resolve()
      }, 500)
    })
  }
}

// mutations
const mutations = {
  setBanners(state, res) {
    state.banners = res
  },
  setActive(state, res) {
    state.active = res
  },
  setGrids(state, res) {
    state.grids = res
  },
  setList(state, res) {
    state.list = state.list.concat(res)
  },
  setInfo(state, res) {
    state.info.push(res)
    state.infoCount++
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
