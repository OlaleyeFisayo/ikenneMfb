<template>
  <div class="app-support-card">
    <p class="position">{{ position }}</p>
    <p class="phone-number">{{ phoneNumber }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  position: String,
  phoneNumber: String,
});
</script>

<style scoped lang="scss">
.app-support-card {
  font-size: var(--smallFontSize);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 900px) {
    text-align: center;
  }

  .position {
    font-size: var(--mediumFontSize);
  }

  .phone-number {
    font-weight: 800;
  }
}
</style>
