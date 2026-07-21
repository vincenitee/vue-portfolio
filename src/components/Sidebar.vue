<script setup>
import { ref } from "vue";

const navLinks = ["About", "Projects", "Stacks", "Contact"];
const active = ref("About");
</script>

<template>
  <aside
    class="w-56 shrink-0 border-r border-border px-6 py-8 hidden md:flex md:flex-col justify-between h-screen sticky top-0"
  >
    <div>
      <p class="font-mono text-xs tracking-wider mb-8">VCNT_DEV</p>
      <nav class="flex flex-col gap-3">
        <a
          href="#"
          v-for="link in navLinks"
          :key="link"
          class="font-mono text-sm"
          :class="
            active === link
              ? 'text-text-primary font-medium border-b border-text-primary w-fit'
              : 'text-text-secondary hover:text-text-primary'
          "
        >
          {{ link }}
        </a>
      </nav>
    </div>

    
  </aside>
</template>

<style scoped></style>
