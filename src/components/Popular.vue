<template>
    <div class="col" v-for="film in popular">
        <div @mouseleave="reset(film)" class="card w-100 overflow-auto position-relative">
            <img :src="typeImgFetch(film)" class="card-img-top" alt="Not Image for this film">
            <div class="card-body text-white overflow-auto">
                <h5 class="card-title">
                    <span class="text-primary">Title:</span> {{ film.title }}
                </h5>
                <h5 class="card-title"><span class="text-primary">Original title:</span>
                    {{ film.original_title }} </h5>
                <p><span class="text-primary fw-bold">Original language:</span> <svg
                        v-html="flagInsert(film, countriesFlag)"></svg></p>
                <p class="ms-3" v-if="film.overview"><span class="fw-bold text-primary">Overview
                        :</span>{{ film.overview }}</p>
                <p class="ms-3" v-else>There isn't an italian overview on this film</p>

                <h5 class="text-primary card-text" v-if="film.vote_average"> Vote: <i
                        class="fa-solid fa-star text-warning" v-for="n in gradeModify(film)"></i></h5>
                <h6 class="text-primary card-text mb-3" v-else> Vote: There ins't enough grades to establish an average
                    grade
                </h6>
                <button @click="fetchCast('movie', film, film.id)" class="btn btn-info p-1">View Cast</button>
                <ul class="list-unstyled">
                    <li v-if="film.cast" v-for="actor in film.cast">
                        <div class="div">
                            <span class="text-danger">{{ actor.original_name
                            }}
                            </span>
                            <span v-if="actor.character"> as {{
                                    actor.character
                            }}</span>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { reset, properties, typeImgFetch, flagInsert, gradeModify, fetchCast } from '../store';
import * as countriesFlag from 'country-flag-icons/string/1x1';
import { countries } from 'country-flag-icons';
export default {

    props: {
        popular: Array
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
        gradeModify,
        fetchCast,
        reset,
    }

}
</script>

<style>

</style>