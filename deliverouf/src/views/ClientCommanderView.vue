<template>
    <div class="">
      <ClientCommander/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ClientCommander from '@/components/ClientCommander.vue';
  
  export default defineComponent({
    name: 'ClientCommanderView',
    components: {
      ClientCommander,
    },
  });
  </script>
  