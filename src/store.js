import axios from "axios";
import { reactive } from "vue";

export const properties = reactive({
    searchText:'',
    movies:[],
    series:[],
    pageSelected: 1
})

export function fetchSearchedRequest(){
    const mainUrl = "https://api.themoviedb.org/3"
    axios.get(mainUrl + "/search/movie" ,{
        params:{
            api_key: "25efb6124fbd30cb0ddc75796834305a",
            query: properties.searchText,
            page: properties.pageSelected
        }
    })
    .then(resp=>{
        console.log(resp.data.results);
        properties.movies=resp.data.results
    })
    axios.get(mainUrl + "/search/tv" ,{
        params:{
            api_key: "25efb6124fbd30cb0ddc75796834305a",
            query: properties.searchText,
            page: properties.pageSelected,
        }
    })
    .then(resp=>{
        properties.series = resp.data.results
    })
}