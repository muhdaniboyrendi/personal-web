<script setup>
import { ref } from 'vue'
import FormInput from './FormInput.vue';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyzH7zYjHXVDsB0DjIncPO3smukF9iBAHfGR6dmMC0DK8rNrUMrX18XAuskm-YkFF9S2g/exec'

const contactForm = ref(null)
const isLoading = ref(false)
const showAlert = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true

    const formData = new FormData(contactForm.value)
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    contactForm.value.reset()

    showAlert.value = true

    console.log('Success!', response)
  } catch (error) {
    console.error('Error!', error.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" ref="contactForm" class="w-full p-5 rounded-2xl border border-slate-700">

    <div class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-800 rounded-lg bg-green-50 dark:bg-black dark:text-green-400" :class="{ 'hidden': !showAlert }" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        Your message has been sent successfully.
      </div>
    </div>

    <h3 class="text-2xl mb-5 text-black dark:text-slate-100">Contact me</h3>
    <FormInput title="Name" type="text" name="nama" placeholder="Enter your name" />
    <FormInput title="Email" type="email" name="email" placeholder="Enter your email" />
    <div class="mb-5">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
      <textarea id="message" name="pesan" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-slate-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..."></textarea>
    </div>

    <button type="submit" class="w-full py-2 px-5 rounded-xl text-sky-500 border-2 border-sky-500 transition hover:bg-sky-500 hover:text-white dark:hover:text-black hover:shadow-md hover:shadow-sky-500" :class="{ 'hidden': isLoading }">Send</button>

    <button type="submit" class="w-full py-2 px-5 rounded-xl text-sky-500 border-2 border-sky-500 transition hover:bg-sky-500 hover:text-white dark:hover:text-black hover:shadow-md hover:shadow-sky-500" :class="{ 'hidden': !isLoading }">
      <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
      </svg>
      Sending...
    </button>
  </form>
</template>