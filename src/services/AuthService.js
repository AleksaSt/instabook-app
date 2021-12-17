import { HttpService } from './HttpService'

class AuthService extends HttpService {
  register(user){
    return this.axios.post('signup', user)
  }

  login(user){
    return this.axios.post('login', user)
  }
}

export const authService = new AuthService()