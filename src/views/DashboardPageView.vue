<template>
  <div>
    <div class="container mt-3">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        :interval="2500"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First Slide"
          img-src="https://media.discordapp.net/attachments/1004374006058713138/1088330787130191962/peppermint-cover.png"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://media.discordapp.net/attachments/1004374006058713138/1088330861579075605/hy.png"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://media.discordapp.net/attachments/1004374006058713138/1088330993435422810/E0B8A1E0B8B4E0B989E0B899.png"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
