<template>
  <v-footer color="#ebebeb">
    <div class="flex flex-col mx-auto w-full">
      <div class="flex flex-wrap justify-center">
        <v-btn
          href="https://www.github.com"
          target="_blank"
          color="black"
          variant="text"
          class="inline-flex mx-2 hover:bg-[#39ccb8]"
          icon
        >
          <font-awesome-icon icon="fa-brands fa-github" size="xl"/>
        </v-btn>
        
        <v-btn
          href="https://www.facebook.com"
          target="_blank"
          color="black"
          variant="text"
          class="inline-flex mx-2 hover:bg-[#39ccb8]"
          icon
        >
          <font-awesome-icon icon="fa-brands fa-facebook" size="xl"/>
        </v-btn>
        
        <v-btn
          href="https://www.instagram.com"
          target="_blank"
          color="black"
          variant="text"
          class="inline-flex mx-2 hover:bg-[#39ccb8]"
          icon
        >
          <font-awesome-icon icon="fa-brands fa-instagram" size="xl"/>
        </v-btn>
        
        <v-btn
          href="https://www.twitter.com"
          target="_blank"
          color="black"
          variant="text"
          class="inline-flex mx-2 hover:bg-[#39ccb8]"
          icon
        >
          <font-awesome-icon icon="fa-brands fa-twitter" size="xl"/>
        </v-btn>
      </div>

      <div class="flex flex-wrap justify-around text-left mx-4">
          <v-card-text v-for="(item,i) in items" :key="i" class="inline-flex">
            <div>
              <strong>{{ item.name }}</strong>
              <li v-for="(tag, i) in item.tags" :key="i" class="list-[none]">
                <a target="_blank" v-bind:href="tag.url" class="hover:text-[#39ccb8]">{{tag.urlname}}</a>
              </li>
            </div>
          </v-card-text>
      </div>
      
      <v-divider></v-divider>

      <v-card flat :elevation="0"  color="#ebebeb" class="text-center">
        <v-card-text>
          © {{ new Date().getFullYear() }} — <strong>Deliver'Ouf</strong>
        </v-card-text>
      </v-card>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "ClientFooter",
    panel: [],
    data: () => ({
      items: [
        {
          name: "Découvrir Deliver'Ouf",
          tags: [
            {
              urlname: "À propos",
              url: "/"
            },
            {
              urlname: "Accueil",
              url: "/"
            },
            {
              urlname: "Mon compte",
              url: "/"
            }
          ]
        },
        { name: "Besoin d'aide ?", 
        tags: [
          { urlname: "Nous contacter", url: "/" },
          { urlname: "FAQ", url: "/"},
        ] 
        },
        { name: "Mentions légales", 
        tags: [
          { urlname: "Mentions légales", url: "/" },
          { urlname: "Conditions Générales de Vente", url: "/" },
          { urlname: "Confidentialité", url: "/" },
        ] 
        },
      ]
    }),
  });
</script>