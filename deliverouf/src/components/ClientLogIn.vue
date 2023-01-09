<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nom"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>

        <v-btn
        color="success"
        class="mr-4"
        ref="validate"
        @click="validate"
        >
        Validate
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        ref="reset"
        @click="reset"
        >
        Reset Form
        </v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ClientLogIn",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v: any) => !!v || 'Le nom est obligatoire.',
        (v: any) => (v && v.length <= 10) || 'Le nom doit comporter 10 caractères maximum.',
      ],
      email: '',
      emailRules: [
        (v: any) => !!v || 'L\'e-mail est obligatoire.',
        (v: any) => /.+@.+\..+/.test(v) || 'L\'e-mail doit être valide.',
      ],
    }),

    methods: {
      async validate () {
        const { valid } = await (this.$refs.form as HTMLFormElement).validate()

        if (valid) alert('Le formulaire est valide.')
      },
      reset () {
        (this.$refs.form as HTMLFormElement).reset()
      },
    },
  });
</script>