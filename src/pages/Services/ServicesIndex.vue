<template>
  <section class="services">
    <section class="header">
      <div class="content">
        <div class="title">
          <h1>Ikenne MFB</h1>
          <div class="line"></div>
        </div>
        <p>
          We offer demand-driven microfinance services to microenterpreneurs in
          the most professional and efficient manner, in order to meet their
          needs, and grow their businesses, the bank is working with highly
          skilled and efficient management team and staff to achieve this
          mission.
        </p>
      </div>
    </section>
    <section class="services-list">
      <div class="content">
        <AppGrid>
          <AppCard3
            v-for="(service, i) in services"
            :key="i"
            :title="service.label"
            :children="service.children"
          />
        </AppGrid>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import AppCard3 from "../../components/app-card3.vue";
import AppGrid from "../../components/app-grid.vue";

const services = [
  {
    label: "Target Saving Account (TSA)",
    children: [
      "Opening of Account",
      "Two photograph passports",
      "Valid identification Card",
      "Attractive Interest rate",
      "Account passbook",
      "Access to withdrawal on special occasion",
      "Bank Verification Number",
      "Electricity Bill",
    ],
  },
  {
    label: "Dependent Relative Account",
    children: [
      "Opening of Account",
      "Two passport photographs each from the account holder & the recipient",
      "COT free",
      "Operate through standing order",
      "Bank Verification Number",
      "Electricity Bill",
    ],
  },
  {
    label: "Ikenne Regular Current Account",
    children: [
      "Opening of Account",
      "Two passport photographs",
      "Valid Identification Card",
      "Salary Account to be opened through introduction letter from employer",
      "Access to loan and overdraft",
      "Access to third party withdrawal",
      "Bank Verification Number",
    ],
  },
  {
    label: "Children Saving Account",
    children: [
      "Opening of Account",
      "Benefit of free membership of Ikenne children investment club",
      "Free Access to gift etc.",
    ],
  },
  {
    label: "Ereke-Wise Account",
    children: [
      "Opening of Account",
      "Two passport photographs",
      "Attractive interest",
      "COT free",
      "Access to third party withdrawal",
      "Access to Cheque book",
      "BVN",
      "Electricity Bill",
      "Valid Identity Card",
    ],
  },
  {
    label: "Regular Savings Account",
    children: [
      "Opening of Account",
      "Two passport photographs",
      "Valid Identity Card",
      "Account passbook",
      "BVN",
      "Electricity Bill",
    ],
  },
  {
    label: "Daily Savings (Daily Contribution)",
    children: [
      "Opening of Account",
      "Two passport photographs",
      "Valid Identity Card",
      "Electricity Bill",
      "BVN",
    ],
  },
  {
    label: "Government Tax Collection",
    children: [
      "PAYE",
      "Minimum tax",
      "Direct Assessment",
      "Road Taxes (Valid licence Renewal registration etc)",
      "Withholding tax",
      "Levies etc.",
    ],
  },
  {
    label: "E-Transfer",
    children: ["Fund transfer", "Access to Bank's Application"],
  },
  {
    label: "Loans",
    children: [
      "Agric loan scheme",
      "L P O finance",
      "Salary earner's loan",
      "Asset acquisition",
      "Micro credit",
      "Ikenne classic loan",
      "Tricycle loan",
    ],
  },
];
</script>

<style scoped lang="scss">
@import url("./ServicesIndex.scss");
</style>
