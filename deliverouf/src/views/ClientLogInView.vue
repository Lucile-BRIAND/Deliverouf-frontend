<template>
    <div class="">
      <ClientLogIn/>
    </div>
    <br>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ClientLogIn from '@/components/ClientLogIn.vue';
  
  export default defineComponent({
    name: 'ClientLogInView',
    components: {
      ClientLogIn,
    },
  });
  </script>
  