<template>
    <div class="flex bg-[#fff3c1]">
        <v-card
            class="inline-flex my-auto ml-auto w-2/6"
            color="#ebebeb"
        >
            <v-card-text>
                <v-text-field
                    :loading="loading"
                    density="compact"
                    variant="solo"
                    label="Rechercher un restaurant..."
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onClick"
                ></v-text-field>
            </v-card-text>
        </v-card>
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