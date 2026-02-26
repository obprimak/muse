<script>
	let { children } = $props();
</script>

<article class="prose prose-invert mx-auto max-w-3xl px-4 py-12">
	{@render children()}
</article>
