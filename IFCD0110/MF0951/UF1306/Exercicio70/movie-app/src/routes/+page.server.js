import { VITE_API_KEY } from '$env/static/private';

export async function load() {
    
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${VITE_API_KEY}&language=es-ES&page=1`;

    const response = await fetch(apiUrl);
    const movies = await response.json();

    if (!response.ok) {
    throw new Error('Error ao cargar series populares');
    }

return {
    movies: movies.results
}

}

