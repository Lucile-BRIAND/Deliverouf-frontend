<template>
  <v-footer color="#ebebeb">
    <div class="flex flex-col mx-auto w-full">
      <div class="flex flex-wrap justify-center">
        <v-btn
          v-bind:href="link.path"
          v-for="(link, i) in links"
          :key="i"
          target="_blank"
          color="black"
          variant="text"
          class="inline-flex mx-2"
          rounded="xl"
          icon
        >
          <v-icon>{{ link.icon }}</v-icon>
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
      links: [
        {
          icon:'mdi-facebook',
          path: 'https://www.facebook.com'
        },
        {
          icon:'mdi-instagram',
          path: 'https://www.instagram.com'
        },
        {
          icon:'mdi-twitter',
          path: 'https://www.twitter.com'
        },
        {
          icon:'mdi-linkedin',
          path: 'https://www.linkedin.com'
        },
      ],
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