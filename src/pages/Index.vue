<template>
  <section class="home-page">
    <section class="welcome-section">
      <div class="welcome-content">
        <h2 class="greeting">Welcome to</h2>
        <h1 class="bank-name">Ikenne Microfinance Bank</h1>
      </div>
      <div class="black-background"></div>
    </section>
    <section class="about-section" id="about">
      <div class="content">
        <div class="img-side">
          <img src="../assets/imgs/DSC_3157.jpg" alt="team photo" />
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
        </div>
      </div>
    </section>
    <section class="company-values">
      <div class="content">
        <AppGrid class="mission-vision">
          <AppCard
            title="Mission"
            subtitle="To offer demand-driven microfinance services to microenterpreneurs
              in the most professional and efficient manner, in order to meet
              their needs, and grow their businesses, the bank is working with
              highly skilled and efficient management team and staff to achieve
              this mission."
          />
          <AppCard
            title="Visions"
            subtitle=" To provide efficient services to the underserved microenterprise
              sector thus bridging the existing gap and ultimately create
              wealth, alleviate poverty and reduce unemployment in the sector."
          />
          <AppCard title="Core values" type="list">
            <ul>
              <li>Professionalism</li>
              <li>Accountability</li>
              <li>Customer Satisfaction</li>
              <li>Efficiency</li>
              <li>Integrity</li>
            </ul>
          </AppCard>
          <AppCard
            title="Financial Strength"
            subtitle=" The Bank has shareholders’ fund of N104M as at 31st December, 2019
              for above the regulatory requirement of N50M for Tier 2 Unit
              Microfinance Bank. This means that the Bank has double financial
              capacity of its peers."
          />
          <AppCard
            title="Ownership"
            subtitle="The ownership of the Bank cuts across the social strata of the
              community with reputable professionals and people of integrity."
          />
          <AppCard
            title="Strategic Intent"
            subtitle="The Bank strategic intent is to be among the top five (5) of most
              preferred Microfinance Banks in Nigeria by the year 2025."
          />
        </AppGrid>
      </div>
    </section>
    <section class="our-products">
      <div class="content">
        <div class="left-section">
          <div class="details">
            <h1 class="title">Our Products</h1>
            <p class="subtitle">
              We are here to Acelerate your business and help you find the way.
            </p>
            <div class="button-container">
              <RouterLink to="/product" class="button"
                >See all Product</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="right-section">
          <ul>
            <li><Target color="#b30000" /> Target Saving Account</li>
            <li><Users color="#b30000" /> Dependent Relative Account</li>
            <li>
              <Briefcase color="#b30000" /> Ikenne Regular Current Account
            </li>
            <li><Baby color="#b30000" /> Children Saving Account</li>
            <li><Book color="#b30000" /> Ereke - Wise Account</li>
            <li><PiggyBank color="#b30000" /> Regular Savings Account</li>
            <li><Calendar color="#b30000" /> Daily Savings</li>
            <li><FileText color="#b30000" /> Government Tax Collection</li>
            <li><Send color="#b30000" /> E-Transfer</li>
            <li><DollarSign color="#b30000" /> Loans</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <div class="content">
        <h1 class="title">CLIENT TESTIMONIALS</h1>

        <Splide :options="testimonialsSliderOptions" class="splide">
          <SplideSlide
            v-for="(testimonial, index) in testimonialsOption"
            :key="index"
            class=""
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
              <img :src="photo.img" :alt="`slider${index + 1}`" />
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
import AppGrid from "../components/app.grid.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import slider1 from "../assets/imgs/slider1.jpeg";
import slider2 from "../assets/imgs/slider2.jpeg";
import slider3 from "../assets/imgs/slider3.jpeg";
import slider4 from "../assets/imgs/slider4.jpeg";
import slider5 from "../assets/imgs/slider5.jpeg";
import clientPhoto from "../assets/imgs/DSC_3160.jpg";
import {
  Baby,
  Book,
  Briefcase,
  Calendar,
  DollarSign,
  FileText,
  PiggyBank,
  Send,
  Target,
  Users,
} from "lucide-vue-next";

const testimonialsOption = [
  {
    name: "Getting a loan facility from Ikenne Microfinance Bank was so easy and seamless compared to what is obtainable in other banks. Thank you Ikenne Microfinance Bank team for the excellent job. I will also recommend Ikenne Microfinance Bank to friends and families.",
    img: clientPhoto,
    clientName: "Fisayo",
  },
  {
    name: "The customer service at Ikenne Microfinance Bank is second to none. I was assisted throughout the loan application process and got a quick response. I highly recommend their services.",
    img: clientPhoto,
    clientName: "Kunle",
  },
  {
    name: "Ikenne Microfinance Bank made it so easy for me to access funds to expand my small business. Their team was helpful and professional. I am truly grateful.",
    img: clientPhoto,
    clientName: "Adebayo",
  },
  {
    name: "I was skeptical about microfinance banks, but Ikenne Microfinance Bank changed my perception. Their process was transparent, and the loan terms were fair. Excellent service!",
    img: clientPhoto,
    clientName: "Chioma",
  },
  {
    name: "Ikenne Microfinance Bank offers outstanding financial products and services. Their staff is always friendly, knowledgeable, and eager to help. Highly recommend!",
    img: clientPhoto,
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
