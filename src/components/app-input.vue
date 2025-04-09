<template>
  <template v-if="type === 'textarea'">
    <textarea
      :placeholder="placeholder"
      v-model="model"
      :name="tag"
      rows="10"
    ></textarea>
  </template>
  <template v-else>
    <div class="input-container">
      <slot name="left-icon"></slot>
      <input
        :type="type"
        :name="tag"
        :placeholder="placeholder"
        v-model="model"
      />
      <slot name="right-icon"></slot>
    </div>
  </template>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "",
  },
});

const model = defineModel<string | number | undefined | null>();
</script>

<style scoped lang="scss">
textarea {
  width: 100%;
  height: auto;
  border: 1px solid var(--gray);
  border-radius: var(--borderRadius);
  background: inherit;
  padding: 1rem 1.1rem;
  outline: none;
  resize: vertical;
  font-size: var(--smallFontSize);

  &::placeholder {
    font-style: italic;
    color: var(--secondary-blue);
  }
}

.input-container {
  width: 100%;
  height: auto;
  display: flex;
  border: 1px solid var(--gray);
  align-items: center;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border-radius: var(--borderRadius);

  input {
    background: inherit;
    padding: 1rem 0.8rem;
    border: 0;
    outline: none;
    display: block;
    width: 100%;
    font-size: var(--smallFontSize);

    &::placeholder {
      font-style: italic;
      color: var(--secondary-blue);
    }
  }
}
</style>
