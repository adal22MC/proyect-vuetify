<template>
  <div>
    <h2>QR</h2>
    <v-text-field v-model="palabra" label="Ingresa tus datos"></v-text-field>
    <v-btn color="blue darken-1" text @click="save"> Generar </v-btn>
    
    <v-card v-show="ban">
      <v-card-title>
        <span class="text-h5">El QR Generado es</span>
      </v-card-title>
      <v-container text-center>
        <vue-qr :text="palabra" :callback="test" qid="testid"></vue-qr>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import VueQr from "vue-qr";

export default {
  components: {
    VueQr,
  },
  data() {
    return {
      palabra: "",
      size: 100,
      ban: false,
    };
  },
  watch: {
    ban() {
      if (this.palabra == "") {
        this.ban = false;
      }
    },
  },
  methods: {
    save() {
      this.ban = true;
    },
  },
};
</script>