<template>
  <section class="resources">
    <section class="header">
      <div class="content">
        <div class="bg-img">
          <AppImg
            :src="resourceImg"
            :smallImg="resourceImgSmall"
            alt="resource img"
          />
        </div>
        <div class="content-content">
          <div class="title">
            <h1>Download Forms</h1>
            <div class="line"></div>
          </div>
          <p>
            Need to update your account or apply for a new service? Find all the
            forms you need in one place
          </p>
        </div>
      </div>
    </section>
    <section class="body">
      <div class="content">
        <h1 class="title">All Forms</h1>
        <div class="forms-list">
          <AppList
            v-for="(form, i) in formsList"
            :key="i"
            :name="form.name"
            :file="form.file"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import AppImg from "../../components/app-img.vue";
import AppList from "../../components/app-list.vue";
import resourceImg from "../../assets/imgs/resource-img.jpg";
import resourceImgSmall from "../../assets/imgs/resource-img-small.jpg";

const formsList = [
  {
    name: "Individual Account Opening Form",
    file: "/forms/Individual Account Opening Form.pdf",
  },
];
</script>

<style scoped lang="scss">
@import url("./ResourcesIndex.scss");
</style>
