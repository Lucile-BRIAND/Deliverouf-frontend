<template>
  <v-app-bar
    color="#39ccb8"
    :elevation="2"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Deliverouf</v-app-bar-title>

    <v-spacer></v-spacer>

    <template v-slot:append>
      <v-btn rounded to="/shop"><font-awesome-icon icon="fa-solid fa-cart-shopping"/>Shop</v-btn>

      <v-btn rounded to="/login"><font-awesome-icon icon="fa-solid fa-user"/>User</v-btn>

      <v-btn rounded to="/"><font-awesome-icon icon="fa-solid fa-house" />Home</v-btn>      

    </template>
    
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
  >
      <v-list
      :items="items"
      ></v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "ClientNavBar",

    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  });
</script>