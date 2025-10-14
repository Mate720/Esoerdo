<script setup>
useHead({
  bodyAttrs: {
    class: "dark pt-32"
  }
});
</script>

<template>
  <Navbar />
  <main class="px-32">
    <NuxtPage />
  </main>
  <Footer />
</template>
