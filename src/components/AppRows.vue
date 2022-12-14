<template>
    <div v-if="!properties.showButton" class="intro">

        <h1 class="text-danger mt-4">Welcome to BoolFlix...</h1>
        <p class="fs-3 text-white">Search any work and I'll give you all information you need! ( If there are, of
            course !!! )
        </p>

    </div>
    <!-- FILM -->

    <div v-if="properties.errorMovies" class="alert mx-auto my-3 alert-danger w-50">Unable to find a movie that contains
        "{{ properties.savedWord }}" in the title. Reload page or search another film</div>


    <div v-if="!properties.errorMovies" class="movies-container">
        <h1 v-if="properties.showButton" class="display-1 text-primary text-center my-4">Movies</h1>
        <div v-if="properties.showButton" class="input-group justify-content-center">
            <button @click.stop="changePage(false, 'movies')" class="btn btn-info">Prev</button>
            <div class="bg-secondary text-white py-2 px-3">{{ properties.pageSelectedMovies }}</div>
            <button @click.stop="changePage(true, 'movies')" class="btn btn-info">Next</button>
        </div>
        <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 flex-column-xs g-3 my-3 flex-no-wrap">
            <Movies :movies="properties.movies" />
        </div>
    </div>


    <div v-if="properties.errorLastPageMovies" class="w-25 mx-auto alert alert-warning">No more movies.
        Go back!</div>

    <!-- SERIE -->

    <div v-if="properties.errorSeries" class="alert mx-auto my-3 alert-danger w-50">Unable to find a Tv Series that
        contains
        "{{ properties.savedWord }}" in the title. Reload page or search another serie</div>


    <div v-if="!properties.errorSeries" class="series-container">

        <h1 v-if="properties.showButton" class=" display-1 text-primary text-center my-4">Series</h1>
        <div v-if="properties.showButton" class="input-group justify-content-center">
            <button @click.stop="changePage(false, 'series')" class="btn btn-info">Prev</button>
            <div class="bg-secondary text-white py-2 px-3">{{ properties.pageSelectedSeries }}</div>
            <button @click.stop="changePage(true, 'series')" class="btn btn-info">Next</button>
        </div>
        <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 g-3 my-3">
            <Series :series="properties.series" />
        </div>
    </div>

    <div v-if="properties.errorLastPageSeries" class="w-25 mx-auto alert alert-warning">No more series.
        Go back!</div>




</template>

<script>
import { properties, changePage } from '../store';
import Movies from './MoviesList.vue';
import Series from './SeriesList.vue';

export default {
    props: {
        buttonShow: function () {

        }
    },
    components: { Movies, Series },
    data() {
        return {
            properties
        }
    },
    methods: {
        changePage,

    }


}
</script>

<style lang="scss">
@media screen and (max-width: 576px) {
    .row {
        flex-direction: column;
    }
}

svg {
    width: 30px;
    height: 20px;
}

h4,
h6 {
    text-align: start;
}
</style>