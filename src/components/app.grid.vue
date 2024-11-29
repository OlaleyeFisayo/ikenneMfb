<template>
  <div class="app-grid" :style="styleSheet">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  grid: {
    type: Number,
    default: 3,
  },
});

const styleSheet = {
  gridTemplateColumns: `repeat(${props.grid}, 1fr)`,
};
</script>

<style scoped lang="scss">
.app-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  justify-content: space-between;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
</style>
