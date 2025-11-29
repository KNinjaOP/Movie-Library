export const getPopularMovies = async () => {
  const response = await fetch("/api/popular");
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};
