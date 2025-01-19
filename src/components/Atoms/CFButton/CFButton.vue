<template>
  <button :class="['cf-btn', variant]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'danger'>,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style src="./CFButton.scss" lang="scss" scoped>

</style>