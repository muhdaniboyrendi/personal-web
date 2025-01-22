<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue'

const username = 'muhdaniboyrendi'
const contributionGraphUrl = ref('')
const streakStatsUrl = ref('')
const topLanguagesUrl = ref('')

const fetch = () => {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    contributionGraphUrl.value = `https://github-readme-stats.vercel.app/api?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false`
    streakStatsUrl.value = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=false`
    topLanguagesUrl.value = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact`
  } else {
    contributionGraphUrl.value = `https://github-readme-stats.vercel.app/api?username=${username}&theme=light&hide_border=false&include_all_commits=false&count_private=false`
    streakStatsUrl.value = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=light&hide_border=false`
    topLanguagesUrl.value = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=light&hide_border=false&include_all_commits=false&count_private=false&layout=compact`
  }
}

onMounted(() => {
  fetch()
})
</script>


<template>
  <section class="pt-20 px-4 max-w-screen-xl mx-auto">
    <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl text-text_primary_light dark:text-text_primary_dark mb-10">GitHub Stats</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="w-full overflow-hidden rounded-[2rem] h-fit border border-border_light dark:border-border_dark transition">
        <img 
          :src="contributionGraphUrl" 
          alt="GitHub Contributions Graph" class="w-full scale-[103%]"
        >
      </div>
      <div class="w-full overflow-hidden rounded-[2rem] h-fit border border-border_light dark:border-border_dark transition">
        <img 
          :src="streakStatsUrl" 
          alt="GitHub Streak Stats" class="w-full scale-[103%]"
        >
      </div>
      <div class="w-full overflow-hidden rounded-[2rem] h-fit border border-border_light dark:border-border_dark transition">
        <img 
          :src="topLanguagesUrl" 
          alt="Top Languages" class="w-full scale-[103%]"
        >
      </div>
    </div>
  </section>
</template>