<template>
  <div class="flex">
    <div class="flex flex-col h-screen p-3 bg-white shadow w-96">
      <ClientShopAccordion/>
    </div>
    <div class="container mx-auto">
      <ClientCommander/>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClientShopAccordion from '@/components/ClientShopAccordion.vue';
import ClientCommander from '@/components/ClientCommander.vue';

export default defineComponent({
  name: 'ShopView',
  components: {
    ClientShopAccordion,
    ClientCommander,
  },
  data() {
    return {
      items: [
        {
          name: 'Restaurants',
          child: [
            {
              restaurant: 'Burger King'
            },
            {
              restaurant: 'MacDonald\'s'
            },
          ]
        },
        {
          name: 'Catégories',
          child: [
            {
              type: 'Burger'
            },
            {
              type: 'Américain'
            },
            {
              type: 'Meilleur'
            },
          ]
        },
      ]
    };
  },
  props: {
    relative: {
      type: Boolean,
      default: true,
    },
  },
});
</script>