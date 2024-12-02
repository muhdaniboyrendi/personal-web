<script setup>
import FormInput from './FormInput.vue';
</script>

<template>
  <form action="erlanazrdev@gmail.com" method="get" class="w-full p-5 rounded-2xl border border-slate-700">
    <h3 class="text-2xl mb-5 text-black dark:text-slate-100">Contact me</h3>
    <FormInput title="Name" type="text" name="name" placeholder="Enter your name" />
    <FormInput title="Email" type="email" name="email" placeholder="Enter your email" />
    <div class="mb-5">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-slate-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..."></textarea>
    </div>
    <button class="py-2 px-5 rounded-xl text-sky-500 border-2 border-sky-500 transition hover:bg-sky-500 hover:text-white dark:hover:text-black hover:shadow-md hover:shadow-sky-500">Send</button>
  </form>
</template>