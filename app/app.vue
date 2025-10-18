<script setup>
useHead({
  bodyAttrs: { class: "dark pt-[8rem]" }
});
</script>

<template>
  <Navbar />
  <main
    class="px-6 md:px-12 lg:px-32 flex flex-col gap-[5rem] sm:gap-[7rem] md:gap-[9rem] xl:gap-[12rem] lg:gap-[15rem]">
    <NuxtPage />
  </main>
  <footer class="w-full bg-blue-500">
    <div>
      <p>Minden jog fenntartva</p>
    </div>
  </footer>
</template>
