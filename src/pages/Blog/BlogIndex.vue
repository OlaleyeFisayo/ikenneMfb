<template>
  <section class="blog">
    <div class="header">
      <div class="content">
        <h1 class="title">Our Blogs</h1>
      </div>
    </div>
    <section class="blogs">
      <div class="content">
        <template v-for="(blog, index) in blogPosts" :key="index">
          <appBlog
            :img="blog.img"
            :title="blog.title"
            :description="blog.description"
          />
        </template>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import appBlog from "../../components/app-blog.vue";

const blogPosts = [
  {
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    title: "Empowering Communities Through Financial Inclusion",
    description:
      "Discover how microfinance banks are transforming lives by providing financial services to underserved communities. Learn the benefits of inclusive banking and its impact on economic development.",
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    title: "The Success Stories Behind Micro Loans",
    description:
      "Read inspiring success stories of individuals and small businesses who achieved their dreams with the help of micro loans. See how these loans create ripple effects in the economy.",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "How Technology is Revolutionizing Microfinance",
    description:
      "Explore how mobile banking, digital wallets, and AI are enhancing accessibility and efficiency in the microfinance sector, making banking simpler for everyone.",
  },
  {
    img: "https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg",
    title: "Top 5 Savings Tips for Small Business Owners",
    description:
      "Learn practical tips to manage your finances and grow your savings. This guide is perfect for small business owners looking to maximize their profits.",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "Building Sustainable Growth Through Microfinance",
    description:
      "Understand the strategies that microfinance banks use to ensure long-term growth and sustainability while serving low-income earners.",
  },
];
</script>

<style scoped lang="scss">
@import url("./BlogIndex.scss");
</style>
