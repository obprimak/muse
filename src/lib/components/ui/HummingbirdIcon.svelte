<script lang="ts">
	interface Props {
		src: string;
		size?: 'sm' | 'md' | 'lg';
		alt?: string;
		class?: string;
	}

	const sizeMap = { sm: 32, md: 48, lg: 64 };

	let { src, size = 'md', alt = 'Muse by Noran Shine', class: className = '' }: Props = $props();
</script>

<img
	{src}
	{alt}
	width={sizeMap[size]}
	height={sizeMap[size]}
	class="object-contain {className}"
	style="width: {sizeMap[size]}px; height: {sizeMap[size]}px;"
/>
