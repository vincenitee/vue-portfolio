import IconBootstrap from "../assets/icons/IconBootstrap.vue";
import IconCodeIgniter from "../assets/icons/IconCodeIgniter.vue";
import IconComposer from "../assets/icons/IconComposer.vue";
import IconDart from "../assets/icons/IconDart.vue";
import IconFlutter from "../assets/icons/IconFlutter.vue";
import IconGit from "../assets/icons/IconGit.vue";
import IconGithub from "../assets/icons/IconGithub.vue";
import IconJavaScript from "../assets/icons/IconJavaScript.vue";
import IconLaravel from "../assets/icons/IconLaravel.vue";
import IconLivewire from "../assets/icons/IconLivewire.vue";
import IconMySQL from "../assets/icons/IconMySQL.vue";
import IconPHP from "../assets/icons/IconPHP.vue";
import IconPostman from "../assets/icons/IconPostman.vue";
import IconSupabase from "../assets/icons/IconSupabase.vue";
import IconTailwindCSS from "../assets/icons/IconTailwindCSS.vue";
import IconVite from "../assets/icons/IconVite.vue";

const categories = [
  {
    label: "FRONTEND",
    items: [
      { name: "LIVEWIRE", icon: IconLivewire },
      { name: "BOOTSTRAP", icon: IconBootstrap },
      { name: "TAILWINDCSS", icon: IconTailwindCSS },
      { name: "JAVASCRIPT", icon: IconJavaScript },
    ],
  },
  {
    label: "BACKEND",
    items: [
      { name: "PHP", icon: IconPHP },
      { name: "LARAVEL", icon: IconLaravel },
      { name: "CODEIGNITER_4", icon: IconCodeIgniter },
      { name: "MYSQL", icon: IconMySQL },
      { name: "SUPABASE", icon: IconSupabase },
      { name: "REST", icon: null },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { name: "POSTMAN", icon: IconPostman },
      { name: "GIT", icon: IconGit },
      { name: "GITHUB", icon: IconGithub },
      { name: "VS_CODE", icon: null },
      { name: "VITE", icon: IconVite },
      { name: "COMPOSER", icon: IconComposer },
    ],
  },
  {
    label: "MOBILE",
    items: [
      { name: "DART", icon: IconDart },
      { name: "FLUTTER", icon: IconFlutter },
    ],
  },
];

export default categories;