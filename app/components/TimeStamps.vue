<script setup lang="ts">
import { ref } from "vue";

const events = ref([
  {
    status: 'The Wake-Up Call',
    date: '1970s - 1980s',
    icon: 'pi pi-exclamation-triangle',
    color: '#e5ffed',
  },
  {
    status: 'Understanding the Crisis',
    date: '1990s - 2000s',
    icon: 'pi pi-chart-line',
    color: '#b3ffc9'
  },
  {
    status: 'Global Movement',
    date: '2010s',
    icon: 'pi pi-users',
    color: '#80ffa6'
  },
  {
    status: 'Our Mission Today',
    date: '2020s - Present',
    icon: 'pi pi-heart',
    color: '#4dff82'
  }
]);

</script>
<template>
  <div class="card">
    <Timeline :value="events" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
        <span class="flex w-6 h-6 lg:w-8 lg:h-8 items-center justify-center text-accent rounded-full z-10 "
          :style="{ backgroundColor: slotProps.item.color }">
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mt-4 border border-accent !bg-black">
          <template #title>
            <span class="font-bold">
              {{ slotProps.item.status }}
            </span>
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <p v-if="slotProps.item.status === 'The Wake-Up Call'">
              The construction of the Trans-Amazonian Highway in 1972 opened vast forest areas to deforestation.
              Between
              the end of the 17th century and the start of the 20th century, 67,000 square kilometers of forests were
              cleared. This period marked the beginning of unprecedented destruction, making deforestation a global
              concern that could no longer be ignored.
            </p>
            <p class="mt-5" v-else-if="slotProps.item.status === 'Understanding the Crisis'">
              Scientists discovered that rainforests are Earth's lungs, storing carbon and regulating our climate. We
              learned that 70% of land animals and 137 species are lost every single day. Over a quarter of our
              medicines come from rainforest plants, yet only 1% have been studied. The urgency became clear:
              protecting
              rainforests means protecting our future.
            </p>
            <p v-else-if="slotProps.item.status === 'Global Movement'">
              Conservation organizations achieved landmark victories, protecting millions of acres and indigenous
              territories. The world recognized that rainforests provide 23% of the climate mitigation needed to cool
              our planet. Indigenous communities, who have protected these forests for thousands of years, became
              central to conservation efforts worldwide.
            </p>
            <p v-else-if="slotProps.item.status === 'Our Mission Today'">
              We exist because the rainforests cannot wait. Every minute, 36 football fields of forest disappear. Our
              purpose is to raise awareness, support conservation efforts, and empower you to take action. Together,
              we
              can protect the biodiversity hotspots that sustain millions of species, regulate water cycles, and keep
              our planet breathing.
            </p>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-card {
      margin-bottom: 4rem;
    }

    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
      padding: 0;
    }
  }
}
</style>
