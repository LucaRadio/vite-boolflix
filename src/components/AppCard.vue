<template>
    <h1 v-if="properties.movies.length" class="display-1 text-primary text-center my-4">Movies</h1>
<div class="row row-cols-5 g-3">
    <Movies :movies="properties.movies"/>
</div>
<h1 v-if="properties.series.length" class=" display-1 text-primary text-center my-4">Series</h1>
<div class="row row-cols-5 g-3">
    <Series :series="properties.series"/>
</div>





</template>

<script>
import { properties } from '../store';
import Movies from './Movies.vue';
import Series from './Series.vue';

export default {
    components: { Movies, Series },
    data() {
        return {
            properties
        }
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