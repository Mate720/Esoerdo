<template>
  <div :class="cn(' aspect-[1/1] w-full max-w-[600px]', $props.class)">
    <canvas ref="globeCanvasRef"
      class="size-full opacity-0 transition-opacity duration-1000 ease-in-out [contain:layout_paint_size]"
      @pointerdown="(e) => updatePointerInteraction(e.clientX)" @pointerup="updatePointerInteraction(null)"
      @pointerout="updatePointerInteraction(null)" @mousemove="(e) => updateMovement(e.clientX)"
      @touchmove="(e) => e.touches[0] && updateMovement(e.touches[0].clientX)"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import createGlobe, { type COBEOptions } from "cobe";
import { useSpring } from "vue-use-spring";
import { ref, onMounted, onBeforeUnmount } from "vue";

type GlobeProps = {
  class?: string;
  config?: Partial<COBEOptions>;
  mass?: number;
  tension?: number;
  friction?: number;
  precision?: number;
};

const DEFAULT_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.5,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.8, 0.8, 0.8],
  markerColor: [0.32, 1.3, 0.53],
  glowColor: [0.2, 0.8, 0.4],
  markers: [
    // SOUTH AMERICA - Amazon Basin & Atlantic Forests
    { location: [-3.4653, -62.2159], size: 0.15 }, // Amazon Rainforest (Central Brazil)
    { location: [-0.4619, -73.1856], size: 0.13 }, // Amazon (Colombia/Peru border)
    { location: [-8.7832, -63.9038], size: 0.12 }, // Amazon (Western Brazil)
    { location: [3.9194, -61.9750], size: 0.10 }, // Amazon (Venezuela/Guyana)
    { location: [-12.0464, -77.0428], size: 0.10 }, // Amazon (Peru)
    { location: [-15.7801, -47.9292], size: 0.09 }, // Brazilian Cerrado transition
    { location: [-22.9068, -43.1729], size: 0.09 }, // Atlantic Forest (Rio de Janeiro)

    // CENTRAL AMERICA
    { location: [9.7489, -83.7534], size: 0.10 }, // Costa Rica rainforests
    { location: [17.2510, -88.7590], size: 0.09 }, // Belize rainforests
    { location: [9.1450, -79.4753], size: 0.09 }, // Panama Darien rainforest
    { location: [15.7835, -90.2308], size: 0.09 }, // Guatemala Petén rainforest

    // AFRICA - Congo Basin
    { location: [-0.2280, 18.5945], size: 0.13 }, // Congo Rainforest (DRC central)
    { location: [0.5275, 25.0653], size: 0.12 }, // Congo Basin (Eastern DRC)
    { location: [-4.0383, 21.7587], size: 0.10 }, // Congo Basin (Southern)
    { location: [0.3476, 9.4673], size: 0.09 }, // Gabon rainforest
    { location: [3.8480, 11.5021], size: 0.09 }, // Cameroon rainforest

    // WEST AFRICA
    { location: [6.4281, -3.4166], size: 0.07 }, // Ghana/Ivory Coast forests
    { location: [7.5400, -5.5471], size: 0.07 }, // Ivory Coast Taï forest

    // MADAGASCAR
    { location: [-18.7669, 46.8691], size: 0.09 }, // Madagascar eastern rainforests

    // SOUTHEAST ASIA - Indonesia
    { location: [-0.7893, 113.9213], size: 0.13 }, // Borneo rainforest (Kalimantan)
    { location: [-0.9471, 100.4172], size: 0.12 }, // Sumatra rainforest
    { location: [-2.5489, 118.0149], size: 0.10 }, // Sulawesi rainforest
    { location: [-6.2088, 106.8456], size: 0.09 }, // Java remaining forests

    // MALAYSIA
    { location: [4.2105, 113.9758], size: 0.10 }, // Malaysian Borneo (Sabah/Sarawak)
    { location: [3.1390, 101.6869], size: 0.09 }, // Peninsular Malaysia (Taman Negara)

    // PAPUA NEW GUINEA & PACIFIC
    { location: [-5.5000, 144.0000], size: 0.13 }, // Papua New Guinea highlands
    { location: [-6.3150, 143.9555], size: 0.12 }, // PNG lowland rainforests

    // AUSTRALIA
    { location: [-16.4833, 145.4500], size: 0.09 }, // Daintree Rainforest (Queensland)
    { location: [-17.4833, 146.0500], size: 0.07 }, // Wet Tropics (Queensland)

    // INDIA & SOUTH ASIA
    { location: [11.1271, 76.9673], size: 0.09 }, // Western Ghats (Kerala)
    { location: [26.6500, 93.2167], size: 0.07 }, // Northeast India (Assam)

    // THAILAND & INDOCHINA
    { location: [7.9519, 98.3381], size: 0.09 }, // Southern Thailand rainforests
    { location: [12.5657, 104.9910], size: 0.07 }, // Cambodia forests

    // PHILIPPINES
    { location: [8.4542, 124.6319], size: 0.09 }, // Mindanao rainforests
    { location: [10.3157, 123.8854], size: 0.07 }, // Palawan rainforests

  ],
};

const props = withDefaults(defineProps<GlobeProps>(), {
  mass: 1,
  tension: 280,
  friction: 100,
  precision: 0.001,
});

const globeCanvasRef = ref<HTMLCanvasElement>();
const phi = ref(0);
const width = ref(0);
const pointerInteracting = ref();
const pointerInteractionMovement = ref();

let globe: ReturnType<typeof createGlobe> | null = null;

const spring = useSpring(
  {
    r: 0,
  },
  {
    mass: props.mass,
    tension: props.tension,
    friction: props.friction,
    precision: props.precision,
  },
);

function updatePointerInteraction(clientX: number | null) {
  if (clientX !== null) {
    pointerInteracting.value = clientX - (pointerInteractionMovement.value ?? clientX);
  } else {
    pointerInteracting.value = null;
  }

  if (globeCanvasRef.value) {
    globeCanvasRef.value.style.cursor = clientX ? "grabbing" : "grab";
  }
}

function updateMovement(clientX: number) {
  if (pointerInteracting.value !== null) {
    const delta = clientX - (pointerInteracting.value ?? clientX);
    pointerInteractionMovement.value = delta;
    spring.r = delta / 200;
  }
}

function onRender(state: Record<string, unknown>) {
  if (!pointerInteracting.value) {
    phi.value += 0.005;
  }

  state.phi = phi.value + spring.r;
  state.width = width.value * 2;
  state.height = width.value * 2;
}

function onResize() {
  if (globeCanvasRef.value) {
    width.value = globeCanvasRef.value.offsetWidth;
  }
}

function createGlobeOnMounted() {
  const config = { ...DEFAULT_CONFIG, ...props.config };

  globe = createGlobe(globeCanvasRef.value!, {
    ...config,
    width: width.value * 2,
    height: width.value * 2,
    onRender,
  });
}

onMounted(() => {
  window.addEventListener("resize", onResize);
  onResize();
  createGlobeOnMounted();

  setTimeout(() => (globeCanvasRef.value!.style.opacity = "1"));
});

onBeforeUnmount(() => {
  globe?.destroy();
  window.removeEventListener("resize", onResize);
});
</script>