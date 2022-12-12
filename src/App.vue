<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { fetchSearchedRequest,properties } from './store';
export default{
  components:{AppHeader,AppMain},
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
  <div class="container">

    <AppHeader @searchProcessing="doSearch"/>
    <AppMain/>

  </div>

</template>

<style scoped>
</style>
