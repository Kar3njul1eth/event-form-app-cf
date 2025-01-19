<template>
  <div class="cf-date-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <div class="cf-date-input-wrapper">
      <input
        :id="id"
        type="text"
        :value="formattedDate"
        @input="handleDateInput"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
      />
      <button class="cf-date-picker-btn" @click="showDatePicker = !showDatePicker">
        <i class="cf-date-picker-icon"></i>
      </button>
    </div>
    <div v-if="showDatePicker" class="cf-date-picker">
      <cf-date-picker
        :model-value="date"
        @update:model-value="updateDate"
        :disabled-dates="disabledDates"
      ></cf-date-picker>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue'
import CFDatePicker from './CFDatePicker.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Date,
    required: true
  },
  placeholder: {
    type: String,
    default: 'mm/dd/yyyy'
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
  },
  disabledDates: {
    type: Array as PropType<Date[]>,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const showDatePicker = ref(false)
const date = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const formattedDate = computed(() =>
  date.value ? date.value.toLocaleDateString() : ''
)

const handleDateInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value
  const dateValue = new Date(inputValue)
  if (!isNaN(dateValue.getTime())) {
    emit('update:modelValue', dateValue)
  }
}

const updateDate = (newDate: Date) => {
  emit('update:modelValue', newDate)
  showDatePicker.value = false
}
</script>

<style src="./CFDateInput.scss" lang="scss" scoped> </style>