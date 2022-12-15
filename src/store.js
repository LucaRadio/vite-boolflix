
import axios from "axios";
import { reactive } from "vue";

export const properties = reactive({
    searchText: '',
    // movies: [],
    // series: [],
    pageSelectedMovies: 1,
    pageSelectedSeries: 1,
    languageSelected: "it-IT",
    errorMovies: false,
    errorSeries: false,
    errorLastPageMovies: false,
    savedWord: '',
    showButton: false,
    genresMoviesList: [],
    genresSeriesList: [],
    genresMoviesSelected: 'All',
    genresSeriesSelected: 'All',
    // genreSelectedId: ''

})

export function fetchSearchedRequest() {
    properties.showButton = true;
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
            language: properties.languageSelected,
            // genre_ids: 27
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
            language: properties.languageSelected,
            // genre_ids: properties.genresIdSelected
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
    if (original_language === "JA") {
        original_language = "JP"
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

    const key = "pageSelected" + ((type.charAt(0)).toUpperCase() + type.slice(1));

    if (increment) {
        if (properties[type].length) {
            properties[key]++;
            fetchSearchedRequest();
        }
    } else {
        if (properties[key] > 1) {
            properties[key]--;
            fetchSearchedRequest()
        } else {
            properties[key] = 1;
        }
    }
}

export function fetchCast(type, typeObj, id) {
    axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
        params: {
            api_key: "25efb6124fbd30cb0ddc75796834305a"
        }
    })
        .then(resp => {
            const cast = []
            if (resp.data.cast.length) {
                for (let i = 0; i < 5; i++) {
                    if (resp.data.cast[i] != undefined) {
                        cast.push(resp.data.cast[i])

                    }
                }

                return typeObj.cast = cast
            } else {
                alert("There's not a cast in our database for this " + type)
            }

        })

}

export function resetCast(type) {
    type.cast = []
}

export function fetchGenre() {
    axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
            api_key: "25efb6124fbd30cb0ddc75796834305a"
        }
    })
        .then(resp => {
            properties.genresMoviesList = resp.data.genres
        })



    axios.get('https://api.themoviedb.org/3/genre/tv/list', {
        params: {
            api_key: "25efb6124fbd30cb0ddc75796834305a"
        }
    })
        .then(resp => {
            properties.genresSeriesList = resp.data.genres
        })
}

export function fetchIdGenre() {
    properties.genresMoviesList.forEach(item => {
        // console.log(item);
        if (item.name.toLowerCase() === properties.genresMoviesSelected.toLowerCase()) {
            return properties.genreSelectedId = item.id
        }
    })
}