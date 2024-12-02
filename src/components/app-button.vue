<template>
  <button
    :class="`app-button ${disabled && !loading && 'disabled'} ${theme === 'primary' ? 'primary' : 'secondary'}`"
    :disabled="disabled || loading"
    :style="styleSheet[theme]"
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
  theme: {
    type: String as () => keyof typeof styleSheet,
    default: "primary",
  },
});

const styleSheet = {
  primary: {
    background: "var(--primary-blue)",
  },
  secondary: {
    background: "var(--accent-yellow)",
  },
};
</script>

<style scoped lang="scss">
.app-button {
  padding: 0.9rem;
  color: var(--text-light) !important;
  text-decoration: none !important;
  border-radius: var(--borderRadius);
  border: none;
  cursor: pointer;
  transition: 300ms ease-in-out;
  font-size: var(--smallFontSize);

  &.primary:hover {
    background: var(--hoverBlue) !important;
  }
  &.secondary:hover {
    background: var(--accent-yellow-hover) !important;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: #ccc;
    color: #999;
  }
}
</style>
