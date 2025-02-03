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
          <template v-for="(boardOfDirector, i) in boardOfDirectors">
            <template v-if="boardOfDirector.to">
              <AppCard4
                :key="i"
                :img="boardOfDirector.img"
                :name="boardOfDirector.name"
                :position="boardOfDirector.position"
                :to="`about/${boardOfDirector.to}`"
              />
            </template>
            <template v-else>
              <AppCard4
                :key="i"
                :img="boardOfDirector.img"
                :name="boardOfDirector.name"
                :position="boardOfDirector.position"
              />
            </template>
          </template>
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
          <template v-for="(staff, i) in management">
            <template v-if="staff.to">
              <AppCard4
                :key="i"
                :img="staff.img"
                :name="staff.name"
                :position="staff.position"
                :to="`about/${staff.to}`"
              />
            </template>
            <template v-else>
              <AppCard4
                :key="i"
                :img="staff.img"
                :name="staff.name"
                :position="staff.position"
              />
            </template>
          </template>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import AppCard4 from "../../components/app-card4.vue";
import { boardOfDirectors, management } from "./data";
</script>

<style scoped lang="scss">
@import url("./AboutIndex.scss");
</style>
