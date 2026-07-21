<script setup>
import { ArrowUpRight } from "@lucide/vue";
import profileImg from "../assets/profile.png";

const links = [
  { label: "github", href: "https://github.com/vincenitee" },
  { label: "linkedin", href: "https://github.com/vincenitee" },
  { label: "email", href: "mailto:vincentbolinget@gmail.com" },
];
</script>

<template>
  <section id="about" class="py-8 sm:py-16 max-w-4xl mx-auto">
    <div class="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
      <img
        :src="profileImg"
        alt="Vincent Bolinget"
        class="w-full h-auto sm:w-1/2 md:w-48 md:h-48 lg:w-54 lg:h-auto self-center aspect-square shrink-0 object-cover"
      />

      <div>
        <h1 class="font-mono text-xl text-text-primary mb-6">
          VINCENT_BOLINGET // ASPIRING_FULLSTACK_DEVELOPER
        </h1>

        <p
          class="font-sans text-sm text-text-secondary leading-relaxed max-w-xl mb-4"
        >
          Based in the Philippines, I build web and mobile applications with
          <span class="text-text-primary cursor-pointer">Laravel</span>,
          <span class="text-text-primary cursor-pointer">Vue.js</span>, and
          <span class="text-text-primary cursor-pointer">Flutter</span>. I
          currently work on government systems by day and freelance projects on
          the side.
        </p>

        <p
          class="font-sans text-sm text-text-secondary leading-relaxed max-w-xl mb-12"
        >
          I like turning rough, half-formed ideas into things people can
          actually use.
        </p>

        <div class="flex items-center gap-2 font-mono text-xs">
          <a
            v-for="(link, i) in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-secondary hover:text-text-primary uppercase inline-flex place-items-center"
          >
            {{ link.label }} <ArrowUpRight :size="16" class="ms-2" />
            <span v-if="i < links.length - 1" class="text-border mx-2">/</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
