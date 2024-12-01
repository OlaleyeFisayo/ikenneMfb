<template>
  <div class="app-support-card">
    <h1 class="name">{{ repName }}</h1>
    <p>{{ position }}</p>
    <p class="phone-number">{{ phoneNumber }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  repName: String,
  position: String,
  phoneNumber: String,
  email: String,
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

  .name {
    font-size: var(--mediumFontSize);
  }

  .phone-number {
    font-weight: 800;
  }
}
</style>
