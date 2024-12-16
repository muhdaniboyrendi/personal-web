<script setup>
const skillDatas = [
  {
    title: 'Languages',
    data: ['HTML', 'CSS', 'JavaScript', 'PHP']
  },
  {
    title: 'Frontend',
    data: ['Nuxt', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Livewire']
  },
  {
    title: 'Backend',
    data: ['Laravel', 'MySQL', 'SQLite']
  },
]
</script>

<template>
  <div class="w-full" v-for="skillData in skillDatas" :key="index">
    <div class="p-5 rounded-[2rem] border border-slate-300 dark:border-slate-700 hover:shadow-lg hover:shadow-slate-400 dark:hover:shadow-slate-700 transition duration-500">

      <div>
        <h3 class="text-slate-700 dark:text-slate-300 text-xl font-bold">{{ skillData.title }}</h3>
      </div>

      <div class="mt-5 text-slate-700 dark:text-slate-300">
        <ul>
          <li v-for="skillDetail in skillData.data" :key="index">- {{ skillDetail }}</li>
        </ul>
      </div>

    </div>
  </div>
</template>