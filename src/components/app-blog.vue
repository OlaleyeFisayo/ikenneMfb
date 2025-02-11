<template>
  <div class="app-blog">
    <div class="img-side">
      <AppImg :src="img" :alt="`${title} images`" :smallImg="smallImg" />
    </div>
    <div class="text-side">
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppImg from "./app-img.vue";

defineProps({
  img: String,
  smallImg: String,
  title: String,
  description: String,
});
</script>

<style scoped lang="scss">
.app-blog {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: 1px solid var(--gray);
  padding: 0.5rem 1rem;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  .img-side {
    width: 100%;
    max-width: 300px;
    height: 250px;
    border-radius: var(--borderRadius);
    overflow: hidden;

    @media (max-width: 900px) {
      max-width: 500px;
      height: 350px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  .text-side {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
      font-size: var(--mediumFontSize);
      color: var(--blue3);
      @media (max-width: 900px) {
        text-align: center;
      }
    }
    .description {
      font-size: var(--smallFontSize);
      color: var(--blue3);
      @media (max-width: 900px) {
        text-align: center;
      }
    }
  }
}
</style>
