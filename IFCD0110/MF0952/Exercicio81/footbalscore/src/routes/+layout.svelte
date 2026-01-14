<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
 scroll-behavior: smooth
}

@font-face{
	font-family: "Poppins-Medium";
	src: url(/fonts/Poppins-Medium.ttf);
}

@font-face{
	font-family: "Poppins-SemiBold";
	src: url(/fonts/Poppins-SemiBold.ttf);
}

@font-face{
	font-family: "Poppins-Regular";
	src: url(/fonts/Poppins-Regular.ttf);
}


:root{
	--color-primary: #181928;
	--color-secondary: #414158;
	--color-tertiary: #222232;
	--color-gray: #999;
	--color-light: #fff;
	--color-gradient: linear-gradient( 90deg , rgba(69, 104, 220, 1) 0% , rgba(176, 106, 179, 1) 100% );
	--font-primary: "Poppins-Medium";
	--font-secondary: "Poppins-SemiBold";
	--font-tertiary: "Poppins-Regular";
}

:global(body) {
 background: var(--color-primary);
 color: var(--color-light);
 -webkit-font-smoothing: antialiased;
}

:global(body, input, button) {

 font-family: var(--font-primary);
}

:global(button) {
 cursor: pointer;
}


</style>