<template>
    <form @submit.prevent="searchSend" class="input-group">
        <input type="text" class="form-control input-group-item" placeholder="Search Here..." v-model="properties.searchText">

        <button class="btn btn-warning">Search</button>

    </form>

    <div class="input-group">
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
                properties.pageSelected --;
                fetchSearchedRequest();
            }
        }
    }
}
</script>

<style lang="scss">
form{
    width: 300px !important; 
}
form>input.form-control{
    width: auto;
}
</style>