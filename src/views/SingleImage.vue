<template>
  <div >
      <b-col>
        <b-card
          title="This is image"
          img-src="https://www.akcpetinsurance.com/res/akc/images/icons/home/home_dog.png"
          img-top
          style="max-width:20rem;"
          class="mb-2"
        >
          <b-card-text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </b-card-text>
          <b-button variant="primary">Apply</b-button>
        </b-card>
      </b-col>
  </div>
</template>

<script>
export default {
   data(){
    return {
      images: [
        { picture: "https://picsum.photos/250/250/?image=54" },
        { picture: "https://www.akcpetinsurance.com/res/akc/images/icons/home/home_dog.png" },
        { picture: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" },
        { picture: "https://www.hospitalveterinariglories.com/wp-content/uploads/2020/02/20-02-05-loro-animal-de-compan%CC%83ia.jpg" },
      ]
    }
  },
}
</script>

<style>

</style>