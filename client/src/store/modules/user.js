import { registerUser, loginUser, authUser } from '@/services/user.service'

const state = () => ({
  user: null,
})

const getters = {
  getUser: ({ user }) => user,
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

const actions = {
  async register(ctx, body) {
    try {
      const response = await registerUser(body)
      return response
    } catch (e) {
      return e.response
    }
  },
  async login({ commit }, body) {
    try {
      const response = await loginUser(body)
      commit('SET_USER', response.data)
      return response
    } catch (e) {
      return e.response
    }
  },
  async auth({ commit }) {
    try {
      const response = await authUser()
      commit('SET_USER', response.data)
      return response
    } catch (e) {
      return e.response
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
