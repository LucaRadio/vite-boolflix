<template>
    <div v-if="!properties.showButton" class="intro">

        <h1 class="text-danger mt-4">Welcome to BoolFlix...</h1>
        <p class="fs-4 text-white">Search any work and I'll give you all information you need! ( If there are, of
            course !!! )
        </p>

        <p class="custom">Meanwhile, here's a list of popular films that you may interest</p>

    </div>
    <!-- FILM -->

    <div v-if="properties.errorMovies" class="alert mx-auto my-3 alert-danger w-50">Unable to find a movie that contains
        "{{ properties.savedWord }}" in the title. Search another film</div>


    <div v-if="!properties.errorMovies" class="movies-container">
        <div v-if="properties.showButton" class="show-container">
            <h1 class="display-1 text-primary text-center my-4">Movies</h1>
            <div class="input-group justify-content-center">
                <button @click.stop="changePage(false, 'movies')" class="btn btn-info">Prev</button>
                <div class="bg-secondary text-white py-2 px-3">{{ properties.pageSelectedMovies }}</div>
                <button @click.stop="changePage(true, 'movies')" class="btn btn-info">Next</button>
            </div>

            <!-- <form class="input-group">
                <select v-model="properties.genresMoviesSelected" class="input-group-item form-select shadow-none"
                    name="movie">
                    <option :selected="properties.genresMoviesSelected">All</option>
                    <option v-for="singlegenre in properties.genresMoviesList">{{ singlegenre.name }}</option>
                </select>
                <button class="btn btn-outline-warning input-group-item">Filter</button>
            </form> -->

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
        "{{ properties.savedWord }}" in the title. Search another serie</div>


    <div v-if="!properties.errorSeries" class="series-container">

        <div v-if="properties.showButton" class="show-container">
            <h1 class=" display-1 text-primary text-center my-4">Series</h1>
            <div class="input-group justify-content-center">
                <button @click.stop="changePage(false, 'series')" class="btn btn-info">Prev</button>
                <div class="bg-secondary text-white py-2 px-3">{{ properties.pageSelectedSeries }}</div>
                <button @click.stop="changePage(true, 'series')" class="btn btn-info">Next</button>
            </div>
            <!-- <form class="input-group">
                <select v-model="properties.genresSeriesSelected" class="input-group-item form-select shadow-none"
                    name="serie">
                    <option>{{ properties.genresSeriesSelected }}</option>
                    <option v-for="singlegenre in properties.genresSeriesList">{{ singlegenre.name }}</option>
                </select>
                <button class="btn btn-outline-warning input-group-item">Filter</button>
            </form> -->
        </div>







        <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 g-3 my-3">
            <Series :series="properties.series" />
        </div>
    </div>

    <div v-if="properties.errorLastPageSeries" class="w-25 mx-auto alert alert-warning">No more series.
        Go back!</div>


    <!-- Popular -->


    <div v-if="!properties.showButton"
        class=" flex-wrap row row-cols-lg-5 row-cols-md-4 row-cols-sm-2 flex-column-xs g-3 my-3">
        <popular :popular="popularList" />
    </div>




</template>

<script>
import axios from 'axios';
import { fetchGenre, properties, changePage, } from '../store';
import Movies from './MoviesList.vue';
import Series from './SeriesList.vue';
import Popular from './Popular.vue';

export default {
    props: {
        buttonShow: function () {

        }
    },
    components: { Movies, Series, Popular },
    data() {
        return {
            properties,
            popularList: []
        }
    },
    methods: {
        changePage,
        fetchGenre,
        // filter(type) {
        //     const key = "genres" + ((type.charAt(0)).toUpperCase() + type.slice(1)) + "Selected";
        //     if (properties[key] === "All") {
        //         properties[key] = ''
        //     } else {
        //         fetchIdGenre();
        //         fetchSearchedRequest()
        //     }

        // }

    },
    created() {
        axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
                api_key: "25efb6124fbd30cb0ddc75796834305a",
                language: properties.languageSelected,

            }
        })
            .then(resp => {
                this.popularList = resp.data.results

            })
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

.custom {
    color: greenyellow;
    font-weight: bold;
    font-size: 20px;

}
</style>