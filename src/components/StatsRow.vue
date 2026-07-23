<script setup>
import stats from '../data/stats';
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 border-t border-border mt-10 md:mt-12 max-w-4xl mx-auto"
  >
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="border-r border-b md:border-b-0 border-border nth-[2n]:border-r-0 md:nth-[2n]:border-r md:last:border-r-0 lg:last:border-r-0 px-4 py-5"
    >
      <p class="font-mono text-base md:text-lg text-text-primary">
        {{ stat.value }}
      </p>
      <p
        class="font-mono text-[10px] text-text-secondary uppercase tracking-wide mt-1"
      >
        {{ stat.label }}
      </p>
    </div>
  </div>
</template>
