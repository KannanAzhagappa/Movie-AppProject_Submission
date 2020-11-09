const API_KEY = "461fa54bb20ff05c3d6d3f2c61abf4b1";

const requests = {
  fetchBanner: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`,
};

export default requests;
