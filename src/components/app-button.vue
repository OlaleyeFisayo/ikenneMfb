<template>
  <button
    :class="`app-button ${disabled && !loading && 'disabled'}`"
    :disabled="disabled || loading"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

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
  font-size: var(--smallFontSize);

  &:hover {
    background: var(--hoverBlue);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #ccc;
    color: #999;
  }
}
</style>
