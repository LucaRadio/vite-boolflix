import axios from "axios";
import { reactive } from "vue";

export const properties = reactive({
    searchText:'',
    movies:[],
    series:[],
    pageSelected: 1,
    languageSelected:"it-IT",
    error:false

})

export function fetchSearchedRequest(){
    properties.error=false
    const mainUrl = "https://api.themoviedb.org/3"
    axios.get(mainUrl + "/search/movie" ,{
        params:{
            api_key: "25efb6124fbd30cb0ddc75796834305a",
            query: properties.searchText,
            page: properties.pageSelected,
            language: properties.languageSelected     
        }
    })
    .then(resp=>{
        console.log(resp.data.results);
        properties.movies=resp.data.results
    })
    .catch(()=>{
        properties.error= true
    })

    axios.get(mainUrl + "/search/tv" ,{
        params:{
            api_key: "25efb6124fbd30cb0ddc75796834305a",
            query: properties.searchText,
            page: properties.pageSelected,
            language: properties.languageSelected 
        }
    })
    .then(resp=>{
        console.log(resp.data.results);
        properties.series = resp.data.results
    })
    .catch(()=>{
        properties.error=true
    }

    )
}


export function flagInsert(type, countriesFlag) {
    let original_language = type.original_language.toUpperCase()
    if (original_language === "EN") {
        original_language = "US"
    }
    return countriesFlag[`${original_language}`]
}


export function typeImgFetch(type) {
    const baseUrl = "https://image.tmdb.org/t/p/"
    return baseUrl + this.imageDimension + type.poster_path
}


export function gradeModify(type) {
    let typeGradeChanged = Math.ceil(type.vote_average / 2)
    return typeGradeChanged
}
