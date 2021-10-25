<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
       <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/empleados">
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Empleados</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mi Cuenta</v-list-item-title>
          </v-list-item>

          <v-list-item to="/grafica">
            <v-list-item-icon>
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Grafica</v-list-item-title>
          </v-list-item>

          <v-list-item to="/generar-qr">
            <v-list-item-icon>
              <v-icon>mdi-qrcode</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Generar QR</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#212640">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Bard",
  data: () => ({ drawer: null }),
};
</script>