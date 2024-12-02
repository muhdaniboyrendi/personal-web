<script setup>
import SkillCard from './SkillCard.vue'
</script>

<template>
  <section class="py-20">

      <div class="w-full mb-10">
        <h2 class="font-bold text-3xl text-black dark:text-white">Skills</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard />
      </div>

  </section>
</template>