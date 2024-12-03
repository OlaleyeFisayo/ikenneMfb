<template>
  <div class="app-card4">
    <div class="img-side">
      <img :src="img" :alt="name" loading="lazy" />
    </div>
    <div class="text-side">
      <h1>{{ name }}</h1>
      <p>{{ position }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  img: String,
  name: String,
  position: String,
});
</script>

<style scoped lang="scss">
.app-card4 {
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  transition: 300ms ease-in-out;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  .img-side {
    width: 100%;
    height: 350px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: center;
    }
  }

  .text-side {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-size: var(--mediumFontSize);
      text-align: center;
      color: var(--secondary-blue);
    }

    p {
      font-size: var(--smallFontSize);
      text-align: center;
      color: var(--blue3);
    }
  }
}
</style>
