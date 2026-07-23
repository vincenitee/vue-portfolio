<script setup>
import { ArrowUpRight, Mail, MapPin } from "@lucide/vue";
import SectionHeader from "./SectionHeader.vue";

const email = "vincentbolinget@gmail.com";
</script>

<template>
  <section id="contact" class="py-8 sm:py-16 max-w-4xl mx-auto">
    <SectionHeader
      title="CONTACT_TERMINAL"
      description="Reach out for freelance work, collaborations, or just to talk shop."
    />

    <div class="border border-border p-8 sm:p-10">
      <p class="font-mono text-sm text-text-primary mb-4">initiate_session</p>

      <p
        class="font-sans text-sm text-text-secondary leading-relaxed max-w-md mb-8"
      >
        Open to freelance opportunities, junior developer roles, and
        collaborations on interesting problems.
      </p>

      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div class="flex flex-col gap-3 font-mono text-sm">
          <a
            :href="`mailto:${email}`"
            class="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary underline underline-offset-4"
          >
            <Mail :size="14" />
            {{ email }}
          </a>
          <p class="inline-flex items-center gap-2 text-text-secondary">
            <MapPin :size="14" />
            Baguio City, PH
          </p>
        </div>

        <div class="font-mono text-[10px] text-text-secondary leading-relaxed">
          > system_ready<br />
          > awaiting_input...<br />
          > logging_session_start:
        </div>
      </div>
    </div>
  </section>
</template>
