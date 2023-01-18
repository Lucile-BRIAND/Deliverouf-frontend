<template>
  <v-app-bar
    color="#39ccb8"
    :elevation="2"
  >
    <template v-slot:prepend> 
      <img class="w-12 rounded-lg shadow mr-4"
      src="https://cdn.discordapp.com/attachments/957955006810705941/1062027708298698834/image.png" />
    
      <a href="/" class="text-h4 font-weight-bold" style="font-family:Franklin Gothic Heavy">Deliver'Ouf</a>
    </template>

    <v-spacer></v-spacer>

    <template v-slot:append>
      <v-btn rounded to="/" class="mx-1"><font-awesome-icon icon="fa-solid fa-house" class="mr-1"/>Accueil</v-btn>  

      <v-btn rounded to="/account" class="mx-1"><font-awesome-icon icon="fa-solid fa-user" class="mr-1"/>Mon Compte</v-btn>

      <v-btn rounded to="/login" class="mx-1"><font-awesome-icon icon="fa-solid fa-user" class="mr-1"/>Se Connecter</v-btn>

      <v-btn rounded to="/commande" class="mx-1"><font-awesome-icon icon="fa-solid fa-cart-shopping" class="mr-1"/>Panier</v-btn>
    </template>
    
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "ClientNavBar",

    data: () => ({
    }),
    watch: {
    },
  },
);
</script>