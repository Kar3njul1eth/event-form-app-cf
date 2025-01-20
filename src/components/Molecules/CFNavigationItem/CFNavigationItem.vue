<template>
  <div
    class="cf-navigation-item"
    :class="{ 'active': isActive, 'has-error': hasError }"
    @click="$emit('click')"
  >
    <div class="cf-navigation-item__number" v-if="number">{{ number }}</div>
    <span class="cf-navigation-item__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  },
  number: {
    type: Number,
    default: null
  }
});

defineEmits(['click']);
</script>

<style src="./CFNavigationItem.scss" lang="scss" scoped>
</style>