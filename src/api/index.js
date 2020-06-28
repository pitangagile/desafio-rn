import axios from "axios"
import { HEADERS, TIMEOUT, URL_BASE } from "../utils/configs"
import { MovieInfo } from "../utils/objects"

export async function fetchMovies() {
    const response = await axios({
        method: "GET",
        url: `${URL_BASE}list?page=0&size=100`,
        params: null,
        data: null,
        headers: HEADERS,
        responseType: "json",
        timeout: TIMEOUT,
    })
    return response.data.map((movie) => new MovieInfo(movie))
}

export async function fetchMovieInfo(movieId) {
    const response = await axios({
        method: "GET",
        url: `${URL_BASE}detail/${movieId}`,
        params: null,
        data: null,
        headers: HEADERS,
        responseType: "json",
        timeout: TIMEOUT,
    })
    return new MovieInfo(response.data)
}
