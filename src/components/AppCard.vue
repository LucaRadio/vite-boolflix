<template>
  <li class="list-group-item" v-for="movie in movies">
    <h5 class="text-dark">Title: {{movie.title}} </h5>
    <h5 class="text-dark">Original title: {{movie.original_title}} </h5>
    <div class="text-secondary d-flex"> Description: 
        <p class="ms-3">{{movie.overview}}</p></div>
    <h4 class="text-primary text-center"> Vote: {{movie.vote_average}}</h4>

    </li>
</template>

<script>
export default {
props:{
    movies:Array
}
}
</script>

<style>

</style>