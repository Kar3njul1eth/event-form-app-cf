<template>
  <div class="cf-checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="cf-checkbox-input"
    />
    <label :for="id" class="cf-checkbox-label">
      <slot></slot>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style src="./CFCheckbox.scss" lang="scss" scoped></style>