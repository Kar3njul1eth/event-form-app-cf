<template>
  <div class="cf-file-upload">
    <input
      :id="id"
      type="file"
      :accept="accept"
      @change="handleFileChange"
      hidden
    />
    <label :for="id" class="cf-file-upload-label">
      <slot></slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  accept: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['file-selected'])

const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    emit('file-selected', file)
  }
}
</script>

<style src="./CFFileUpload.scss" lang="scss" scoped>
</style>