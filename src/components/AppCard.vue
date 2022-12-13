<template>
    <h1 class="display-1 text-primary text-center my-4">Movies</h1>
    <div class="input-group justify-content-center">
    <button @click.stop="changePage(false,true)" class="btn btn-info">Prev</button>
    <div class="bg-secondary text-white py-2 px-3">{{properties.pageSelectedMovies}}</div>
    <button @click.stop="changePage(true,true)" class="btn btn-info">Next</button>
</div>
    <div class="row row-cols-5 g-3 my-3 flex-no-wrap">
    <Movies :movies="properties.movies"/>
</div>
<h1 class=" display-1 text-primary text-center my-4">Series</h1>
<div  class="input-group justify-content-center">
    <button @click.stop="changePage(false,false)" class="btn btn-info">Prev</button>
    <div class="bg-secondary text-white py-2 px-3">{{properties.pageSelectedSeries}}</div>
    <button @click.stop="changePage(true,false)" class="btn btn-info">Next</button>
</div>
<div class="row row-cols-5 g-3 my-3">
    <Series :series="properties.series"/>
</div>





</template>

<script>
import { properties,changePage } from '../store';
import Movies from './Movies.vue';
import Series from './Series.vue';

export default {
    components: { Movies, Series },
    data() {
        return {
            properties
        }
    },
    methods:{
        changePage,
    }


}
</script>

<style lang="scss">
svg {
    width: 30px;
    height: 20px;
}

img {
    max-height: 300px;
}

h4,
h6 {
    text-align: start;
}
</style>