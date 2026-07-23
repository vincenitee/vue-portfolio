<script setup>
import ContactTerminal from "./components/ContactTerminal.vue";
import Hero from "./components/Hero.vue";
import MobileNav from "./components/MobileNav.vue";
import ProjectCard from "./components/ProjectCard.vue";
import ProjectLogs from "./components/ProjectLogs.vue";
import Services from "./components/Services.vue";
import Sidebar from "./components/Sidebar.vue";
import StatsRow from "./components/StatsRow.vue";
import TechStackRow from "./components/TechStackRow.vue";
</script>

<template>
  <div class="dot-grid min-h-screen flex flex-col md:flex-row">
    <Sidebar />
    <MobileNav />
    <main class="flex-1 px-8 md:px-16 py-12">
      <Hero />
      <StatsRow />
      <Services />
      <ProjectLogs />
      <TechStackRow />
      <ContactTerminal />
    </main>
  </div>
</template>

<style></style>
