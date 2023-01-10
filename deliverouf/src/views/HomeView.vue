<template>
  <ClientHomeSearch/>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ClientHomeSearch from '@/components/ClientHomeSearch.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    ClientHomeSearch,
  },
});
</script>
