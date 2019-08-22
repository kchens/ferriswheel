const baseUrl = 'https://api.themoviedb.org/3'
export const popularMoviesUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`
export const getSearchMoviesUrl = (query) => 
    `${baseUrl}/search/movie?api_key=${process.env.API_KEY}&query=${query}&language=en-US&include_adult=false`
