<script setup>
import { Moon, Sun } from "@lucide/vue";
import { useTheme } from "../composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    class="font-mono text-xs text-text-secondary hover:text-text-primary inline-flex items-center gap-2 w-fit"
  >
    <Sun v-if="theme === 'dark'" :size="14" />
    <Moon v-else :size="14" />
    {{ theme === "dark" ? "LIGHT_MODE" : "DARK_MODE" }}
  </button>
</template>

<style scoped></style>
