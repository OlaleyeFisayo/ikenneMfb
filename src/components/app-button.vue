<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-button {
  padding: 0.9rem;
  background: var(--primary-blue);
  color: var(--white) !important;
  text-decoration: none !important;
  border-radius: var(--borderRadius);
  border: none;
  cursor: pointer;
  transition: 300ms ease-in-out;

  &:hover {
    background: var(--hoverBlue);
  }
}
</style>
