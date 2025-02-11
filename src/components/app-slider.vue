<template>
  <AppImg
    v-for="(slider, index) in slidersRef"
    :key="index"
    :src="slider.img"
    :class="`slides ${counter === index ? 'active' : ''}`"
    :smallImg="slider.smallImg"
  />
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import AppImg from "./app-img.vue";

interface SlidersProp {
  img: string;
  smallImg: string;
}

const props = defineProps({
  sliders: {
    type: Array as PropType<SlidersProp[]>,
    default: () => [],
  },
});

const slidersRef = ref(props.sliders);
const counter = ref(0);

onMounted(() => {
  setInterval(() => {
    counter.value += 1;
    if (counter.value === slidersRef.value.length) {
      counter.value = 0;
    }
  }, 15 000);
});
</script>

<style scoped lang="scss">
.slides {
  display: none;
  opacity: 0;
  transition: opacity 250ms ease-in-out;
  width: 100%;
  height: 100%;

  &.active {
    display: block;
    opacity: 1;
  }
}
</style>
