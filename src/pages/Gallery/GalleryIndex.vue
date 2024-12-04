<template>
  <section class="gallery">
    <section class="header">
      <div class="content">
        <div class="title">
          <h1>Our Gallery</h1>
          <div class="line"></div>
        </div>
        <div class="gallery-content">
          <Splide :options="gallarySliderOption" class="splide">
            <SplideSlide
              v-for="(photo, index) in galleryOptions"
              :key="index"
              class=""
            >
              <div class="img-container">
                <img
                  :src="photo.img"
                  :alt="`slider${index + 1}`"
                  loading="lazy"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import slider1 from "../../assets/imgs/slider1.jpeg";
import slider2 from "../../assets/imgs/slider2.jpeg";
import slider3 from "../../assets/imgs/slider3.jpeg";
import slider4 from "../../assets/imgs/slider4.jpeg";
import slider5 from "../../assets/imgs/slider5.jpeg";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const galleryOptions = [
  { img: slider1 },
  { img: slider2 },
  { img: slider3 },
  { img: slider4 },
  { img: slider5 },
];
const gallarySliderOption = {
  type: "loop",
  autoplay: true,
  interval: 2000,
  perPage: 2,
  gap: "1rem",
  breakpoints: {
    900: {
      perPage: 1,
    },
  },
};
</script>

<style scoped lang="scss">
@import url("./GalleryIndex.scss");
</style>
