<template>
  <v-app-bar
    color="#39ccb8"
    :elevation="2"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h4 font-weight-bold" style="font-family:Franklin Gothic Heavy">Deliver'Ouf</v-toolbar-title>
    </template>

    <v-spacer></v-spacer>

    <template v-slot:append>
      <v-btn rounded to="/" class="mx-1"><font-awesome-icon icon="fa-solid fa-house" class="mr-1"/>Accueil</v-btn>  

      <v-btn rounded to="/login" class="mx-1"><font-awesome-icon icon="fa-solid fa-user" class="mr-1"/>Compte</v-btn>

      <v-btn rounded to="/commande" class="mx-1"><font-awesome-icon icon="fa-solid fa-cart-shopping" class="mr-1"/>Panier</v-btn>
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
          title: 'Nom de compte',
          value: 'foo',
        },
        {
          title: 'Email lié au compte',
          value: 'bar',
        },
        {
          title: 'Nombre de point',
          value: 'fizz',
        },
        {
          title: 'Commande en cours',
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