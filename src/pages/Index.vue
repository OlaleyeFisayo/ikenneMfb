<template>
  <section class="home-page">
    <section class="welcome-section">
      <div class="welcome-content">
        <h2 class="greeting">Welcome to</h2>
        <h1 class="bank-name">Ikenne Microfinance Bank</h1>
        <!-- <div class="buttons">
            <a href="#about"><AppButton>Learn More</AppButton></a>
            <RouterLink to="/contact" class="router-link">Contact</RouterLink>
        </div> -->
      </div>
      <div class="black-background"></div>
    </section>
    <section class="about-section" id="about">
      <div class="content">
        <div class="img-side">
          <img src="../assets/imgs/about.jpeg" alt="team photo" />
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
        <div class="mission-vision">
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
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import AppCard from "../components/app-card.vue";
</script>

<style scoped lang="scss">
@import url("./Index.scss");
</style>
