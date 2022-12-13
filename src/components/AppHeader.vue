<template>
    <form @submit.prevent="searchSend" class="input-group mx-auto my-3 ">
        <input type="text" class="form-control input-group-item" placeholder="Search Here..." v-model="properties.searchText">

        <button class="btn btn-warning">Search</button>

    </form>




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
            savedWord:''

        }
    },
    methods:{
        searchSend(){
            this.$emit("searchProcessing",properties.searchText)
        },
        
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