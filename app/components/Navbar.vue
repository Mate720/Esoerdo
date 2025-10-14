<template>
  <header class="fixed top-0 left-0 w-full">
    <nav class="px-32 py-3 flex items-center justify-between w-full">
      <NuxtLink to="/" class="flex items-center gap-2">
        <NuxtImg class="noSelect w-[4.7rem]" src="/logo.png" alt="Logo" />
        <span class="noSelect font-caesar uppercase font-bold text-3xl" to="/">Pantherium</span>
      </NuxtLink>
      <div class="flex items-center p-2 w-fit gap-4 font-bold">
        <NuxtLink class="hover:text-accent duration-300" to="/">Home</NuxtLink>
        <NuxtLink class="hover:text-accent duration-300" to="/about">About</NuxtLink>
        <NuxtLink class="hover:text-accent duration-300" to="/quiz">Quiz</NuxtLink>
        <NuxtLink class="hover:text-accent duration-300" to="/">Animals | Plants</NuxtLink>
        <NuxtLink class="hover:bg-accent duration-300 uppercase font-caesar text-xl rounded bg-primary text-[#09100b] px-2 py-1" to="/">Intrested</NuxtLink>
      </div>
    </nav>
  </header>
</template>
