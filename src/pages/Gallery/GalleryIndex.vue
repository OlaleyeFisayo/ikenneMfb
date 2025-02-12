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
                <template v-if="photo.type === 'video'">
                  <video controls>
                    <source :src="photo.src" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </template>
                <template v-else>
                  <AppImg
                    :src="photo.img"
                    :alt="`slider${index + 1}`"
                    :smallImg="photo.smallImg"
                  />
                </template>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import AppImg from "../../components/app-img.vue";
import { gallarySliderOption, galleryOptions } from "../galleryData";
</script>

<style scoped lang="scss">
@import url("./GalleryIndex.scss");
</style>
