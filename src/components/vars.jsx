//_____________________REQUESTS_MAIN________________________

export const MAIN_PART_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '?api_key=c861fc623ae12b9b041c6dade1c99e57';

//_____________________REQUESTS_IMAGES________________________
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const MOBILE_SIZES = 'w300';

//_____________________REQUESTS_PATHES________________________

export const TRENDS_REQUEST_PART = 'trending/all/day';// /get-trending' //'trending/movie/week'; список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const SEARCH_MOVIE = 'search/movie';//'search/movie';поиск кинофильма по ключевому слову на странице фильмов.
export const GET_MOVIE_DETAILS = 'movie/'; //запрос полной информации о фильме для страницы кинофильма.
export const Get_MOVIE_CREDITS = '/credits'; //запрос информации о актёрском составе для страницы кинофильма.
export const Get_MOVIE_REWIEWS = '/reviews'; //запрос обзоров для страницы кинофильма.
  