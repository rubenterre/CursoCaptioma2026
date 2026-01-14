<script>
	const equipos =
		'https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=Spanish_La_Liga';

	const fetchEquipos = async () => {
		const res = await fetch(equipos);
		const data = await res.json();
		return data.teams;
	};

	let promise = fetchEquipos();
</script>

<section class="teams">
	<div class="teams__title">
		<h2 class="teams__h2">Escolle o teu clube</h2>
	</div>

	<div class="teams__cards">
		{#await promise}
			<p>Cargando equipos...</p>
		{:then equiposLiga}
			{#each equiposLiga as team}
				<!-- Empieza cada card -->
				<a class="teams__a" href="/{team.idTeam}">
					<div class="teams__container">
						<div class="teams__card">
							<div class="teams__badge">
								<img class="teams__img" src={team.strBadge} alt={team.strTeam} />
							</div>
						</div>
						<p class="teams__name">{team.strTeam}</p>
					</div>
				</a>
				<!-- Finaliza cada card -->
			{/each}
		{:catch error}
			<p>Error: {error.message}</p>
		{/await}
	</div>
	<!-- <button class="teams__button"> SELECCIONA CLUBE </button> -->
</section>

<style>
	.teams {
		padding: 1.1rem;
	}

	.teams__title {
		width: 100%;
	}

	.teams__h2 {
		text-align: center;
		font-family: var(--font-secondary);
		font-size: 1.4rem;
		color: var(--color-light);
	}

	.teams__cards {
		padding: 1rem 0px;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.teams__container {
		display: flex;
		gap: 10px;
		flex-direction: column;
		width: 94px;
	}

	.teams__a {
		color: var(--color-light);
		text-decoration: none;
	}

	.teams__card {
		background-color: var(--color-tertiary);
		border-radius: 100px;
		width: 94px;
		height: 94px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.teams__badge {
		background-color: var(--color-secondary);
		border-radius: 100px;
		width: 54px;
		height: 54px;
		display: flex;
		justify-content: center;
	}

	.teams__img {
		max-width: 80px;
	}

	.teams__name {
		text-align: center;
		height: 50px;
	}

	.teams__button {
		background: var(--color-gradient);
		width: 100%;
		color: var(--color-light);
		font-family: var(--font-primary);
		font-size: 1rem;
		padding: 1rem;
		border-radius: 8px;
		border: 0px;
	}
</style>
