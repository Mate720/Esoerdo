<template>
  <Masonry :items="items">
    <template v-slot:item="{ item }">
      <div
        :style="{ height: item.height + 'px', overflow: 'hidden', cursor: 'pointer' }"
        @click="window.open(item.url, '_blank')"
      >
        <img :src="item.img" :alt="item.id" />
      </div>
    </template>
  </Masonry>
</template>
<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { ref } from 'vue'

const min = 400;
const max = 800;

const getRandomHeight = () => {
  return Math.floor(Math.random() * (max - min) + min)
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const itemsData = [
  // 🐒 Állatok
  { id: '1', img: 'animals/BigDani.jpg', url: 'https://en.wikipedia.org/wiki/Golden_lion_tamarin', height: getRandomHeight() },
  { id: '2', img: 'animals/gorilla.jpg', url: 'https://en.wikipedia.org/wiki/Gorilla', height: getRandomHeight() },
  { id: '3', img: 'animals/LittleDani.jpg', url: 'https://en.wikipedia.org/wiki/Golden_lion_tamarin', height: getRandomHeight() },
  { id: '4', img: 'animals/parrot.jpg', url: 'https://en.wikipedia.org/wiki/Macaw', height: getRandomHeight() },
  { id: '5', img: 'animals/poisondartfrog.jpg', url: 'https://en.wikipedia.org/wiki/Poison_dart_frog', height: getRandomHeight() },
  { id: '6', img: 'animals/poisondartfrogorange.jpg', url: 'https://en.wikipedia.org/wiki/Poison_dart_frog', height: getRandomHeight() },
  { id: '7', img: 'animals/Rain.jpg', url: 'https://en.wikipedia.org/wiki/Rain', height: getRandomHeight() },
  { id: '8', img: 'animals/Rainforest.jpg', url: 'https://en.wikipedia.org/wiki/Rainforest', height: getRandomHeight() },
  { id: '9', img: 'animals/saltwatercrocodile.jpg', url: 'https://en.wikipedia.org/wiki/Saltwater_crocodile', height: getRandomHeight() },
  { id: '10', img: 'animals/Toucan.jpg', url: 'https://en.wikipedia.org/wiki/Toucan', height: getRandomHeight() },
  { id: '11', img: 'animals/waterfall.jpg', url: 'https://en.wikipedia.org/wiki/Waterfall', height: getRandomHeight() },
  { id: '12', img: 'animals/capybara.webp', url: 'https://en.wikipedia.org/wiki/Capybara', height: getRandomHeight() },
  { id: '13', img: 'animals/asianelephant.jpg', url: 'https://en.wikipedia.org/wiki/Asian_elephant', height: getRandomHeight() },
  { id: '14', img: 'animals/bengaltiger.jpg', url: 'https://en.wikipedia.org/wiki/Bengal_tiger', height: getRandomHeight() },
  { id: '15', img: 'animals/Okapi.jpeg', url: 'https://en.wikipedia.org/wiki/Okapi', height: getRandomHeight() },
  { id: '16', img: 'animals/redpanda.jpg', url: 'https://en.wikipedia.org/wiki/Red_panda', height: getRandomHeight() },
  { id: '17', img: 'animals/spidermonkey.jpeg', url: 'https://en.wikipedia.org/wiki/Spider_monkey', height: getRandomHeight() },
  { id: '18', img: 'animals/orangutan.jpg', url: 'https://en.wikipedia.org/wiki/Orangutan', height: getRandomHeight() },
  { id: '19', img: 'animals/emeraldtreeboa.jpg', url: 'https://en.wikipedia.org/wiki/Emerald_tree_boa', height: getRandomHeight() },
  { id: '20', img: 'plants/bleedingheart.webp', url: 'https://en.wikipedia.org/wiki/Lamprocapnos_spectabilis', height: getRandomHeight() },
  { id: '21', img: 'plants/harpullia.jpg', url: 'https://en.wikipedia.org/wiki/Harpullia', height: getRandomHeight() },
  { id: '22', img: 'plants/Oxera.jpg', url: 'https://en.wikipedia.org/wiki/Oxera_splendida', height: getRandomHeight() },
]
const items = ref(shuffleArray(itemsData))
</script>
