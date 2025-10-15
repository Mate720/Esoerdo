<script setup>
useHead({
  bodyAttrs: {
    class: "dark pt-32"
  }
});
</script>

<template>
  <Navbar />
  <main class="px-6 md:px-12 lg:px-32">
    <NuxtPage />
  </main>
  <Footer />
</template>
