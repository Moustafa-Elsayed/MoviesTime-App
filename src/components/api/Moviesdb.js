import axios from "axios";
import { Path } from "react-native-svg";

const apiKey = "3af62cd49f66cd24b91a6bc952cd925b";
const baseUrl = "https://api.themoviedb.org/3";
export const img=Path=>Path?`https://image.tmdb.org/t/p/w500${Path}`:null;

// endPoint
const trendingMoviesEndPoint = `${baseUrl}/trending/movie/day`;
const upComingMoviesEndPoint = `${baseUrl}/movie/upcoming`;
const topRatedMoviesEndPoint = `${baseUrl}/movie/top_rated`;

const apicall = async (endPoint, params) => {
  const options = {
    method: "GET",
    url: endPoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apicall(trendingMoviesEndPoint, { api_key: apiKey });
};

export const fetchUpcomingMovies = () => {
  return apicall(upComingMoviesEndPoint, { api_key: apiKey });
};

export const fetchTopRatedMovies = () => {
  return apicall(topRatedMoviesEndPoint, { api_key: apiKey });
};
