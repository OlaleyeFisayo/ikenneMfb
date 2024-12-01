<template>
  <section class="main-layout">
    <nav class="navbar">
      <div class="navbar-content">
        <RouterLink to="/" class="logo">
          <img src="../assets/imgs/logo.jpeg" alt="logo" loading="lazy" />
        </RouterLink>
        <div class="links-section">
          <ul class="nav-links">
            <li v-for="(page, i) in pageLinks" :key="i">
              <RouterLink :to="page.link">{{ page.label }}</RouterLink>
            </li>
          </ul>
          <RouterLink to="/contact">
            <AppButton class="my-button">CONTACT US</AppButton>
          </RouterLink>
        </div>
        <AppButton class="hamburger" @click="toggleMenu">
          <Menu />
        </AppButton>
      </div>
      <div :class="`mobile-view ${menu ? 'show' : ''}`">
        <div class="action-button">
          <AppButton class="close-button" @click="toggleMenu">
            <X />
          </AppButton>
        </div>
        <div class="links-section">
          <ul class="nav-links">
            <li v-for="(page, i) in pageLinks" :key="i">
              <RouterLink :to="page.link" @click="toggleMenu">{{
                page.label
              }}</RouterLink>
            </li>
          </ul>
          <RouterLink to="/contact" @click="toggleMenu">
            <AppButton class="my-button">CONTACT US</AppButton>
          </RouterLink>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
    <footer class="footer-top">
      <div class="content">
        <div class="contact-details">
          <h1>Our Contact Details</h1>
          <p>Ikenne Microfinance Bank</p>
          <div class="details">
            <p>
              <MapPin color="#ffc107" :width="15" :height="15" />
              58, Tai Solarin way, Ikenne-Remo, Ogun State
            </p>
            <p>
              <Phone color="#ffc107" :width="15" :height="15" />
              08033086092, kemiawolesi@ikennemfb.com
            </p>
            <p>
              <Phone color="#ffc107" :width="15" :height="15" />
              09044331665, kingshak@ikennemfb.com
            </p>
            <p>
              <Mail color="#ffc107" :width="15" :height="15" />
              admin@ikennemfb.com
            </p>
          </div>
        </div>
        <div class="our-links">
          <h1>Our Links</h1>
          <ul class="footer-link">
            <li v-for="(page, i) in pageLinks" :key="i">
              <RouterLink :to="page.link">{{ page.label }}</RouterLink>
            </li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="question">
          <h1>Need a Loan?</h1>
          <p>You can talk to us</p>
          <div class="details">
            <p>
              <Phone color="#ffc107" :width="15" :height="15" />
              07065201382
            </p>
            <p>
              <Phone color="#ffc107" :width="15" :height="15" />
              08166015581
            </p>
          </div>
        </div>
        <div class="subscribe">
          <p>
            Subscribe to our newsletter for notifications about new updates,
            etc.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
          <AppButton>SUBSCRIBE</AppButton>
        </div>
      </div>
    </footer>
    <footer class="footer-bottom">
      <div class="content">
        <p>
          &copy; {{ new Date().getFullYear() }}
          <RouterLink to="/">Ikennemfb</RouterLink> All rights reserved
        </p>
        <div class="social-links">
          <a href="#"><Facebook color="#ffc107" /></a>
          <a href="#"><Twitter color="#ffc107" /></a>
          <a href="#"><Instagram color="#ffc107" /></a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import AppButton from "../components/app-button.vue";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-vue-next";
import { ref } from "vue";

const menu = ref(false);
const toggleMenu = () => {
  menu.value = !menu.value;
};

const pageLinks = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "services",
    link: "/services",
  },
  {
    label: "blog",
    link: "/blog",
  },
  {
    label: "resources",
    link: "/resources",
  },
];
</script>

<style scoped lang="scss">
@import url("./MainLayout.scss");
</style>
