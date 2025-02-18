<template>
  <div class="app-slider">
    <template v-for="(slide, index) in sliderRef" :key="index">
      <img
        loading="eager"
        :src="slide.image"
        :alt="`slider ${index}`"
        v-if="counter === index"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref } from "vue";
import { sliderProps } from "../helpers/types";

const props = defineProps({
  sliders: {
    type: Array as PropType<sliderProps[]>,
    default: () => {},
  },
});

const sliderRef = ref(props.sliders);
const counter = ref(0);

function toggleNextImage() {
  return setInterval(() => {
    counter.value = (counter.value + 1) % sliderRef.value.length;
  }, 15000);
}

let intervalId;

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

  img {
    width: 100%;
    object-position: cover;
    height: 100%;
  }
}
</style>
