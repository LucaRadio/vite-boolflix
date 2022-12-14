<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppRows from './components/AppRows.vue'
import { fetchSearchedRequest, properties } from './store';
export default {
  components: { AppHeader, AppRows },
  data() {
    return {
      properties,
    }
  },

  methods: {
    doSearch() {
      if (properties.savedWord === "") {
        alert("Insert at least a letter to search !")
      } else {

        fetchSearchedRequest();
      }
    },


  },
}

</script>


<template>

  <AppHeader @searchProcessing="doSearch" />
  <div class="container text-center">

    <AppRows />

  </div>

</template>

<style lang="scss">
@use "@fortawesome/fontawesome-free/css/all.min.css";

.row {
  overflow: auto;
  flex-wrap: nowrap;
}

.card {
  min-height: 300px;
  background-color: rgba($color: #000000, $alpha: 0.8);
}

.card:hover .card-body {
  display: block;

}

.card-body {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.8);
}

img {
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
