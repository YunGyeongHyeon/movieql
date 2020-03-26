import fetch, { Request } from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUSET_URL = API_URL;
    if(limit > 0 ){
        REQUSET_URL += `+=${limit}`;
    }
    if(rating > 0){
        REQUSET_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUSET_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}
    