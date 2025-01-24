import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    selectedProject: null,
    projects: [
      {
        id: 1,
        title: "Students Management System",
        description:
          "Web aplication to manage students, teachers, staff, and presency using QR Code (under development).",
        img: "projects/students-management.png",
        tech: ["Vue", "Tailwind CSS", "Laravel"],
        source: "https://github.com/muhdaniboyrendi/student-management",
        link: "https://student-management-steel.vercel.app/",
      },
      {
        id: 2,
        title: "EADev Invitation",
        description:
          "Website for ordering and managing wab based wedding invitation (under development).",
        img: "projects/eadev-invitation.png",
        tech: ["Nuxt", "Tailwind CSS"],
        source: "https://github.com/muhdaniboyrendi/eadev-invitation",
        link: "https://eadev-invitation.vercel.app/",
      },
      {
        id: 3,
        title: "Wedding Invitation",
        description: "Website for wedding invitation.",
        img: "projects/wedding-invitation.png",
        tech: ["Bootstrap"],
        source: "https://github.com/muhdaniboyrendi/wedding-invitation",
        link: "https://muhdaniboyrendi.github.io/wedding-invitation/",
      },
      {
        id: 4,
        title: "Grasius",
        description:
          "Application for student management and attendance system with QR Code.",
        img: "projects/grasius.PNG",
        tech: ["Laravel", "Livewire", "Bootstrap"],
        source: "https://github.com/muhdaniboyrendi/jombang-kota",
        link: "#",
      },
      {
        id: 5,
        title: "Online Shop",
        description:
          "Simple online shop application with admin and customer pages.",
        img: "projects/online-shop.PNG",
        tech: ["Laravel", "Bootstrap"],
        source: "https://github.com/muhdaniboyrendi/e-commerce",
        link: "#",
      },
      {
        id: 6,
        title: "Note App",
        description:
          "Simple Notes App with features add, delete, archive, and search notes.",
        img: "projects/notes.PNG",
        tech: ["React JS", "Bootstrap"],
        source: "https://github.com/muhdaniboyrendi/personal-notes",
        link: "https://personal-notes-tawny-five.vercel.app/",
      },
      {
        id: 7,
        title: "Todo List App",
        description:
          "Simple Todo List App with featues add, delete, and done todo.",
        img: "projects/todo-list.PNG",
        tech: ["Vue JS", "Bootstrap"],
        source: "#",
        link: "#",
      },
    ],
  }),
  actions: {
    setSelectedProject(project) {
      this.selectedProject = project;
    },
    getProjectById(id) {
      return this.projects.find((p) => p.id === parseInt(id));
    },
  },
});
