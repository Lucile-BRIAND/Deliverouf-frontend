<template>
    <v-card>
        <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar
            color="#39ccb8"
            prominent
        >
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Deliverouf</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn variant="text" icon="mdi-magnify"></v-btn>

            <v-btn variant="text" icon="mdi-filter"></v-btn>

            <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>

            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="text"
            ></v-btn>
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

        </v-layout>
    </v-card>
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
      icons: [
        'mdi-magnify',
        'mdi-filter',
        'mdi-dots-vertical',
        ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  });
</script>