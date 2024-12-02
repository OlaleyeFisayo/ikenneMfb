<template>
  <section class="about">
    <section class="header">
      <div class="content">
        <div class="title">
          <h1>Our History</h1>
          <div class="line"></div>
        </div>
        <div class="context">
          <p>
            Ikenne Microfinance Bank was converted in January 2008 from Ikenne
            Community Bank. The Bank was incorporated in Nigeria as a Private
            Limited Liability Company in October 1993 and commenced business
            activities in June 1994 with its registered address at Tai Solarin
            Way, P.M.B. 2004, Ikenne-Remo, Ogun State.
          </p>
          <p>
            Ikenne Microfinance Bank has been operating as a unit Bank for the
            past Ten years at the same registered address. The Bank’s vision is
            to provide efficient services to the underserved microenterprise
            sector thus bridging the existing gap, and ultimately create wealth,
            alleviate poverty and reduce unemployment in the sector.
          </p>
        </div>
      </div>
    </section>
    <section class="BOD">
      <div class="content">
        <div class="header">
          <h1>Meet Our Team (Board of Directors)</h1>
          <div class="line"></div>
        </div>
        <div class="list">
          <AppCard4
            v-for="(boardOfDirector, i) in boardOfDirectors"
            :key="i"
            :img="boardOfDirector.img"
            :name="boardOfDirector.name"
            :position="boardOfDirector.position"
          />
        </div>
      </div>
    </section>
    <section class="BOD">
      <div class="content">
        <div class="header">
          <h1>Management Staff</h1>
          <div class="line"></div>
        </div>
        <div class="list">
          <AppCard4
            v-for="(staff, i) in management"
            :key="i"
            :img="staff.img"
            :name="staff.name"
            :position="staff.position"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import SuluKehinde from "../../assets/imgs/DSC_3160.jpg";
import AwolesiOluwakemi from "../../assets/imgs/DSC_3176.jpg";
import LanreSotunde from "../../assets/imgs/DSC_3197.jpg";
import OlufemiAllen from "../../assets/imgs/DSC_3208.jpg";
import AdekunleAdeniyi from "../../assets/imgs/DSC_3165.jpg";
import GbolahanAdenuga from "../../assets/imgs/DSC_3171.jpg";
import OluwatoyinRufus from "../../assets/imgs/DSC_3188.jpg";
import OyegunwaOluwabunmi from "../../assets/imgs/DSC_3236.jpg";
import AllenRemi from "../../assets/imgs/DSC_3208.jpg";
import AppCard4 from "../../components/app-card4.vue";

const boardOfDirectors = [
  {
    img: SuluKehinde,
    name: "Mr. Sulu Kehinde",
    position: "Chairman",
  },
  {
    // img: OlufemiAllen,
    name: "Otunba Olufemi Allen",
    position: "Director",
  },
  {
    img: LanreSotunde,
    name: "Mr. Lanre Sotunde",
    position: "Director",
  },
  {
    img: AdekunleAdeniyi,
    name: "Barr, Adekunle Adeniyi",
    position: "Director",
  },
  {
    img: GbolahanAdenuga,
    name: "Mr. Gbolahan Adenuga",
    position: "Director",
  },
  {
    img: AwolesiOluwakemi,
    name: "Mrs Awolesi Oluwakemi",
    position: "MD",
  },
];

const management = [
  {
    img: AwolesiOluwakemi,
    name: "Mrs Awolesi Oluwakemi",
    position: "MD",
  },
  {
    img: OluwatoyinRufus,
    name: "Pastor Oluwatoyin Rufus Patrick",
    position: "Internal Auditor",
  },
  {
    img: OyegunwaOluwabunmi,
    name: "Mrs. Oyegunwa Oluwabunmi Margaret",
    position: "Head of Operations",
  },
  {
    img: AllenRemi,
    name: "Mrs. Allen Remi",
    position: "Head Risk Management/Recovery",
  },
];
</script>

<style scoped lang="scss">
@import url("./AboutIndex.scss");
</style>
