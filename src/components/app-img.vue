<template>
  <div class="blurred-img" :style="imgStyleSheet" ref="blurredImageDiv">
    <img :src="src" :alt="alt" loading="lazy" ref="img" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  src: string;
  alt?: string;
  smallImg: string;
}>();

const imgStyleSheet = computed(() => ({
  backgroundImage: props.smallImg ? `url(${props.smallImg})` : "none",
}));

const blurredImageDiv = ref<HTMLElement | null>(null);
const img = ref<HTMLImageElement | null>(null);
function loaded() {
  blurredImageDiv.value?.classList.add("loaded");
}
// Display the right images when it has loaded
onMounted(() => {
  if (img.value?.complete) {
    loaded();
  } else {
    img.value?.addEventListener("load", loaded);
  }
});

onUnmounted(() => {
  img.value?.removeEventListener("load", loaded);
});
</script>

<style lang="scss" scoped>
.blurred-img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(10px);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: pulse 2.5s infinite;
    background-color: white;
  }

  &.loaded {
    filter: none;
  }

  &.loaded::before {
    animation: none;
    content: none;
  }

  &.loaded img {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
  }
}
</style>
