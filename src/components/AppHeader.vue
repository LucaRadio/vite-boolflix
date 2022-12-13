<template>
    <form @submit.prevent="searchSend" class="input-group mx-auto my-3 ">
        <input type="text" class="form-control input-group-item" placeholder="Search Here..." v-model="properties.searchText">

        <button class="btn btn-warning">Search</button>

    </form>

    <div v-if="properties.movies.length || properties.movies.length" class="input-group justify-content-center">
        <button @click.stop="changePage(false)" class="btn btn-info">Prev</button>
        <div class="bg-secondary text-white py-2 px-3">{{properties.pageSelected}}</div>
        <button @click.stop="changePage(true)" class="btn btn-info">Next</button>
    </div>


</template>

<script>
import {fetchSearchedRequest, properties} from '../store';
export default {
    emits:
      ["searchProcessing"]
    ,
    data(){
        return{
            properties,

        }
    },
    methods:{
        searchSend(){
            this.$emit("searchProcessing",properties.searchText)
        },
        changePage(increment){
            if(increment){

                properties.pageSelected ++;
                fetchSearchedRequest()
            }else{
                if(properties.pageSelected>1){
                    properties.pageSelected--;
                    fetchSearchedRequest()
                    
                }else{
                    properties.pageSelected=1
                    fetchSearchedRequest()
                }
            }
        }
    }
}
</script>

<style lang="scss">
@use "@fortawesome/fontawesome-free/css/all.min.css";
form{
    width: 300px !important; 
}
form>input.form-control{
    width: auto;
}
</style>