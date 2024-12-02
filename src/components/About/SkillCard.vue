<script setup>
const skillDatas = [
  {
    title: 'Languages',
    data: ['HTML', 'CSS', 'JavaScript', 'PHP']
  },
  {
    title: 'Frontend',
    data: ['Vue JS', 'Tailwind CSS', 'Bootstrap', 'Livewire']
  },
  {
    title: 'Backend',
    data: ['Laravel', 'MySQL', 'SQLite']
  },
]
</script>

<template>
  <div class="w-full" v-for="skillData in skillDatas" :key="index">
    <div class="p-4 rounded-2xl border border-slate-300 dark:border-slate-700">

      <div>
        <h3 class="text-slate-700 dark:text-slate-300 text-2xl font-bold">{{ skillData.title }}</h3>
      </div>

      <div class="mt-5 text-slate-700 dark:text-slate-300">
        <ul>
          <li v-for="skillDetail in skillData.data" :key="index">{{ skillDetail }}</li>
        </ul>
      </div>

    </div>
  </div>
</template>