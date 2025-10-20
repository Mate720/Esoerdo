<script setup lang="ts">

const currentYear = new Date().getFullYear();

</script>

<template>
  <footer class="flex flex-col px-6 md:px-12 lg:px-32 mt-12">
    <div class="backgroundGradient relative overflow-hidden px-16 rounded-t-2xl bg-black">
      <div
        class="absolute top-0 left-0 w-full h-[0.1rem] rounded-t-2xl bg-gradient-to-r from-primary via-[#0d120e] to-primary">
      </div>
      <div class="flex justify-between">
        <div class=" flex flex-col gap-2 w-full py-4">
          <h3 class="noSelect font-caesar uppercase font-bold text-2xl lg:text-3xl">Pantherium</h3>
          <p class="text-white/80">Join us in saving rainforests.<br>Together, for a thriving planet.</p>
        </div>
      </div>
      <div class="flex justify-between">
        <p class="flex items-end py-4 gap-10 w-1/2 font-bold">
          &copy; {{ currentYear }} Pantherium. All rights reserved.
        </p>
        <div class="flex justify-end items-end py-4 gap-10 w-1/2 font-bold">
          <NuxtLink to="/">Privacy Policy</NuxtLink>
          <NuxtLink to="/">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.backgroundGradient {
  background: #000000;
  background: radial-gradient(circle, #000000 90%, #44d36f 100%);
}
</style>