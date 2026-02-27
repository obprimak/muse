<script>
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	{#if page.url.pathname !== '/model-call'}
		<Navigation />
	{/if}
	<main class="flex-1" class:pt-16={page.url.pathname !== '/model-call'}>
		{@render children()}
	</main>
	{#if page.url.pathname !== '/model-call'}
		<Footer />
	{/if}
</div>
