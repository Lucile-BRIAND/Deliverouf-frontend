<template>
    <div class="">
      <ClientRegister/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ClientRegister from '@/components/ClientRegister.vue';
  
  export default defineComponent({
    name: 'ClientRegisterView',
    components: {
      ClientRegister,
    },
  });
  </script>
  