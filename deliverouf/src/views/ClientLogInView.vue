<template>
    <div class="">
      <ClientLogIn/>
    </div>
    <br>
    <v-btn color="success" rounded to="/register">Register</v-btn>
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
  