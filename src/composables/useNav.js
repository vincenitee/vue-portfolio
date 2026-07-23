import { ref } from "vue";

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Stacks", id: "tech-stack" },
  { label: "Contact", id: "contact" },
];

const active = ref("about");

export function useNav() {
  function setActive(id) {
    active.value = id;
  }

  return { navLinks, active, setActive };
}
