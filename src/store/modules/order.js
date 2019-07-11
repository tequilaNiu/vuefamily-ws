import api from 'axios'

// state
const state = {
  tabs: [],
  tabActive: 0,
  data: {}
}

// getter
const getters = {}

// actions
const actions = {
  getTabs ({ commit }) {
    return api.get('http://localhost:3000/tabs').then(({ data }) => {
      commit('setTabs', data)
    })
  },
  getData ({ commit }) {
    commit('setData', {
      applyList: [{
        name: '第10张卡',
      }, {
        name: '第11张卡',
      }, {
        name: '第12张卡',
      }],
      completeList: [{
        name: '第4张卡',
      }, {
        name: '第5张卡',
      }, {
        name: '第6张卡',
      }, {
        name: '第7张卡',
      }, {
        name: '第8张卡',
      }, {
        name: '第9张卡',
      }],
      deleteList: [{
        name: '第1张卡',
      }, {
        name: '第2张卡',
      }, {
        name: '第3张卡',
      }],
    })
  },
}

// mutations
const mutations = {
  setTabs (state, res) {
    state.tabs = res
  },
  setData (state, res) {
    state.data = res
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
