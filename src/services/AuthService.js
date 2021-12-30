import { HttpService } from './HttpService'

class AuthService extends HttpService {
  register(user){
    return this.axios.post('register', user)
  }

  login(user){
    return this.axios.post('login', user)
  }

  getImages(){
    return this.axios.get('file')
  }
}

export const authService = new AuthService()