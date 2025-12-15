<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header></Header>

{@render children()}

<style>
	:global(*) {
	  margin: 0;
	  padding: 0;
	  outline: 0;
	  box-sizing: border-box;
	}

	:global(html){
	  font-size: 14px;
	}
	
	:global(body) {
	 background: black;
	 color: white;
	 -webkit-font-smoothing: antialiased;
	}
	
	:global(body, input, button) {
	 font-family: sans-serif;
	}
	
	:global(button) {
	 cursor: pointer;
	}
</style>