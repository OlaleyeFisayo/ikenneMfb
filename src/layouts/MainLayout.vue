<template>
  <section class="main-layout">
    <nav class="navbar">
      <div class="navbar-content">
        <RouterLink to="/" class="logo">
          <img src="../assets/imgs/logo.jpeg" alt="logo" />
        </RouterLink>
        <div class="links-section">
          <ul class="nav-links">
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <a href="#about">About</a>
              <!-- <RouterLink to="/about">About</RouterLink> -->
            </li>
            <li>
              <a href="#services">Services</a>
              <!-- <RouterLink to="/services">Services</RouterLink> -->
            </li>
            <li>
              <RouterLink to="/blog">Blog</RouterLink>
            </li>
            <li>
              <RouterLink to="/resources">Resources</RouterLink>
            </li>
          </ul>
          <AppButton class="my-button"
            ><RouterLink to="/contact">CONTACT US</RouterLink></AppButton
          >
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
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <RouterLink to="/blog">Blog</RouterLink>
            </li>
            <li>
              <RouterLink to="/resources">Resources</RouterLink>
            </li>
          </ul>
          <AppButton class="my-button"
            ><RouterLink to="/contact">Contact us</RouterLink></AppButton
          >
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
              +234 8135536531
            </p>
            <p>
              <Mail color="#ffc107" :width="15" :height="15" />
              info@ikennemfb.com
            </p>
          </div>
        </div>
        <div class="our-links">
          <h1>Our Links</h1>
          <ul class="footer-link">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/service">Services</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li>
              <RouterLink to="/resources">Resources</RouterLink>
            </li>
          </ul>
        </div>
        <div class="question">
          <h1>Need a Loan?</h1>
          <p>You can talk to us</p>
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
          &copy; 2024 <RouterLink to="/">Ikennemfb</RouterLink> All rights
          reserved
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
</script>

<style scoped lang="scss">
@import url("./MainLayout.scss");
</style>
