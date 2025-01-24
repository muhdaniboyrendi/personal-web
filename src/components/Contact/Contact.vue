<script setup>
import ContactForm from './ContactForm.vue';

</script>

<template>
  <section class="pt-20">
    <div class="flex flex-wrap py-4 mx-auto max-w-screen-xl lg:py-4">

      <div class="w-full mb-10">
        <h2 class="font-bold text-2xl md:text-3xl lg:text-4xl text-text_primary_light dark:text-text_primary_dark">Contact</h2>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
      </div>

    </div>
  </section>
</template>