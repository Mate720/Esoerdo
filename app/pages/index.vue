<template>
  <section>
    <h1>Főoldal</h1>
    <div class="flex text-5xl">
      <span class="font-bold bg-[#eff6f1] text-[#0d120e] px-4 py-1 rounded-l w-fit">Explore</span>
      <RotatingText
        :texts="['Wildlife', 'Beasts', 'Nature', 'Ecosystem']"
        mainClassName="bg-primary text-black px-4 py-1 font-caesar rounded-r w-fit"
        staggerFrom="last"
        :initial="{ y: '100%' }"
        :animate="{ y: 0 }"
        :exit="{ y: '-120%' }"
        :staggerDuration="0.025"
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        :transition="{
          type: 'spring',
          damping: 20,
          stiffness: 400
        }"
        :rotationInterval="3000" />
    </div>
  </section>
</template>
