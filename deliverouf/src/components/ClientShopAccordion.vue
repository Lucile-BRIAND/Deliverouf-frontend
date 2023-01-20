<template>
    <div class="space-y-3">
        <div class="relative">
            <input type="search" name="Search" placeholder="Rechercher..."
            class="w-4/5 py-2 pl-4 text-sm rounded-md bg-white border focus:outline-none" />
            <button type="submit" class="w-1/5 p-2 rounded-full shadow focus:outline-none">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
        <div v-for="item in items" :key="item.name">
            <div class="tab__header">
                <a href="#"
                    class="tab__link mb-1 p-2 block hover:text-[#39ccb8] no-underline flex justify-between rounded"
                    @click.prevent="item.active = !item.active">
                    <strong>{{ item.name }}</strong>
                    <span class="text-[#39ccb8] text-2xl" v-show="!item.active">+</span>
                    <span class="text-[#39ccb8] text-2xl" v-show="item.active">-</span>
                </a>
            </div>
            <div class="tab__content" v-show="item.active">
                <div v-for="child in item.childs" :key="child.id">
                    <v-checkbox>
                        <template v-slot:label>
                            {{ child.name }}
                        </template>
                    </v-checkbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ClientShopAccordion",
    props: [
    'title'
    ],
    data() {
    return {
        active: false,
        items: [
            {
                active: false,
                name: 'Restaurants',
                childs: [
                    { 
                        id: 1, 
                        name: 'Burger King', 
                        text: 'Lorem'
                    },
                    { 
                        id: 2, 
                        name: 'O\'Tacos', 
                        text: 'Ipsum'
                    },
                    { 
                        id: 3, 
                        name: 'MacDonald\'s', 
                        text: 'Yea...'
                    },
                ]
            },
            {
                active: false,
                name: 'Catégories',
                childs: [
                    { 
                        id: 1, 
                        name: 'Burger', 
                        text: 'Lorem'
                    },
                    { 
                        id: 2, 
                        name: 'Tacos', 
                        text: 'Ipsum'
                    },
                    { 
                        id: 3, 
                        name: 'Sélection Deliver\'Ouf', 
                        text: 'Yea...'
                    },
                ]
            },
        ],
    }},
});
</script>