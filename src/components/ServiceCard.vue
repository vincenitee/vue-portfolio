<!-- src/components/ServiceCard.vue -->
<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="border border-border p-6 hover:border-text-secondary transition-colors duration-200"
  >
    <component
      :is="service.icon"
      v-if="service.icon"
      class="w-6 h-6 text-text-primary mb-4"
    />

    <h3
      class="font-mono text-sm font-semibold text-text-primary uppercase mb-2"
    >
      {{ service.title }}
    </h3>

    <p class="font-sans text-sm text-text-secondary leading-relaxed">
      {{ service.description }}
    </p>
  </div>
</template>
