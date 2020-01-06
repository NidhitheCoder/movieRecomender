export const baseUrl =
  process.env.REACT_APP_BACKEND_URI ||
  'hjgjgjhj';

export const apiEndPoints = {
  login: () => `${baseUrl}/users/login`,
  GetAllMoviesList: () =>"https://cdn-discover.hooq.tv/v1.5/discover/collections/5dabcee7-9863-44f7-98c9-1854a7723de1/titles?titleType=MOVIE&page=1&perPage=40",
  GetLikedMoviesList: () =>"https://cdn-discover.hooq.tv/v1.6/discover/collections/2ec914b4-20cb-4bbc-aed6-6f0d43e49e64/titles?titleType=MOVIE&page=1&perPage=16",
  GetWatchLaterMoviesList: () =>"https://cdn-discover.hooq.tv/v1.6/discover/collections/9b59eeb6-7e05-4029-8f8c-5933423bdc07/titles?titleType=MOVIE&page=1&perPage=16",
  GetMovieDetailsById: (movieid) =>"https://cdn-discover.hooq.tv/v1.6/discover/titles/" + movieid

};

