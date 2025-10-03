<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/main.css';
	import '$lib/assets/normalize.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Christos Diamantis</title>
</svelte:head>


{@render children?.()}