<template>
  <section class="blog">
    <div class="header">
      <div class="content">
        <h1 class="title">Our Blogs</h1>
      </div>
    </div>
    <section class="blogs">
      <div class="content">
        <appBlog
          v-for="(blog, index) in blogPosts"
          :img="blog.img"
          :title="blog.title"
          :description="blog.description"
          :key="index"
        />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import appBlog from "../../components/app-blog.vue";
import blog1 from "../../assets/imgs/blog1.jpeg";
import blog1Small from "../../assets/imgs/blog1-small.jpeg";
import blog2 from "../../assets/imgs/blog2.jpeg";
import blog2Small from "../../assets/imgs/blog2-small.jpeg";
import blog3 from "../../assets/imgs/blog3.jpeg";
import blog3Small from "../../assets/imgs/blog3-small.jpeg";
import blog4 from "../../assets/imgs/blog4.jpeg";
import blog4Small from "../../assets/imgs/blog4-small.jpeg";
import blog5 from "../../assets/imgs/blog5.jpeg";
import blog5Small from "../../assets/imgs/blog5-small.jpeg";

const blogPosts = [
  {
    img: blog1,
    smallImg: blog1Small,
    title: "Empowering Communities Through Financial Inclusion",
    description:
      "Discover how microfinance banks are transforming lives by providing financial services to underserved communities. Learn the benefits of inclusive banking and its impact on economic development.",
  },
  {
    img: blog2,
    smallImg: blog2Small,
    title: "The Success Stories Behind Micro Loans",
    description:
      "Read inspiring success stories of individuals and small businesses who achieved their dreams with the help of micro loans. See how these loans create ripple effects in the economy.",
  },
  {
    img: blog3,
    smallImg: blog3Small,
    title: "How Technology is Revolutionizing Microfinance",
    description:
      "Explore how mobile banking, digital wallets, and AI are enhancing accessibility and efficiency in the microfinance sector, making banking simpler for everyone.",
  },
  {
    img: blog4,
    smallimg: blog4Small,
    title: "Top 5 Savings Tips for Small Business Owners",
    description:
      "Learn practical tips to manage your finances and grow your savings. This guide is perfect for small business owners looking to maximize their profits.",
  },
  {
    img: blog5,
    smallimg: blog5Small,
    title: "Building Sustainable Growth Through Microfinance",
    description:
      "Understand the strategies that microfinance banks use to ensure long-term growth and sustainability while serving low-income earners.",
  },
];
</script>

<style scoped lang="scss">
@import url("./BlogIndex.scss");
</style>
