<script setup>
import SectionHeader from "./SectionHeader.vue";
import Tag from "./Tag.vue";

import categories from "../data/stack.js";
</script>

<template>
  <section id="tech-stack" class="py-8 sm:py-16 max-w-4xl mx-auto">
    <SectionHeader
      title="TECH_STACK"
      description="Languages, frameworks, and tools I use in production."
    />

    <div class="flex flex-col gap-6">
      <div v-for="category in categories" :key="category.label">
        <p
          class="font-mono text-[10px] text-text-secondary uppercase tracking-wide mb-2"
        >
          {{ category.label }}
        </p>
        <div class="flex flex-wrap gap-2">
          <Tag
            v-for="item in category.items"
            :key="item.name"
            :title="item.name"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
