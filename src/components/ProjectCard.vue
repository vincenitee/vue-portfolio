<script setup>
import { ArrowUpRight } from "@lucide/vue";
import Tag from "./Tag.vue";
import IconLivewire from "../assets/icons/IconLivewire.vue";
import IconLaravel from "../assets/icons/IconLaravel.vue";
import IconSupabase from "../assets/icons/IconSupabase.vue";
import IconTailwindCSS from "../assets/icons/IconTailwindCSS.vue";
import IconMySQL from "../assets/icons/IconMySQL.vue";
import IconJavaScript from "../assets/icons/IconJavaScript.vue";
import IconBootstrap from "../assets/icons/IconBootstrap.vue";
import IconFlutter from "../assets/icons/IconFlutter.vue";
import IconDart from "../assets/icons/IconDart.vue";
import IconCodeIgniter from "../assets/icons/IconCodeIgniter.vue";
import IconPHP from "../assets/icons/IconPHP.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

// Maps a tag's text to its icon component. Add an entry here each time
// you build a new tech icon; tags with no entry just render text-only.
const tagIcons = {
  LARAVEL: IconLaravel,
  LIVEWIRE: IconLivewire,
  SUPABASE: IconSupabase,
  TAILWINDCSS: IconTailwindCSS,
  MYSQL: IconMySQL,
  JAVASCRIPT: IconJavaScript,
  BOOTSTRAP: IconBootstrap,
  FLUTTER: IconFlutter,
  DART: IconDart,
  CODEIGNITER_4: IconCodeIgniter,
  PHP: IconPHP,
};
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6">
    <!-- Image -->
    <div
      class="w-full md:w-64 h-40 shrink-0 border transition-all duration-200 overflow-hidden relative group"
      :class="[
        project.link
          ? 'border-border'
          : 'border-border hover:border-text-secondary hover:bg-surface',
      ]"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover"
      />

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute inset-0 flex items-center justify-center gap-2 bg-bg/90 backdrop-blur-sm font-mono text-xs text-text-primary uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
      >
        view_project <ArrowUpRight :size="14" />
      </a>

      <div
        v-else
        class="absolute inset-0 flex items-center justify-center gap-2 bg-bg/90 backdrop-blur-sm font-mono text-xs text-text-secondary uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out text-center px-4"
      >
        private_project — no_public_link
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1">
      <div class="flex items-center gap-3 mb-3">
        <span class="font-mono text-xs text-text-secondary"
          >[{{ project.index }}]</span
        >
        <h3 class="font-mono text-sm font-semibold text-text-primary">
          {{ project.title }}
        </h3>
        <span
          v-if="project.role === 'maintainer' || project.role === 'contributor'"
          class="font-mono text-[10px] uppercase border border-border px-2 py-0.5 text-text-secondary ms-auto"
        >
          {{ project.role }}
        </span>
      </div>

      <p class="font-sans text-sm text-text-secondary leading-relaxed mb-4">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <Tag
          v-for="tag in project.tags"
          :key="tag"
          :title="tag"
          :icon="tagIcons[tag] ?? null"
        />
      </div>
    </div>
  </div>
</template>
