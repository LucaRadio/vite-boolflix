<script>
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
  padding-bottom: 5px;
  border-radius: 25px;
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

.card-body:hover {
  display: block;
}

img {
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/*********************************************************
Scrollbar Test
Scrollbar Test
Scrollbar Test
Scrollbar Test
Scrollbar Test
Scrollbar Test
Scrollbar Test
Scrollbar Test
Scrollbar Test
***************************************************************/



/* width */
::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  border-radius: 100px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #888;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
