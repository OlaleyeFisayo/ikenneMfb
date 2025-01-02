<template>
  <div class="app-blog">
    <div class="img-side">
      <img :src="img" :alt="title" loading="lazy" />
    </div>
    <div class="text-side">
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  img: String,
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

  .img-side {
    width: 100%;
    max-width: 300px;
    height: 250px;
    border-radius: var(--borderRadius);
    overflow: hidden;

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
    }
    .description {
      font-size: var(--smallFontSize);
      color: var(--blue3);
    }
  }
}
</style>
