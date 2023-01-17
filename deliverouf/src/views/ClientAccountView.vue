<template>
    <ClientAccount/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClientAccount from '@/components/ClientAccount.vue';

export default defineComponent({
name: 'ClientAccountView',
components: {
    ClientAccount
},
});
</script>