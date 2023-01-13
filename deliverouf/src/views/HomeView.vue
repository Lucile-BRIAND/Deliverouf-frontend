<template>
  <ClientHomeSearch/>
  <ClientHomeCarousel/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClientHomeSearch from '@/components/ClientHomeSearch.vue';
import ClientHomeCarousel from '@/components/ClientHomeCarousel.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ClientHomeSearch,
    ClientHomeCarousel,
  },
});
</script>
