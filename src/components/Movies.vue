<template>
    
<div v-if="properties.errorMovies" class="alert mx-auto my-3 alert-danger w-50">Unable to find a movie with {{properties.searchText}} as title. Reload Page or go back...</div>
    <div class="col d-flex" v-for="movie in movies">

        <div class="card w-100 overflow-auto position-relative">
            <img :src="typeImgFetch(movie)" class="card-img-top" alt="Not Image for this film">
            <div class="card-body text-white overflow-auto">
                <h5 class="card-title">
                    <span class="text-primary">Title:</span> {{ movie.title }}
                </h5>
                <h5 class="card-title"><span class="text-primary">Original title:</span>
                    {{ movie.original_title }} </h5>
                <p><span class="text-primary fw-bold">Original language:</span>     <svg v-html="flagInsert(movie,countriesFlag)"></svg></p>
                <p class="ms-3" v-if="movie.overview"><span class="fw-bold text-primary">Overview :</span>{{movie.overview}}</p>
                <p class="ms-3" v-else>There isn't an italian overview on this movie</p> 

                <h5 class="text-primary card-text" v-if="movie.vote_average"> Vote: <i class="fa-solid fa-star"
                        v-for="n in gradeModify(movie)"></i></h5>
                <h6 class="text-primary card-text" v-else> Vote: There ins't enough grades to establish an average grade
                </h6>
            </div>
        </div>

    </div>
</template>

<script>
import {properties, typeImgFetch, flagInsert, gradeModify } from '../store';
import * as countriesFlag from 'country-flag-icons/string/1x1';
import { countries } from 'country-flag-icons';
export default {
    props: {
        movies: Array
    },
    data() {
        return {
            properties,
            countries,
            countriesFlag,
            imageDimension: "w185"
        }
    },
    methods: {
        typeImgFetch,
        flagInsert,
        gradeModify
    }

}
</script>

<style>

</style>

