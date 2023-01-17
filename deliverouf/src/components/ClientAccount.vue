<template>
    <div v-if="isConnected()" class="mx-auto">
        <h1>Bonjour {{ User }} ! Bienvenue sur ton compte</h1>




    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import auth from '../store/modules/auth';

export default defineComponent({
  name: 'ClientAccount',
  components: {},
  computed: {
    ...mapGetters({User: "StateUser"}),
  },
  methods:{
    isConnected(){
        return auth.getters.isAuthenticated;
    },
  },
});
</script>