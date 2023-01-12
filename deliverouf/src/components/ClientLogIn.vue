<template>
  <div class="ma-2 w-2/5 h-2/4 mx-auto bg-[#e9e9e9] border-2 border-[#e9e9e9] rounded-2xl shadow-xl">
    <div class="flex align-center justify-center my-8">
      <img class="border rounded-xl" width="127" height="130" src="https://cdn.discordapp.com/attachments/957955006810705941/1062027708298698834/image.png"/>
    </div>
    <div class="ma-8">
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
          bg-color="#ffffff"
          ></v-text-field>

          <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          bg-color="#ffffff"
          ></v-text-field>

          <v-btn
          color="#39ccb8"
          class="mr-4"
          ref="validate"
          @click="validate"
          >
          Validate
          </v-btn>

      </v-form>
    </div>
  </div>
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
    },
  });
</script>