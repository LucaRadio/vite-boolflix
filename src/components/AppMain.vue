<template>
  <section class="movies">
    <ul class="list-group">
        <AppCard :movies="properties.movies"/>
    </ul>

  </section>
  <section class="tv"></section>
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