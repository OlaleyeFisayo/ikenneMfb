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
  background: var(--blue3);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  padding: 2rem;
  color: var(--background-light);
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  .text-side {
    margin-bottom: 1.5rem;
    font-size: var(--smallFontSize);
    position: relative;

    &::before {
      content: '"';
      font-size: 1.7rem;
      position: absolute;
      top: -15px;
      left: -20px;
      font-style: italic;
      color: var(--accent-yellow);
    }
    &::after {
      content: '"';
      font-size: 1.7rem;
      position: absolute;
      bottom: -20px;
      font-style: italic;
      color: var(--accent-yellow);
    }
  }

  .client-details {
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    gap: 0.2rem;
    align-items: center;

    .img-container {
      width: 65px;
      height: 65px;
      overflow: hidden;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
