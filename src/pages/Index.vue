<template>
  <section class="home-page">
    <section class="welcome-section">
      <div class="img-bg">
        <AppSlider :sliders="sliderOptions" />
      </div>
      <div class="welcome-content">
        <h2 class="greeting">Welcome to</h2>
        <div class="bank-container">
          <h1 class="bank-name">Ikenne Microfinance Bank</h1>
          <p class="rc-number">(R.C 232596)</p>
        </div>
      </div>
    </section>
    <section class="about-section" id="about">
      <div class="content">
        <div class="img-side">
          <AppImg :src="aboutImg" alt="team photo" :smallImg="aboutSmallImg" />
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
        <div class="black-background">
          <AppImg
            :src="welcomeSlider3"
            :smallImg="welcomeSlider3Small"
            alt="Products img"
          />
        </div>
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
              :label="testimonial.testimony"
              :clientName="testimonial.name"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
    <section class="gallary">
      <div class="content">
        <h1 class="title">Gallery</h1>
        <Splide :options="gallarySliderOption" class="splide">
          <SplideSlide v-for="(photo, index) in galleryOptions" :key="index">
            <div class="img-container">
              <template v-if="photo.type === 'video'">
                <video controls>
                  <source :src="photo.src" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </template>
              <template v-else>
                <AppImg
                  :src="photo.img"
                  :alt="`slider${index + 1}`"
                  :smallImg="photo.smallImg"
                />
              </template>
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
import {
  Briefcase,
  DollarSign,
  FileText,
  PiggyBank,
  Target,
} from "lucide-vue-next";
import AppButton from "../components/app-button.vue";
import AppImg from "../components/app-img.vue";
import aboutImg from "../assets/imgs/DSC_3157.jpg";
import aboutSmallImg from "../assets/imgs/DSC_3157-small.jpg";
import { gallarySliderOption, galleryOptions } from "./galleryData";
import welcomeSlider3 from "../assets/imgs/welcome-slider3.jpg";
import welcomeSlider3Small from "../assets/imgs/welcome-slider3-small.jpg";
import welcomeSlider1 from "../assets/imgs/welcome-slider1.jpg";
import welcomeSlider1Small from "../assets/imgs/welcome-slider1-small.jpg";
import welcomeSlider2 from "../assets/imgs/welcome-slider2.jpg";
import welcomeSlider2Small from "../assets/imgs/welcome-slider2-small.jpg";
import welcomeSlider4 from "../assets/imgs/resource-img.jpg";
import welcomeSlider4Small from "../assets/imgs/resource-img-small.jpg";
import AppSlider from "../components/app-slider.vue";

const sliderOptions = [
  {
    image: welcomeSlider1,
    smallImg: welcomeSlider1Small,
    isActive: true,
  },
  {
    image: welcomeSlider2,
    smallImg: welcomeSlider2Small,
    isActive: false,
  },
  {
    image: welcomeSlider4,
    smallImg: welcomeSlider4Small,
    isActive: false,
  },
];

const testimonialsOption = [
  {
    testimony:
      "Since I started dealing with Ikenne microfinance Bank, I have found the staff very efficient and understanding, they listen to customers issues and try to solve them professionally. The terms and conditions for loans are also very reasonable and interest rates are affordable. The time taken to process a loan application is also short and convenient to customers, I recommend that you open more branches countrywide so that more customers can access your services and products. THANK YOU AND KEEP IT UP.",
    name: "MRS OLUSANYA OMOTOLA",
  },
  {
    testimony:
      "I have been your customer for the last three years. I have benefited a lot from your financial assistance. The loan has assisted me sort out some urgent matters. Your interest rate is quite reasonable. Your processing time is also very fast. I really appreciate and feel part of you; I won’t hesitate to recommend you to any other needy person. THANK YOU FOR ALL YOUR SUPPORT.",
    name: "MR. JIMOH WAHEED",
  },
  {
    testimony:
      "Farmer, Agro loan customer, I was able to expand my daily production with the help of a loan from Ikenne Microfinance Bank. The staff was always very supportive in carrying out the process.",
    name: "MR. POPOOLA ISRAEL",
  },
  {
    testimony:
      "Businessman, savings account and current account holder. I was impressed by the solutions provided by the bank in response to the challenges I shared. I prefer Ikenne Microfinance bank over other banks, owing to the mobile banking app upgrading and quick response to mails. He has opened current/savings account for all his staff and finds money transfer and balance enquiry very convenient through the apps.",
    name: "MR. TUNDE",
  },
  {
    testimony:
      "Business person, MSME loan customer. The Bank’s employee helped me in understanding the loan that lead me to trust the bank. I am very happy with the growth my business made with the help of the loan",
    name: "MRS. ODUNTAN TITILAYO",
  },
  {
    testimony:
      "Salary earner loan customer. I am thankful to Ikenne Microfinance Bank in helping to realize my dream of home ownership. Today, I take pride in cooking in my own kitchen, sitting in the midst of landlords. When my colleagues ask me how I was able to make my house in such pace, I recommend them to Ikenne Microfinance Bank NIG.",
    name: "MR. ADEKOYA ABIODUN",
  },
  {
    testimony:
      "We won’t exist if Ikenne Microfinance Bank did not help to support us. Anytime we’ve needed money to grow, Ikenne MFB has always stepped up to the plate.",
    name: "OLABISI DADA, CEO AGBEKE GOD’S GLORY VENTURES",
  },
  {
    testimony:
      "The Ikenne MFB has been a key partner in our success, and an invaluable asset for the growth and future of our company",
    name: "TOBAF STONES ENTREPRISES",
  },
  {
    testimony:
      "Ikenne Microfinance Bank has made it possible for us to progress in our annual trade fair sales. While also helping to finance an empowering scheme for less privelegde. We thank Ikenne MFB for usual support",
    name: "ABDUL OMOSHALEWA OLANISHILE, MD/CEO ADULEH’S PLACE LTD",
  },
  {
    testimony:
      "Ikenne MFB worked extensively with me to help me anticipate some of the issues that my business may face. Not many lenders would go to that extent. They have been extremely supportive and a great resource.",
    name: "ODUNWAYE ADEYINKA, DIRECTOR OF YINKOD BROAD VENTURES",
  },
  {
    testimony:
      "Ikenne MFB has been incredibly helpful to our company by providing a line of credit for our continued growth.",
    name: "ALAYO JULORUL SHITA, DIRECTOR OF INFINITY JOY GLOBAL CONCEPT",
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
</script>

<style scoped lang="scss">
@import url("./Index.scss");
</style>
