<template>

    <header class="d-flex align-items-center justify-content-between">
        <h1 class="ms-3 display-4 text-center logo text-warning">BoolFlix</h1>
        <form @submit.prevent="searchSend" class="input-group my-3 me-3 flex-nowrap">
            <input type="text" class="form-control input-group-item w-auto" placeholder="Search Here..."
                v-model="properties.searchText">

            <button class="btn btn-warning">Search</button>

        </form>
    </header>




</template>

<script>
import { properties, fetchGenre } from '../store';
export default {
    emits:
        ["searchProcessing"]
    ,
    data() {
        return {
            properties,

        }
    },
    methods: {
        fetchGenre,
        searchSend() {
            properties.savedWord = properties.searchText
            properties.pageSelectedMovies = 1;
            properties.pageSelectedSeries = 1;
            this.$emit("searchProcessing", properties.savedWord)
        }

    },
    mounted() {
        this.fetchGenre()
    }
}
</script>

<style lang="scss">
form {
    width: 300px !important;

    select {
        min-width: 200px;
        flex-grow: 1;
    }
}

form>input.form-control {
    width: auto;
}

header {
    background-color: black;
    height: 100px;
}
</style>