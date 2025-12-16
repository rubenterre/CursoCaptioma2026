<script>
  export let data; 
</script>


{#each data.movies as movie }

<div class="card">
    <p>{movie.name}</p>
</div>
    
{/each}

