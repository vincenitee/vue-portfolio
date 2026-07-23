<script setup>
import SectionHeader from "./SectionHeader.vue";
import ProjectCard from "./ProjectCard.vue";

import projects from "../data/projects.js";
</script>

<template>
  <section id="projects" class="py-8 sm:py-16 max-w-4xl mx-auto">
    <SectionHeader
      title="PROJECT_LOGS"
      description="A record of systems I've built, contributed to, and maintain — spanning government and private-sector work."
    />

    <div class="flex flex-col">
      <template v-for="(project, i) in projects" :key="project.id">
        <ProjectCard :project="project" />
        <hr v-if="i < projects.length - 1" class="divider-dashed my-10" />
      </template>
    </div>
  </section>
</template>
