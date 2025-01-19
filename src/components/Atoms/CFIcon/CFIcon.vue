<template>
  <i :class="['cf-icon', `cf-icon-${name}`]"></i>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style src="./CFIcon.scss" lang="scss" scoped>
</style>