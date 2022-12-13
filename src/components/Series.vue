<template>
    <div v-if="properties.errorSeries" class="alert mx-auto my-3 alert-danger w-50">Unable to find a Tv Series with {{properties.searchText}} as title. Reload Page or go back..</div>

    <div class="col d-flex" v-for="serie in series">

    <div class="card w-100 overflow-auto text-white position-relative">
        <img :src="typeImgFetch(serie)" class="card-img-top " alt="Not Image for this film">
        <div class="card-body text-white">
            <h5 class=" card-title">
                <span class="text-primary">Title:</span> {{ serie.name }}
            </h5>
            <h5 class="card-title"><span class="text-primary">Original title:</span>
                {{ serie.original_name }} </h5>
            <p class="card-text mb-3"><span class="text-primary fw-bold">Original language:</span><svg class="ms-2"
                    v-html="flagInsert(serie, countriesFlag)"></svg></p>
<p><span class="text-primary fw-bold">Original language:</span>     <svg v-html="flagInsert(serie,countriesFlag)"></svg></p>
<p class="ms-3" v-if="serie.overview"><span class="fw-bold text-primary">Overview :</span>{{serie.overview}}</p>
    <p class="ms-3" v-else>There isn't an italian overview on this serie</p>

            <h5 class="text-primary card-text" v-if="serie.vote_average"> Vote: <i class="fa-solid fa-star"
                    v-for="n in gradeModify(serie)"></i></h5>
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
        gradeModify
    }

}
</script>


<style lang="scss">

</style>




