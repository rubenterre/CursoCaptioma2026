	import {VITE_API_KEY} from '$env/static/private';

    export async function load() {

        const urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${VITE_API_KEY}&language=es-ES&page=1`;

			const response = await fetch(urlSeries);
			const data = await response.json();
            let popular = data.results
			
        return {
            popular
        }   

	}