<template>
  <div class="app-card3">
    <h1 class="title">{{ title }}</h1>
    <ol>
      <li v-for="(child, i) in children" :key="i">{{ child }}</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  children: Array<String>,
});
</script>

<style scoped lang="scss">
.app-card3 {
  background: var(--primary-blue);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  color: var(--background-light);
  display: flex;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
  position: relative;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  margin: 0 auto;

  .title {
    font-size: var(--mediumFontSize);
  }

  ol {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-left: 2px solid var(--accent-yellow);
    list-style: none;
    padding-left: 1rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--accent-yellow);
      top: -8px;
      left: -8px;
    }

    li {
      width: 100%;
      font-size: var(--smallFontSize);
      color: var(--text-light);
    }
  }
}
</style>
