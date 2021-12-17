<template>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-brand href="#" class="navbar-instabook">Instabook</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <div class="form-group input-group">
            <input type="text" class="form-control input-sm" placeholder="Search" id="sitesearch" name="query" >
            <span class="input-group-addon"><button type="submit" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-search"></span></button></span>
          </div> 
        </b-nav-form>

      </b-navbar-nav> -->
    <!-- </b-collapse> -->
  </b-navbar>
</template>

<script>
export default {
  
}
</script>

<style>
  .navbar {
    background-color:#66a3ff;
    justify-content: space-between;
  }

  .navbar-instabook {
    margin-left: 10px;
    text-shadow: 1px 1px 2px black;
  }
</style>