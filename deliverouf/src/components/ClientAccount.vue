<template>
    <div class="mx-auto my-12">      
        <h1>Bonjour, vous êtes connecté en tant que {{ User }} !</h1>
        <h2>Nom d'utilisateur :{{ User }}</h2>
        <h2>E-mail associé au compte : {{ Mail }}</h2>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapActions  } from 'vuex';
import auth from '../store/modules/auth';

export default defineComponent({
  name: 'ClientAccount',
  components: {},
  computed: {
    ...mapGetters({User: "StateUser", Mail: "email"}),
  },
    ...mapActions(["GetPosts"]),
  },
  );
</script>