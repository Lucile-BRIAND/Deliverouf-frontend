<template>
    <div v-for = "restaurant in restaurant1" :key="restaurant">
        <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template>
        <v-progress-linear
          color="deep-purple"
          height="0"
          indeterminate
        ></v-progress-linear>
      </template>

      <div>
        <img v-bind:src="restaurant.img">
      </div>
  
      <div class="flex justify-center">
        {{ restaurant.menu}}
      </div>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          {{ restaurant.name}}
        </div>
  
        <div>Livraison de Commande à domicile,</div> 
        <div>Réception de commande à emporter,</div>
        <div>Commandes personnalisables</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Today's availability</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Deliver Now</v-chip>
  
          <v-chip>In 30'</v-chip>
  
          <v-chip>In 1h</v-chip>
  
          <v-chip>In 2h</v-chip>
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
    
  export default defineComponent({
      name: "ClientCommander",
      data: () => ({
        loading: false,
        selection: 1,       
        
        restaurant1:[{  
            id:"1",
            name: "Burger King, Restauration Rapide",
            menu:   "Menu Whopper",
            img:    "https://www.echantillonsclub.com/wp-content/uploads/2022/03/offre_whopper_burger_king-624x624.jpg",
            description:    "Livraison de Commande à domicile, Réception de commande à emporter, Commandes personnalisables"
            
        },
        {   
            id:"2",
            name: "Burger King, Restauration Rapide",
            menu:   "Menu Masters Forestier",
            img:    "https://burgerkingfrance.twic.pics/img/news/2dc772eb-61d9-42fe-832f-dc38c07d9ab5_national-37?twic=v1/contain=400x400",
            description:    "Livraison de Commande à domicile, Réception de commande à emporter, Commandes personnalisables",
        },]
      }),
      methods: {
        reserve () 
        {
          this.loading = true
          setTimeout(() => (this.loading = false), 2000)
        },
        test()
        {
            return (this.restaurant1);
        },
    },
    });
  </script>