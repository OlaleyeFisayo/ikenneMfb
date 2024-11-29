<template>
  <div class="app-card">
    <div class="img-side"></div>
    <div class="text-side">
      <h1 class="title">{{ title }}</h1>
      <template v-if="type === 'list'">
        <slot></slot>
      </template>
      <template v-else>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  type: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.app-card {
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: 1px solid var(--gray);
  transition: 300ms ease-in-out;
  max-width: 500px;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }
  margin: 0 auto;
}

.text-side {
  padding: 1rem;
  .title {
    font-size: 1.5rem;
    color: var(--secondary-blue);
    text-align: center;
  }

  .subtitle {
    text-align: center;
    color: var(--black);
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }

  ul {
    color: var(--gray2) !important;

    li {
      font-weight: 700 !important;
    }
  }
}
</style>
