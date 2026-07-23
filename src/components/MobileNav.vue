<script setup>
import { ref } from "vue";
import { Menu, X } from "@lucide/vue";
import { useNav } from "../composables/useNav";
import ThemeToggle from "./ThemeToggle.vue";

const { navLinks, active, setActive } = useNav();
const open = ref(false);

function selectLink(id) {
  setActive(id);
  open.value = false;
}
</script>

<template>
  <header
    class="md:hidden sticky top-0 z-40 h-16 flex items-center justify-between border-b border-border bg-bg px-6"
  >
    <p class="font-mono text-xs tracking-wider">VCNT_DEV</p>
    <button type="button" @click="open = !open" class="text-text-primary">
      <Menu v-if="!open" :size="20" />
      <X v-else :size="20" />
    </button>
  </header>

  <div
    v-if="open"
    class="md:hidden fixed top-16 inset-x-0 bottom-0 z-30 bg-bg px-6 py-8 flex flex-col justify-between overflow-y-auto"
  >
    <nav class="flex flex-col gap-6">
      <a
        v-for="link in navLinks"
        :key="link.id"
        :href="`#${link.id}`"
        @click="selectLink(link.id)"
        class="font-mono text-lg"
        :class="
          active === link.id
            ? 'text-text-primary font-medium'
            : 'text-text-secondary hover:text-text-primary'
        "
      >
        {{ link.label }}
      </a>
    </nav>

    <ThemeToggle />
  </div>
</template>

<style scoped></style>
