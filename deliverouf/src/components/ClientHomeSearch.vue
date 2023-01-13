<template>
    <div class="flex flex-wrap py-8 bg-[#fff3c1]">
        <div class="inline-flex flex-col my-auto ml-auto w-2/5">
            <p class="text-4xl font-semibold">Un petit creux ? Trouvez un restaurant facilement !</p><br>
            <v-card
                color="#ebebeb"
            >
                <v-card-text class="flex flex-wrap">
                    <v-text-field
                        :loading="loading"
                        density="compact"
                        variant="solo"
                        label="Rechercher un restaurant..."
                        class="inline-flex mx-auto"
                        single-line
                        hide-details
                    ></v-text-field>

                    <v-btn 
                        class="inline-flex mx-auto" 
                        fab 
                        icon 
                        small
                        @click="onClick"
                    >
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                    </v-btn>
                </v-card-text>

            </v-card>
        </div>
        <div class="inline-flex w-2/4">
            <img src="https://www.elluminatiinc.com/wp-content/uploads/2020/07/blog/howdeliverooworks.jpg" alt="Image contenant une carte sur un smartphone et un livreur en scooter">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'ClientHomeSearch',
data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 1000)
      },
    },
});
</script>