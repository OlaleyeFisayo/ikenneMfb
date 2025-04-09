<template>
  <section class="contact">
    <section class="our-location">
      <div class="content">
        <div class="contact-details">
          <h1 class="header">Our Location:</h1>
          <p class="location">
            58, Tai Solarin Street, Ikenne-Remo, Ogun State
          </p>
          <p class="email">Company Email: admin@ikennemfb.com</p>
          <p class="p-number">
            Contact Details:
            <span class="value">07050536077, kingshak@ikennemfb.com</span>
          </p>
        </div>
      </div>
    </section>
    <section class="divider">
      <div class="content">
        <div class="line"></div>
      </div>
    </section>
    <section class="contact-form">
      <div class="content">
        <div class="info-side">
          <h1 class="header">How can we help you?</h1>
          <div class="card-container">
            <AppSupportCard
              v-for="(customerSupportRep, i) in customerSupportReps"
              :key="i"
              :position="customerSupportRep.position"
              :phoneNumber="customerSupportRep.phoneNumber"
            />
          </div>
        </div>
        <div class="form-side">
          <AppInput
            v-for="form in formValue"
            :key="form.tag"
            :placeholder="form.placeholder"
            v-model="form.value"
            :type="form.type"
          />
          <AppButton :disabled="isMessageFromComplete">Send Message</AppButton>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import AppInput from "../../components/app-input.vue";
import AppSupportCard from "../../components/app-support-card.vue";
import AppButton from "../../components/app-button.vue";
import { convertToObject, isFormComplete } from "../../helpers";

const customerSupportReps = [
  {
    position: "Customer Support?",
    phoneNumber: "08069183668, 08065294044",
  },
  {
    position: "Need a Loan?",
    phoneNumber: "07065201382, 08166015581 ",
  },
];

const formValue = ref<
  {
    placeholder: string;
    tag: string;
    value: string | null | number;
    type?: string;
  }[]
>([
  {
    placeholder: "Name*",
    tag: "name",
    value: null,
  },
  {
    placeholder: "Email",
    tag: "email",
    type: "email",
    value: null,
  },
  {
    placeholder: "Messages",
    tag: "message",
    type: "textarea",
    value: null,
  },
]);

const payload = computed(() => convertToObject(formValue.value));
const isMessageFromComplete = computed(() => isFormComplete(payload.value));
</script>

<style scoped lang="scss">
@import url("./ContactIndex.scss");
</style>
