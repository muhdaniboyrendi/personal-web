<script setup>
import { ref, onMounted } from 'vue'

const username = 'muhdaniboyrendi'
const contributionGraphUrl = ref('')
const streakStatsUrl = ref('')
const topLanguagesUrl = ref('')

onMounted(() => {
  contributionGraphUrl.value = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`
  streakStatsUrl.value = `https://github-readme-streak-stats.herokuapp.com/?user=${username}`
  topLanguagesUrl.value = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}`
})
</script>


<template>
  <section class="py-28 px-4 max-w-screen-xl mx-auto">
    <h2 class="font-bold text-4xl text-sky-500 mb-10">GitHub Stats</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img 
          :src="contributionGraphUrl" 
          alt="GitHub Contributions Graph" 
          class="w-full rounded-lg shadow-md mb-10"
        >
        <img 
          :src="streakStatsUrl" 
          alt="GitHub Streak Stats" 
          class="w-full rounded-lg shadow-md"
        >
      </div>
      <img 
      :src="topLanguagesUrl" 
      alt="Top Languages" 
      class="w-full rounded-lg shadow-md"
    >
    </div>
  </section>
</template>