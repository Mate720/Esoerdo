<template>

  <section class="w-full h-fit items-center justify-center">
    <div class="flex items-center flex-col lg:flex-row gap-4">
      <div class="flex flex-col gap-3 lg:gap-6 w-full lg:w-[60%]">
        <h1
          class="text-wrap  uppercase font-bold text-[7vw] lg:text-[6vw] leading-none bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
          Explore The Amazing Nature Of Rainforests
        </h1>
        <div class="flex flex-row gap-4">
          <NuxtLink
            class="hover:bg-accent duration-300 uppercase font-caesar text-[3.2vw] lg:text-[2vw] rounded bg-primary text-[#09100b] px-2 py-1"
            to="/animals">Animals</NuxtLink>
          <NuxtLink
            class="hover:bg-accent duration-300 uppercase font-caesar text-[3.2vw] lg:text-[2vw] rounded bg-primary text-[#09100b] px-2 py-1"
            to="/plants">Plants</NuxtLink>
        </div>
      </div>
      <div class="w-full flex items-center justify-center lg:w-[40%]">
        <Globe />
      </div>
    </div>
  </section>

  <section id="about" class="relative w-full min-h-screen">
    <div class=" flex flex-col gap-12">
      <NuxtImg
        class="absolute -left-[2rem] w-[6rem] lg:w-[12rem] rotate-180 -z-10 brightness-50 animate-[float-leaf_10s_ease-in-out_infinite]"
        src="/leaf.svg" alt="Leaf" />
      <div class="flex justify-between items-center">
        <h2 class="text-center text-wrap uppercase font-bold text-[7vw] lg:text-[6vw] leading-none bg-gradient-to-r from-[#b5b5b5] to-white
        bg-clip-text text-transparent">
          <span class="text-secondary">Together</span> for a <span class="text-primary">Greener</span> Tomorrow
        </h2>
        <h2>
          <NuxtImg
            class="absolute -right-[2rem] w-[6rem] lg:w-[12rem] -z-10 brightness-50 animate-[float-leaf_10s_ease-in-out_infinite]"
            src="/leaf.svg" alt="Leaf" />
        </h2>
      </div>
      <TimeStamps />
    </div>
  </section>

</template>

<style>
@keyframes float-leaf {
  0% {
    transform: rotate(0deg);
  }

  12% {
    transform: rotate(-8deg);
  }

  28% {
    transform: rotate(15deg);
  }

  45% {
    transform: rotate(-18deg);
  }

  63% {
    transform: rotate(12deg);
  }

  78% {
    transform: rotate(-10deg);
  }

  92% {
    transform: rotate(6deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
