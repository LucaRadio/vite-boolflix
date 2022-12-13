<template>
  <li class="list-group-item" v-for="movie in movies">
    <h5 class="text-dark">Title: {{movie.title}} </h5>
    <h5 class="text-dark">Original title: {{movie.original_title}} </h5>
    <p>Original Language :     <svg v-html="flagInsert(movie,countriesFlag)"></svg></p>
    <div class="text-secondary d-flex"> Description: 
        <p class="ms-3" v-if="movie.overview">{{movie.overview}}</p>
        <p class="ms-3" v-else>There isn't an italian overview on this movie</p>
    </div>
    <h4 class="text-primary text-center" v-if="movie.vote_average"> Vote: {{movie.vote_average}} </h4>
    <h4 class="text-primary text-center" v-else> Vote: There ins't enough grades to establish an average grade</h4>
    <!-- <p>{{flagInsert(movie)}}</p> -->

</li>
</template>

<script>
import * as countriesFlag  from 'country-flag-icons/string/1x1'
import { countries } from 'country-flag-icons'
export default {
props:{
    movies:Array
},
data(){
    return{
        countries,
        countriesFlag
        
    }
},
created(){
    // console.log(countriesFlag.GB);

},
methods:{
    flagInsert(movie,countriesFlag){
         let original_language = movie.original_language.toUpperCase()
         if(original_language === "EN"){
            original_language= "US"
         }
         return countriesFlag[`${original_language}`]
    }
},
mounted(){

}
}
</script>

<style lang="scss">
svg{
    width: 30px;
    height: 20px;
}

</style>