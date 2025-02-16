<template>
  <div class="app-card2">
    <p class="text-side">
      {{ label }}
    </p>
    <div class="client-details">
      <h1>{{ clientName }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  img: String,
  clientName: String,
  smallImg: String,
});
</script>

<style scoped lang="scss">
.app-card2 {
  background: var(--blue4);
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
  gap: 2rem;

  .text-side {
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
    text-transform: capitalize;
    height: auto;
    width: 100%;
    text-align: center;
  }
}
</style>
