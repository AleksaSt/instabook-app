import { authService } from '../services/AuthService'

export const AuthStore = {
  state:{
    token:localStorage.getItem('token'),
    errors:[],
    user: localStorage.getItem('user'),
  },

  mutations:{
    setErrors(state, errors){
        state.errors = errors
    },

    setToken(state, token){
        state.token = token
    },

    setUser(state, user){
      state.user = user
    }
  },

  actions:{
    async login(context, credentials){
      try{
          const response = await authService.login(credentials)
  
          authService.setHeaders({
            Authorization: `Bearer: ${response.data}`
          })

          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', response.data.user)

          context.commit('setErrors', null)
          context.commit('setToken', response.data.token)
          context.commit('setUser', response.data.user)
      }catch(exception){
          context.commit('setErrors', exception.response.data.error)
      }
    },
    async logout(context){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      context.commit('setToken', null)
      context.commit('setUser', null)
    }
  },

  getters:{
    getErrors(state){
        return state.errors
    },

    isUserLoggedIn(state){
        return !!state.token
    },

    getUser(state){
      return state.user
    }
  }
}