<template>
  <div class="app-card2">
    <p class="text-side">
      {{ label }}
    </p>
    <div class="client-details">
      <div class="img-container">
        <img :src="img" alt="client's image" />
      </div>
      <div class="name">
        <h1>{{ clientName }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  img: String,
  clientName: String,
});
</script>

<style scoped lang="scss">
.app-card2 {
  background: var(--black);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  padding: 2rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  .text-side {
    margin-bottom: 5rem;
    font-size: 1.2rem;
    position: relative;

    &::before {
      content: '"';
      font-size: 1.7rem;
      position: absolute;
      top: -15px;
      left: -20px;
      font-style: italic;
      color: var(--red);
    }
    &::after {
      content: '"';
      font-size: 1.7rem;
      position: absolute;
      bottom: -20px;
      // right: -20px;
      font-style: italic;
      color: var(--red);
    }
  }

  .client-details {
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    gap: 1rem;
    align-items: center;

    .img-container {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
