<template>
  <section class="contact">
    <section class="our-location">
      <div class="content">
        <div class="contact-details">
          <h1 class="header">Our Location:</h1>
          <p class="location">
            58, Tai Solarin Street, Ikenne-Remo, Ogun State
          </p>
          <p class="email">Email: admin@ikennemfb.com</p>
          <p class="p-number">
            Phone:
            <span class="value">08033086092, kemiawolesi@ikennemfb.com</span>
          </p>
          <p class="p-number">
            Phone:
            <span class="value">09044331665, kingshak@ikennemfb.com</span>
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
              :repName="customerSupportRep.name"
              :position="customerSupportRep.position"
              :phoneNumber="customerSupportRep.phoneNumber"
              :email="customerSupportRep.email"
            />
          </div>
        </div>
        <div class="form-side">
          <AppInput
            v-for="form in formValue"
            :key="form.tag"
            :placeholder="form.placeholder"
            :value="form.value"
            v-model="form.value"
            :name="form.tag"
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
    name: "Bunmi Oyegunwa",
    position: "Customer Relations Officer",
    phoneNumber: "08069183668",
    email: "oyegunwabunmi@ikennemfb.com",
  },
  {
    name: "Nike Gbolagade",
    position: "Customer Support",
    phoneNumber: "08065294044",
    email: "gbolagadenike@ikennemfb.com",
  },
];

const formValue = ref([
  {
    placeholder: "Name*",
    tag: "name",
    value: null,
  },
  {
    placeholder: "Email",
    tag: "email",
    type: "password",
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
