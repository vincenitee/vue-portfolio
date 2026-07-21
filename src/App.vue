<script setup>
import Hero from "./components/Hero.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="dot-grid min-h-screen flex">
    <Sidebar />
    <main class="flex-1 px-8 md:px-16 py-12">
      <Hero />
    </main>
  </div>
</template>

<style></style>
