<template>
  <ClientHomeSearch/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ClientHomeSearch from '@/components/ClientHomeSearch.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ClientHomeSearch,
  },
});
</script>
