<template>
  <div class="cf-form-field">
    <label v-if="label" :for="id" class="cf-form-field-label">{{ label }}</label>
    <slot></slot>
    <div v-if="error" class="cf-form-field-error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
});
</script>

<style src="./CFFormField.scss" lang="scss" scoped></style>