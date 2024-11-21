<script setup>
const profile = '/img/profile.png'
</script>

<template>
  <section class="bg-white dark:bg-slate-900">
    <div class="flex flex-wrap pb-40 pt-20 px-4 mx-auto max-w-screen-xl lg:pb-28 lg:pt-32">

      <div class="lg:w-1/2 pt-20">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-slate-100">Hi there,</h1>
        <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-sky-500 md:text-5xl lg:text-6xl">I'm Muhdani Boryendi Erlan Azhari</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Web Developer</p>
      </div>

      <div class=" w-full lg:w-1/2 flex justify-center">
        <div class="relative bg-slate-200 mt-10 lg:mt-0 lg:right-0 rounded-full border-2 border-sky-500 shadow-2xl shadow-sky-400 overflow-hidden">
          <img :src="profile" alt="My Photo" class="relative z-10 max-w-full ml-4 mx-auto h-[400px]">
        </div>
      </div>

    </div>
  </section>
</template>