<script setup>
import ContactForm from './ContactForm.vue';
import Location from './Location.vue';


</script>

<template>
  <section class="pt-20 py-28">
    <div class="flex flex-wrap py-4 mx-auto max-w-screen-xl lg:py-4">

      <div class="w-full mb-20">
        <h2 class="font-bold text-4xl text-black dark:text-white">Contact</h2>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <Location />
      </div>

    </div>
  </section>
</template>