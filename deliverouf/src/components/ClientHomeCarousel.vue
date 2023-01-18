<template>
  <div class="flex flex-wrap h-[450px] bg-[#fff3c1]">
    <div class="inline-flex w-2/4">
      <v-carousel
      cycle
      interval="3000"
      hide-delimiters
      show-arrows="hover"
      >
        <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
        >
        </v-carousel-item>
      </v-carousel>
    </div>

    <div class="inline-flex w-2/4 bg-[#39ccb8]">
      <div class="m-20 text-justify">
        <p class="text-2xl font-semibold">Manger chez soi et à petits prix, voilà notre devise.</p><br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor pellentesque nibh eu condimentum. Integer vestibulum turpis in pharetra varius. Pellentesque egestas est convallis nisl faucibus gravida.
          </p>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ClientHomeCarousel',
    data () {
      return {
        items: [
          {
            src: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg',
          },
          {
            src: 'https://cdn.vox-cdn.com/thumbor/KJjKfCBX0DEu7QY7395Sc8fdYBY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23957266/Le_Fantome.jpg',
          },
          {
            src: 'https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg',
          },
          {
            src: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/comfort-food-healty-nos-recettes-qui-boostent-le-moral-et-l-organisme-4086663/98049386-2-fre-FR/Comfort-food-healty-nos-recettes-qui-boostent-le-moral-et-l-organisme.jpg',
          },
          {
            src: 'https://i0.wp.com/www.romainparis.fr/wp-content/uploads/Lheure-de-lapero-autour-dun-Ricard--scaled.jpeg?fit=2560%2C1912&ssl=1'
          },
        ],
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
      }
    },
});
</script>