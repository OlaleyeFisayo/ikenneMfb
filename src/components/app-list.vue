<template>
  <div class="app-list">
    <h1>{{ name }}</h1>
    <AppButton @click="downloadTemplate">Download form</AppButton>
  </div>
</template>

<script setup lang="ts">
import AppButton from "./app-button.vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  file: {
    type: String,
    default: "",
  },
});

function downloadTemplate() {
  const link = document.createElement("a");
  link.href = `${props.file}`;
  link.setAttribute("download", `${props.name}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<style scoped lang="scss">
.app-list {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: 1px solid var(--gray);
  padding: 0.5rem 1rem;

  h1 {
    color: var(--blue3) !important;
    font-size: var(--smallFontSize);
  }
}
</style>
