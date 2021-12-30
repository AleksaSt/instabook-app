<template>
  <b-container>
    <div class="row">
      <div class="col-md-3" v-for="image in images" :key="image.id" style="padding-right: 0;padding-left: 0;">
        <div class="card" style="align-items:center;">
          <img v-if="images" class="card-img-top" style="height: 225px; width: 100%; display: block; border-radius: 0px;" :src="image.image" data-holder-rendered="true">
          <div class="card-body">
            <h4 class="card-text" style="font-weight:100;">test</h4>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import { authService } from "../services/AuthService"

export default {
  data() {
    return {
      images: []
    }
  },
  created() {
    authService.getImages().then(r => {
      this.images = r.data
    })
  }
}
</script>