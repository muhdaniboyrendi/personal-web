<script setup>
const formData = defineProps(['title', 'type', 'name', 'placeholder'])
</script>

<template>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ formData.title }}</label>
    <input :type="formData.type" :name="name"d="email" class="bg-white border border-black text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-slate-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder" required />
  </div>
</template>