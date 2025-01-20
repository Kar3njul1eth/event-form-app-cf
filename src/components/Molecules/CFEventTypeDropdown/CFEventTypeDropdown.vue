<template>
  <div class="cf-event-type-dropdown">
    <CFDropdown
      :options="eventTypeOptions"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      placeholder="Select event type"
    >
    <template #right-icon>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 9L12 15L6 9" stroke="#4FF6B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </template>
  </CFDropdown>
  </div>
</template>

<script setup lang="ts">
import CFDropdown from '@/components/Atoms/CFDropdown/CFDropdown.vue'

const eventTypeOptions = [
  { value: 'public', label: 'Public Event' },
  { value: 'private', label: 'Private Event' },
  { value: 'other', label: 'Other Event' }
]

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style src="./CFEventTypeDropdown.scss" lang="scss" scoped> </style>
