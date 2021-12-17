<template>
  <div class="container" style="background-color: rgba(var(--b3f,250,250,250),1);">
    <div style="display:flex; flex-direction: row-reverse; justify-content: space-between; margin-top: 100px; margin-right: 200px; margin-left: 200px">
      <b-card
        tag="article"
        style="width:350px;font-family: 'Montserrat', sans-serif;"
        class="text-center"
        
      >
        <h1 style="margin-bottom: 20px">Instabook</h1>
        <b-form>
          <b-form-group
            id="input-group-1"
          >
            <b-form-input
              id="input-1"
              v-model="user.email"
              type="email"
              placeholder="email or username"
              required
              style="border-radius:2px;font-size:13px;"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" class="mt-2">
            <b-form-input
              id="input-2"
              v-model="user.password"
              type="password"
              placeholder="password"
              required
              style="border-radius:2px;font-size:13px;"
            ></b-form-input>
          </b-form-group>
          <b-button class="login-button"  variant="btn btn-primary" @click="loginUser()">Login</b-button>
        </b-form>
        <div class="line"></div>
        <p style="margin-top: 30px">Don't have an account? Register <a href="" style="text-decoration:none"  @click="showRegister">here</a></p>
      </b-card>
      <!-- <img src="../assets/instabook-image.jpg" alt="instabook image" class="instabook-image"> -->
      <div class="instabook-image"> 
        <p class="instabook-text-one">Join Instabook today!</p>
        <p class="instabook-text-two">Over 500 million accounts made!</p>
      </div>
    </div>
      <Register v-if="register"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Register from "./Register"

export default {
  data(){
    return{
      user:{},
      register: false
    }
  },
  components: {
    Register
  },
  computed:{
    ...mapGetters({
      errors: 'getErrors'
    })
  },
  methods:{
    ...mapActions({
      login: 'login'
    }),

    showRegister(e) {

      e.preventDefault();

      this.register = true;
    },
    loginUser(){
      this.login(this.user).then(() => {
        if(!this.errors){
          this.$router.push({name: 'Home'})
        }
      })
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,100;1,300&display=swap');

  .login-input{
    border-radius:2px;
    font-size:13px;
    background-color:red;
  }

  .login-input:focus {
    box-shadow: none;
  }

  /* .login-button{
    border-radius:2px;
    font-size:13px;
    width: 100px;
    background-color:#66a3ff;
    border:none;
  } */

  .login-button {
    border-radius: 2px;
    font-size: 13px;
    width: 100px;
    background-color:#66a3ff;
    border: none;
    margin-top: 35px;
  }

  .line {
    background-color:#66a3ff;
    height: 2px;
    margin-top: 40px;
  }

  .instabook-image {
    height: 360px;
    width: 350px;
    border-radius: 30px;
    background-image: url("../assets/instabook-image.jpg");
    background-size: contain;
    background-size: cover;
    /* background-attachment: fixed; */
  }

  .instabook-text-one {
    color: white; 
     margin-top: 2px;
    margin-left: 78px;
    font-size: 20px; 
    text-shadow: 1px 1px 2px black; 
  }

  .instabook-text-two {
    color: white;
    margin-top: 290px;
    margin-left: 30px;
    font-size: 20px;
    text-shadow: 1px 1px 2px black;
  }
</style>