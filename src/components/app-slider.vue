<template>
  <div class="app-slider">
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${counter * 100}%)` }"
    >
      <AppImg
        class="app-img"
        v-for="(slide, index) in sliderRef"
        :key="index"
        :src="slide.image"
        :smallImg="slide.smallImg"
        :alt="`slider ${index}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref } from "vue";
import { sliderProps } from "../helpers/types";
import AppImg from "./app-img.vue";

const props = defineProps({
  sliders: {
    type: Array as PropType<sliderProps[]>,
    default: () => [],
  },
});

const sliderRef = ref(props.sliders);
const counter = ref(0);

function toggleNextImage() {
  return setInterval(() => {
    counter.value = (counter.value + 1) % sliderRef.value.length;
  }, 15000);
}

let intervalId: number;

onMounted(() => {
  intervalId = toggleNextImage();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.app-slider {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  .slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .app-img {
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
  }
}
</style>
