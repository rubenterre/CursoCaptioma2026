<script>
	const API_KEY = import.meta.env.VITE_API_KEY;

	let popular = [];

	async function seriesPopular() {
		try {
			const urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=es-ES&page=1`;

			const response = await fetch(urlSeries);
			const data = await response.json();
			popular = data.results;
			console.log(popular);
		} catch {
			('Non se atopa a serie');
		}
	}

	seriesPopular();
    
</script>

<h1>Ola dende Sveltekit</h1>
<p>Esta é a primeira páxina que fago co framework Sveltekit</p>

<div class="main">
	<div class="container">
		{#each popular as serie}
			<div class="card">
				<img
					class="card__img"
					src="https://image.tmdb.org/t/p/w500/{serie.poster_path}"
					alt={serie.name}
				/>
				<p class="card__p">{serie.name}</p>
			</div>
		{/each}
	</div>
</div>

<style>

    .main{
        display: flex;
        justify-content: center;
    }
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		max-width: 800px;
	}

	.card {
		width: 150px;
	}

	.card__img {
		width: 150px;
	}
</style>
