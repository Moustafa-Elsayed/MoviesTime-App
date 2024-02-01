import axios from 'axios';

const apiKey = '3af62cd49f66cd24b91a6bc952cd925b';
const baseUrl = 'https://api.themoviedb.org/3';

// endPoint
const trendingMoviesEndPoint = `${baseUrl}/trending/movie/day`;
const upComingMoviesEndPoint = `${baseUrl}/movie/upcoming`;
const topRatedMoviesEndPoint = `${baseUrl}/movie/top_rated`;
// dynamicendpiont
const MoviesDetailsEndPiont=id=>`${baseUrl}/movie/${id}`
const MoviesCreidtEndPiont=id=>`${baseUrl}/movie/${id}/credits`
const MoviessimilarEndPiont=id=>`${baseUrl}/movie/${id}/similar`




const apicall = async (endPoint, params) => {
  const options = {
    method: 'GET',
    url: endPoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apicall(trendingMoviesEndPoint, {api_key: apiKey});
};

export const fetchUpcomingMovies = () => {
  return apicall(upComingMoviesEndPoint, {api_key: apiKey});
};

export const fetchTopRatedMovies = () => {
  return apicall(topRatedMoviesEndPoint, {api_key: apiKey});
};
export const fetchMoviesDetails = () => {
  return apicall(MoviesDetailsEndPiont, {api_key: apiKey});
};
export const fetchMoviescredits = () => {
  return apicall(MoviesCreidtEndPiont, {api_key: apiKey});
};
export const fetchMoviesSimilar = () => {
  return apicall(MoviessimilarEndPiont, {api_key: apiKey});
};
