<script>
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	$: isStandalone = $page.url.pathname === '/model-call';
</script>

<div class="flex min-h-screen flex-col">
	{#if !isStandalone}
		<Navigation />
	{/if}
	<main class="flex-1" class:pt-16={!isStandalone}>
		{@render children()}
	</main>
	{#if !isStandalone}
		<Footer />
	{/if}
</div>
