<script setup>
const formData = defineProps(['title', 'type', 'name', 'placeholder'])
</script>

<template>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-text_primary_light dark:text-text_primary_dark">{{ formData.title }}</label>
    <input :type="formData.type" :name="name" class="bg-secondary_light dark:bg-secondary_dark border border-black text-text_primary_light text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4 dark:border-slate-700 dark:placeholder-gray-400 dark:text-text_primary_dark dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholder" required />
  </div>
</template>