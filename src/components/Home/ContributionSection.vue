<script setup>
import { ref, watchEffect } from 'vue'

const username = 'muhdaniboyrendi'
const contributionGraphUrl = ref('')
const streakStatsUrl = ref('')
const topLanguagesUrl = ref('')

watchEffect(() => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    contributionGraphUrl.value = `https://github-readme-stats.vercel.app/api?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false`
    streakStatsUrl.value = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=false`
    topLanguagesUrl.value = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact`
  } else {
    contributionGraphUrl.value = `https://github-readme-stats.vercel.app/api?username=${username}&theme=light&hide_border=false&include_all_commits=false&count_private=false`
    streakStatsUrl.value = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=light&hide_border=false`
    topLanguagesUrl.value = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=light&hide_border=false&include_all_commits=false&count_private=false&layout=compact`
  }
})
</script>


<template>
  <section class="py-28 px-4 max-w-screen-xl mx-auto">
    <h2 class="font-bold text-4xl text-sky-500 mb-10">GitHub Stats</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="w-full overflow-hidden mb-5 shadow-md rounded-2xl h-fit hover:border transition">
        <img 
          :src="contributionGraphUrl" 
          alt="GitHub Contributions Graph" class="w-full scale-105"
        >
      </div>
      <div class="w-full overflow-hidden mb-5 shadow-md rounded-2xl h-fit hover:border transition">
        <img 
          :src="streakStatsUrl" 
          alt="GitHub Streak Stats" class="w-full scale-105"
        >
      </div>
      <div class="w-full overflow-hidden mb-5 shadow-md rounded-2xl h-fit hover:border transition">
        <img 
          :src="topLanguagesUrl" 
          alt="Top Languages" class="w-full scale-105"
        >
      </div>
    </div>
  </section>
</template>