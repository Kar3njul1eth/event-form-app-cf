<template>
  <div class="cf-dropdown">
    <div class="cf-dropdown-header" @click="isOpen = !isOpen">
      <span>{{ selectedOption ? selectedOption.label : placeholder }}</span>
      <i class="cf-dropdown-icon" :class="{ 'open': isOpen }"></i>
    </div>
    <div v-if="isOpen" class="cf-dropdown-options">
      <div
        v-for="option in options"
        :key="option.value"
        class="cf-dropdown-option"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PropType } from 'vue'

interface DropdownOption {
  value: string | number
  label: string
}

defineProps({
  options: {
    type: Array as PropType<DropdownOption[]>,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectedOption = ref<DropdownOption | null>(null)

const selectOption = (option: DropdownOption) => {
  selectedOption.value = option
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>

<style src="./CFDropdown.scss" lang="scss" scoped>
</style>