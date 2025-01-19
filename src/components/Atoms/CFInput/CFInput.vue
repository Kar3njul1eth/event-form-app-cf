<template>
  <div class="cf-input-wrapper">
    <label v-if="label" :for="id" class="cf-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      class="cf-input"
    />
    <div v-if="error" class="cf-error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'text' | 'number' | 'email' | 'password'>,
    default: 'text'
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<style src="./CFInput.scss" lang="scss" scoped>
</style>