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

  created(){
    // fetchSearchedRequest();
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
    <AppMain :movies="properties.movies"/>

  </div>

</template>

<style scoped>
</style>
