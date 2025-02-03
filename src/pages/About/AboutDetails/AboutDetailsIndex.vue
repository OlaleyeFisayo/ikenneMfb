<template>
  <section class="about-details">
    <section class="go-back">
      <div class="content">
        <RouterLink to="/about" class="go-back-btn">
          <ArrowRight color="#0d2034" />
          <h1>Go Back</h1>
        </RouterLink>
      </div>
    </section>
    <section class="header">
      <div class="content">
        <div class="title">
          <div class="img-side">
            <img :src="details?.img" :alt="details?.name" loading="lazy" />
          </div>
        </div>
        <div class="context">
          <div class="member-details">
            <h1>{{ details?.name }}</h1>
            <div class="line"></div>
          </div>
          <p>
            {{ details?.description }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { BODData } from "../data";
import { RouterLink, useRoute } from "vue-router";
import { ArrowRight } from "lucide-vue-next";

const route = useRoute();
const details = computed(() =>
  BODData.find((data) => data.id === Number(route.params.id)),
);
</script>

<style scoped lang="scss">
@import url("./AboutDetailsIndex.scss");
</style>
