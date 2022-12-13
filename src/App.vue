<script>
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';
import TheHeader from './components/TheHeader.vue';
import { fetchSearchedRequest,properties } from './store';
export default{
  components:{ AppHeader, AppCard, TheHeader },
  data(){
    return {
      properties
    }
  },

  methods:{
    doSearch(){
      fetchSearchedRequest();
    }
  }
}

</script>


<template>
  <TheHeader/>
  <div class="container  text-center">

    <AppHeader @searchProcessing="doSearch"/>
    <AppCard/>

  </div>

</template>

<style lang="scss">

.card:hover .card-body{
        display: block;

    }

    .card-body{
        display: none;
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.8);
    }
</style>
