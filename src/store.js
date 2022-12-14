import axios from "axios";
import { reactive } from "vue";

export const properties = reactive({
    searchText: '',
    movies: [],
    series: [],
    pageSelectedMovies: 1,
    pageSelectedSeries: 1,
    languageSelected: "it-IT",
    errorMovies: false,
    errorSeries: false,
    errorLastPageMovies: false,
    savedWord: ''

})

export function fetchSearchedRequest() {
    properties.errorMovies = false;
    properties.errorSeries = false;
    properties.errorLastPageMovies = false;
    properties.errorLastPageSeries = false;
    const mainUrl = "https://api.themoviedb.org/3"
    axios.get(mainUrl + "/search/movie", {
        params: {
            api_key: "25efb6124fbd30cb0ddc75796834305a",
            query: properties.searchText,
            page: properties.pageSelectedMovies,
            language: properties.languageSelected
        }
    })
        .then(resp => {
            properties.movies = resp.data.results

            if (properties.movies.length === 0 && properties.pageSelectedMovies != 1) {
                properties.errorLastPageMovies = true;
            } else if (properties.movies.length === 0) {
                properties.errorMovies = true
            }
        })
        .catch(() => {
            properties.errorMovies = true
        })

    axios.get(mainUrl + "/search/tv", {
        params: {
            api_key: "25efb6124fbd30cb0ddc75796834305a",
            query: properties.searchText,
            page: properties.pageSelectedSeries,
            language: properties.languageSelected
        }
    })
        .then(resp => {
            properties.series = resp.data.results

            if (properties.series.length === 0 && properties.pageSelectedSeries != 1) {
                properties.errorLastPageSeries = true;
            } else if (properties.series.length === 0) {
                properties.errorSeries = true
            }
        })
        .catch(() => {
            properties.errorSeries = true
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
    baseUrl + this.imageDimension + type.poster_path;
    if (type.poster_path) {
        return baseUrl + this.imageDimension + type.poster_path
    } else {
        return "/notFound.jpg"
    }
}


export function gradeModify(type) {
    let typeGradeChanged = Math.ceil(type.vote_average / 2)
    return typeGradeChanged
}


export function changePage(increment, type) {
    if (type) {
        if (increment) {
            if (properties.movies.length) {
                properties.pageSelectedMovies++;
                fetchSearchedRequest()
            }
        } else {
            if (properties.pageSelectedMovies > 1) {
                properties.pageSelectedMovies--;
                fetchSearchedRequest()

            } else {
                properties.pageSelectedMovies = 1
            }
        }

    } else {
        if (increment) {
            if (properties.series.length) {
                properties.pageSelectedSeries++;
                fetchSearchedRequest()
            }
        } else {
            if (properties.pageSelectedSeries > 1) {
                properties.pageSelectedSeries--;
                fetchSearchedRequest()

            } else {
                properties.pageSelectedSeries = 1
            }
        }
    }
}
