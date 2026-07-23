<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    default: null,
  }
});
</script>

<template>
  <span
    class="font-mono text-[12px] uppercase border border-border px-2 py-1 text-text-primary rounded-sm inline-flex items-center gap-2"
  >
    <component :is="icon" v-if="icon" class="w-4 h-4" />
    {{ title }}
  </span>
</template>

<style scoped></style>
