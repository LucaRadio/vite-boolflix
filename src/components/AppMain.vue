<template>
  <AppCard/>
  <!-- <section class="movies">
    <h1 class="text-primary my-4" v-if="properties.movies.length">Movies</h1>
    <div class="row row-cols-5 p-3 g-3">
        <AppCard :movies="properties.movies"/>
    </div>
  </section>
  <section class="tv">
    <h1 class="text-primary my-4" v-if="properties.series.length">Series</h1>
    <div class="row row-cols-5 p-3 g-3">
        <AppCard :serie="properties.series"/>
    </div>
  </section> -->
</template>

<script>
import { properties } from '../store';
import AppCard from './AppCard.vue';


export default {
    components: { AppCard },
    data(){
      return{
        properties
      }
    }
    }
</script>

<style>

</style>