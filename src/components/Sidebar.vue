<script setup>
import ThemeToggle from "./ThemeToggle.vue";
import { useNav } from "../composables/useNav";

const { navLinks, active, setActive } = useNav();
</script>

<template>
  <aside
    class="w-56 shrink-0 border-r border-border px-6 py-8 hidden md:flex md:flex-col justify-between h-screen sticky top-0"
  >
    <div>
      <p class="font-mono text-xs tracking-wider mb-8">VCNT_DEV</p>
      <nav class="flex flex-col gap-3">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          @click="setActive(link.id)"
          class="font-mono text-sm"
          :class="
            active === link.id
              ? 'text-text-primary font-medium border-b border-text-primary w-fit'
              : 'text-text-secondary hover:text-text-primary'
          "
        >
          {{ link.label }}
        </a>
      </nav>
    </div>

    <ThemeToggle />
  </aside>
</template>

<style scoped></style>
