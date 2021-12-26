<template>
  <div style="font-family: 'Montserrat', sans-serif;">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Instabook</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-if="user">{{user.name}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logoutUser()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   methods: {
    ...mapActions({
      logout: 'logout'
    }),

    logoutUser(){
      this.logout(this.user).then(() => {
        console.log('logged out')
        this.$router.push({name: 'Login'})
      })
    }
  },
  computed:{
    ...mapGetters({
      user: 'getUser'
    })
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,100;1,300&display=swap');
</style>