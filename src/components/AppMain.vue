<template>
  <section class="movies">
    <ul class="list-group">
        <li class="list-group-item" v-for="movie in movies">{{movie}}</li>
    </ul>

  </section>
  <section class="tv"></section>
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