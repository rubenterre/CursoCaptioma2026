<script>
	const fetchEquipos = async () => {
		const ID_EQUIPO = window.location.pathname.replace('/', '');

		const equipos = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${ID_EQUIPO}`;

		const res = await fetch(equipos);
		const data = await res.json();
		console.log(data.results);
		return data.results[0];
	};

	let promise = fetchEquipos();
</script>

<header class="header">
	<nav class="header__nav">
		<a class="header__a" href="/">
			<img class="header__img" src="./assets/img/arrow.svg" alt="Icono de frecha" />
		</a>
		<h2 class="header__h2">Último partido</h2>
		<a class="header__a" href="/">
			<img class="header__img" src="./assets/img/info_icon.svg" alt="Icono de información" />
		</a>
	</nav>
</header>

<section class="evento">
	{#await promise}
		<p>Cargando resultado do evento...</p>
	{:then equiposLiga}
		{#if equiposLiga}
			<div class="evento__resultados">
				<div class="evento__escudo">
					<img
						src={equiposLiga.strHomeTeamBadge}
						alt={equiposLiga.strHomeTeam}
						class="evento__img"
					/>
				</div>

				<div class="evento__resultado">
					<p class="evento__status">{equiposLiga.strStatus}</p>

					<div class="evento__marcador">
						<h2 class="evento__h2">{equiposLiga.intHomeScore}</h2>
						<h2 class="evento__h2">-</h2>
						<h2 class="evento__h2">{equiposLiga.intAwayScore}</h2>
					</div>
				</div>

				<div class="evento__escudo">
					<img
						src={equiposLiga.strAwayTeamBadge}
						alt={equiposLiga.strAwayTeam}
						class="evento__img"
					/>
				</div>
			</div>

			<div class="evento__detalles">
                <h3 class="evento__h3">Estadisticas do partido</h3>
                <div class="evento__datos">
                    <div class="evento__box">
                        <p class="evento__label">Data do evento:</p>
                        <p class="evento__dato">{equiposLiga.dateEventLocal}</p>
                    </div>
                    <div class="evento__box">
                        <p class="evento__label">Hora do evento:</p>
                        <p class="evento__dato">{equiposLiga.strTimeLocal}</p>
                    </div>
                    <div class="evento__box">
                        <p class="evento__label">Xornada:</p>
                        <p class="evento__dato">{equiposLiga.intRound}</p>
                    </div>
                    <div class="evento__box">
                        <p class="evento__label">Liga:</p>
                        <p class="evento__dato">{equiposLiga.strLeague}</p>
                    </div>
                    <div class="evento__box">
                        <p class="evento__label">Tempada:</p>
                        <p class="evento__dato">{equiposLiga.strSeason}</p>
                    </div>
                    <div class="evento__box">
                        <p class="evento__label">País:</p>
                        <p class="evento__dato">{equiposLiga.strCountry}</p>
                    </div>
                    <div class="evento__box">
                        <p class="evento__label">Estadio:</p>
                        <p class="evento__dato">{equiposLiga.strVenue}</p>
                    </div>
                </div>
            </div>
		{/if}
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</section>

<style>
	.header__nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 10px;
	}


    .evento{
        padding: 2rem;
    }

	.evento__resultados {
		display: flex;
		justify-content: space-around;
	}

		.evento__resultado {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.evento__status{
		color: greenyellow;
	}

.evento__marcador{
	display: flex;
	align-items: center;
}

	.evento__escudo {
		background-color: var(--color-secondary);
		border-radius: 100px;
		height: 94px;
		width: 94px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.evento__img {
		max-width: 80px;
	}

    /* Detalles do evento */

    .evento__detalles{
        width: 100%;
        padding: 2rem 0px;
    }

    .evento__h3{
        text-align: center;
        margin-bottom: 1rem;
    }

    .evento__datos{
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    .evento__box{
        display: flex;
        justify-content: space-between;
    }

    .evento__label{
        color: var(--color-gray);
        font-weight: 600;
    }

</style>
