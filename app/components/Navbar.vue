<script setup lang="ts">
const route = useRoute();
const snakeMenuEnabled = useState("snakeMenuEnabled", () => false);

// biome-ignore lint: false
const toggleMenu = () => {
	snakeMenuEnabled.value = !snakeMenuEnabled.value;
};

watch(
	() => route.fullPath,
	() => {
		snakeMenuEnabled.value = false;
	},
);
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-10">
    <nav
      class="bg-[rgba(13,18,14,0.8)] backdrop-blur-lg px-6 md:px-12 lg:px-32 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg class="noSelect w-[4.7rem]" src="/logoNoFluffy.png" alt="Logo" />
          <span class="noSelect font-caesar uppercase font-bold text-3xl">Pantherium</span>
        </NuxtLink>
        <span @click="toggleMenu" class="lg:hidden cursor-pointer">
          <NuxtImg class="cursor-pointer w-[3.5rem]" :src="snakeMenuEnabled ? '/snakeClose.svg' : '/snakeOpen.svg'"
            alt="Snake Hamburger Menu" />
        </span>
      </div>
      <div :class="snakeMenuEnabled ? 'flex' : 'hidden lg:flex'"
        class="flex-col lg:flex-row text-xl lg:text-md w-full lg:w-fit items-center p-2 gap-4 font-bold">
        <NuxtLink class="hover:text-accent duration-300" to="/">Home</NuxtLink>
        <NuxtLink class="hover:text-accent duration-300" to="/about">About</NuxtLink>
        <NuxtLink class="hover:text-accent duration-300" to="/quiz">Quiz</NuxtLink>
        <NuxtLink class="hover:text-accent duration-300" to="/wildlife">Animals | Plants</NuxtLink>
        <NuxtLink
          class="hover:bg-accent duration-300 uppercase font-caesar text-2xl lg:text-xl rounded bg-primary text-[#09100b] px-2 py-1"
          to="/">Intrested</NuxtLink>
      </div>
    </nav>
  </header>
</template>
