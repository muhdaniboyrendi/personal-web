<script setup>
import HeroName from "./HeroSection/HeroName.vue";
import Social from "./HeroSection/Social.vue";
import ProfilePhoto from "./HeroSection/ProfilePhoto.vue";
</script>

<template>
  <section
    class="flex flex-wrap px-4 mt-20 mx-auto max-w-screen-xl items-center lg:py-10"
  >
    <div class="w-full lg:w-2/3 py-10 text-center lg:text-start">
      <HeroName />
      <Social />
    </div>

    <div class="w-full lg:w-1/3 flex justify-center py-10">
      <ProfilePhoto />
    </div>
  </section>
</template>

<style scoped></style>
