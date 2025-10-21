<script setup>
useHead({
  bodyAttrs: { class: "dark" }
});
</script>

<template>
  <div class="flex flex-col min-h-screen pt-[8rem]">
    <Navbar />
    <main class="flex-1 px-6 md:px-12 lg:px-32">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
