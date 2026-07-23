<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-8">
    <div class="flex items-center gap-4 mb-4">
      <h2 class="font-mono text-sm tracking-wider text-text-primary uppercase">
        {{ title }}
      </h2>
      <hr class="divider-dashed flex-1" />
    </div>
    <p class="text-text-secondary text-sm">
      {{ description }}
    </p>
  </div>
</template>
