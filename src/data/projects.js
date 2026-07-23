import ipmsAdmin from "../assets/projects/ipms_admin.png";
import agapeconnect from "../assets/projects/agapeconnect.png";
import digitalPds from "../assets/projects/digital_pds.png";
import classhub from "../assets/projects/classhub.png";
import dispatchSystem from "../assets/projects/vehicle_dispatch_system.png";

const projects = [
  {
    id: 1,
    index: "01",
    title: "IPMS_ADMIN",
    image: ipmsAdmin,
    role: "built",
    link: null,
    description:
      "Mobile app for field inspectors, web dashboard for administrators. Centralizes inspection scheduling, maintenance reporting, and asset tracking into one accurate record system.",
    tags: [
      "CODEIGNITER_4",
      "MYSQL",
      "BOOTSTRAP_CSS",
      "JAVASCRIPT",
      "DART",
      "FLUTTER",
    ],
  },
  {
    id: 2,
    index: "02",
    title: "AGAPECONNECT",
    link: "https://www.agapeconnect.ph/",
    image: agapeconnect,
    role: "contributor",
    description:
      "Multi-modal transportation platform (ride-hailing, carpooling, freight) built with Flutter and Supabase. Contributed database schema and architecture documentation as part of the development team.",
    tags: ["FLUTTER", "SUPABASE"],
  },
  {
    id: 3,
    index: "03",
    title: "DIGITAL_PDS",
    role: "built",
    image: digitalPds,
    link: null,
    description:
      "A digital Personal Data Sheet system for HR, replacing manual paper-based entry and file storage with a centralized digital workflow.",
    tags: ["LARAVEL", "LIVEWIRE", "MYSQL", "JAVASCRIPT", "BOOTSTRAP"],
  },
  {
    id: 4,
    index: "04",
    title: "CLASSHUB",
    role: "built",
    image: classhub,
    link: null,
    description:
      "A grade and student management portal for secondary-level learners. Handles grade recording, student records, and class-level administration in one centralized system.",
    tags: ["PHP", "JAVASCRIPT", "TAILWINDCSS"],
  },
  {
    id: 5,
    index: "05",
    title: "VEHICLE_DISPATCH_SYSTEM",
    role: "maintainer",
    image: dispatchSystem,
    link: null,
    description:
      "An internal vehicle dispatch system tracking driver availability and employee official travel within the organization. Maintaining the system with ongoing feature additions and bug fixes.",
    tags: ["LARAVEL", "MYSQL", "JQUERY", "BOOTSTRAP_CSS", "JAVASCRIPT"],
  },
];

export default projects;
