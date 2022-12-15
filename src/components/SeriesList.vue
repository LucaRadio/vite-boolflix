<template>

    <div v-if="!properties.errorLastPageSeries" class="col d-flex" v-for="singleSerie in series">

        <div @mouseleave="reset(singleSerie)" class="card w-100 overflow-auto text-white position-relative">
            <img :src="typeImgFetch(singleSerie)" class="card-img-top" alt="Not Image for this serie">
            <div class="card-body text-white overflow-auto">
                <h5 class="card-title">
                    <span class="text-primary">Title:</span> {{ singleSerie.name }}
                </h5>
                <h5 class="card-title"><span class="text-primary">Original title:</span>
                    {{ singleSerie.original_name }} </h5>
                <p><span class="text-primary fw-bold">Original language:</span><svg class="ms-2"
                        v-html="flagInsert(singleSerie, countriesFlag)"></svg></p>
                <p class="ms-3" v-if="singleSerie.overview"><span class="fw-bold text-primary">Overview
                        :</span>{{ singleSerie.overview }}</p>
                <p class="ms-3" v-else>There isn't an italian overview on this singleSerie</p>

                <h5 class="text-primary card-text" v-if="singleSerie.vote_average"> Vote: <i
                        class="text-warning fa-solid fa-star" v-for="n in gradeModify(singleSerie)"></i></h5>
                <h6 class="text-primary card-text" v-else> Vote: There ins't enough grades to establish an average
                    grade
                </h6>
                <button @click="fetchCast('tv', singleSerie, singleSerie.id)" class="btn btn-info p-1">View
                    Cast</button>
                <ul class="list-unstyled">
                    <li v-if="singleSerie.cast" v-for="actor in singleSerie.cast">
                        <div class="div">
                            <span class="text-danger">{{ actor.name
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
import { reset, fetchCast, properties, typeImgFetch, flagInsert, gradeModify } from '../store';
import * as countriesFlag from 'country-flag-icons/string/1x1';
import { countries } from 'country-flag-icons';
export default {
    props: {
        series: Array
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
        reset

    }

}
</script>


<style lang="scss">
img {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
</style>




