<script setup>
import SkillCard from "./SkillCard.vue";

const skillDatas = [
  {
    title: "Languages",
    data: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Frontend",
    data: ["Nuxt", "Vue.js", "Tailwind CSS", "Bootstrap", "Livewire"],
  },
  {
    title: "Backend",
    data: ["Laravel", "MySQL", "SQLite"],
  },
];
</script>

<template>
  <section class="pt-20 max-w-screen-xl mx-auto">
    <div class="w-full mb-5">
      <h2
        class="font-bold text-xl md:text-2xl lg:text-3xl text-text_primary_light dark:text-text_primary_dark"
      >
        Skills
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="(skillData, index) in skillDatas" :key="index">
        <SkillCard :title="skillData.title" :data="skillData.data" />
      </div>
    </div>
  </section>
</template>
