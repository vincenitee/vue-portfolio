<script setup>
import SectionHeader from "./SectionHeader.vue";
import ServiceCard from "./ServiceCard.vue";

import services from "../data/services.js";
</script>

<template>
  <section id="services" class="py-8 sm:py-16 max-w-4xl mx-auto">
    <SectionHeader
      title="SERVICES_OFFERED"
      description="What I can take on for freelance and contract work."
    />

    <div class="grid md:grid-cols-2 items-center gap-4">
        <ServiceCard v-for="service in services" :key="service" :service="service" />
    </div>
  </section>
</template>

<style scoped></style>
