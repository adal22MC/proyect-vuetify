<template>
  <v-app>
    <v-main>
      <Bard/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Bard from './components/Bard.vue';
import Footer from './views/Fooder.vue';

export default {
  name: 'App',
  components: {
    Bard,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
