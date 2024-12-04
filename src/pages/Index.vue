<template>
  <section class="home-page">
    <section class="welcome-section">
      <div class="welcome-content">
        <h2 class="greeting">Welcome to</h2>
        <h1 class="bank-name">Ikenne Microfinance Bank</h1>
      </div>
    </section>
    <section class="about-section" id="about">
      <div class="content">
        <div class="img-side">
          <img
            src="../assets/imgs/DSC_3157.jpg"
            alt="team photo"
            loading="lazy"
          />
        </div>
        <div class="text-side">
          <h1>Our Bank</h1>
          <p>
            Ikenne Microfinance Bank was converted in January 2008 from Ikenne
            Community Bank. The Bank was incorporated in Nigeria as a Private
            Limited Liability Company in October 1993 and commenced business
            activities in June 1994 with its registered address at Tai Solarin
            Way, P.M.B. 2004, Ikenne-Remo, Ogun State.
          </p>
          <RouterLink to="/about">
            <AppButton class="learn-more">Learn More </AppButton>
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="company-values">
      <div class="content">
        <div class="mission-vision" :grid="2">
          <AppCard
            title="Mission"
            subtitle="To offer demand-driven microfinance services to microenterpreneurs
              in the most professional and efficient manner, in order to meet
              their needs, and grow their businesses, the bank is working with
              highly skilled and efficient management team and staff to achieve
              this mission."
          />
          <AppCard
            title="Vision"
            subtitle=" To provide efficient services to the underserved microenterprise
              sector thus bridging the existing gap and ultimately create
              wealth, alleviate poverty and reduce unemployment in the sector."
          />
        </div>
      </div>
    </section>
    <section class="our-products">
      <div class="left-section">
        <div class="details">
          <h1 class="title">Our Products</h1>
          <p class="subtitle">
            We are here to Acelerate your business and help you find the way.
          </p>
          <div class="button-container">
            <RouterLink to="/services"
              ><AppButton>See all Product</AppButton></RouterLink
            >
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="black-background"></div>
        <ul>
          <li><PiggyBank color="#ffc107" /> Savings</li>
          <li><Target color="#ffc107" /> Demand Deposit</li>
          <li><Briefcase color="#ffc107" /> Fixed Deposit</li>
          <li><DollarSign color="#ffc107" /> Loans Products</li>
          <li><FileText color="#ffc107" /> Government Tax Collection</li>
        </ul>
      </div>
    </section>
    <section class="testimonials">
      <div class="content">
        <h1 class="title">CLIENT TESTIMONIALS</h1>

        <Splide :options="testimonialsSliderOptions" class="splide">
          <SplideSlide
            v-for="(testimonial, index) in testimonialsOption"
            :key="index"
          >
            <AppCard2
              :label="testimonial.name"
              :img="testimonial.img"
              :clientName="testimonial.clientName"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
    <section class="gallary">
      <div class="content">
        <h1 class="title">Gallery</h1>
        <Splide :options="gallarySliderOption" class="splide">
          <SplideSlide
            v-for="(photo, index) in galleryOptions"
            :key="index"
            class=""
          >
            <div class="img-container">
              <img
                :src="photo.img"
                :alt="`slider${index + 1}`"
                loading="lazy"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import AppCard from "../components/app-card.vue";
import AppCard2 from "../components/app-card2.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import slider1 from "../assets/imgs/slider1.jpeg";
import slider2 from "../assets/imgs/slider2.jpeg";
import slider3 from "../assets/imgs/slider3.jpeg";
import slider4 from "../assets/imgs/slider4.jpeg";
import slider5 from "../assets/imgs/slider5.jpeg";
import testimonialOne from "../assets/imgs/testimonial-1.jpeg";
import testimonialTwo from "../assets/imgs/testimonial-2.jpeg";
import testimonialThree from "../assets/imgs/testimonial-3.jpeg";
import testimonialFour from "../assets/imgs/testimonial-4.jpeg";
import testimonialFive from "../assets/imgs/testimonial-5.jpeg";
import {
  Briefcase,
  DollarSign,
  FileText,
  PiggyBank,
  Target,
} from "lucide-vue-next";
import AppButton from "../components/app-button.vue";

const testimonialsOption = [
  {
    name: "Getting a loan facility from Ikenne Microfinance Bank was so easy and seamless compared to what is obtainable in other banks. Thank you Ikenne Microfinance Bank team for the excellent job. I will also recommend Ikenne Microfinance Bank to friends and families.",
    img: testimonialOne,
    clientName: "Fisayo",
  },
  {
    name: "The customer service at Ikenne Microfinance Bank is second to none. I was assisted throughout the loan application process and got a quick response. I highly recommend their services.",
    img: testimonialTwo,
    clientName: "Kunle",
  },
  {
    name: "Ikenne Microfinance Bank made it so easy for me to access funds to expand my small business. Their team was helpful and professional. I am truly grateful.",
    img: testimonialThree,
    clientName: "Adebayo",
  },
  {
    name: "I was skeptical about microfinance banks, but Ikenne Microfinance Bank changed my perception. Their process was transparent, and the loan terms were fair. Excellent service!",
    img: testimonialFour,
    clientName: "Chioma",
  },
  {
    name: "Ikenne Microfinance Bank offers outstanding financial products and services. Their staff is always friendly, knowledgeable, and eager to help. Highly recommend!",
    img: testimonialFive,
    clientName: "Samuel",
  },
];
const testimonialsSliderOptions = {
  type: "loop",
  autoplay: true,
  interval: 5000,
  pagination: true,
  arrows: true,
  perPage: 3,
  gap: "1rem",
  breakpoints: {
    1000: {
      perPage: 2,
    },
    700: {
      perPage: 1,
    },
  },
};
const galleryOptions = [
  { img: slider1 },
  { img: slider2 },
  { img: slider3 },
  { img: slider4 },
  { img: slider5 },
];
const gallarySliderOption = {
  type: "loop",
  autoplay: true,
  interval: 2000,
  perPage: 4,
  gap: "1rem",
  breakpoints: {
    1000: {
      perPage: 3,
    },
    700: {
      perPage: 2,
    },
    400: {
      perPage: 1,
    },
  },
};
</script>

<style scoped lang="scss">
@import url("./Index.scss");
</style>
