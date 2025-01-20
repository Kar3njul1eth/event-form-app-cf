<template>
  <div class="cf-date-input">
    <div class="cf-date-input-wrapper">
      <input
        :id="id"
        type="date"
        :value="formattedDate"
        @input="updateDate"
        :placeholder="placeholder"
        :disabled="disabled"
        :min="minDate"
        :max="maxDate"
        class="cf-date-field"
      />
      <svg
        class="cf-calendar-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" 
          stroke="#4FF6B1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: Date,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  minDate: {
    type: String,
    default: undefined
  },
  maxDate: {
    type: String,
    default: undefined
  }
});

const emit = defineEmits(['update:modelValue']);

const formattedDate = computed(() => {
  if (!props.modelValue) return '';
  return props.modelValue.toISOString().split('T')[0];
});

const updateDate = (event: Event) => {
  const newDate = new Date((event.target as HTMLInputElement).value);
  emit('update:modelValue', newDate);
};
</script>

<style src="./CFDateInput.scss" lang="scss" scoped> </style>