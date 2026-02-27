<script lang="ts">
	import { page } from '$app/state';

	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/model-call', label: 'Model Call' },
		{ href: '/book', label: 'Book a Session' },
		{ href: '/contact', label: 'Contact' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav class="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 font-serif text-2xl font-light tracking-editorial text-gold">
			<img
				src="/brand/hummingbird-logo-round.jpg"
				alt="Muse by Noran Shine logo"
				class="h-10 w-auto"
			/>
			Muse
		</a>

		<!-- Desktop links -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="text-sm tracking-wide text-slate-300 transition-colors hover:text-gold {page.url
							.pathname === link.href
							? 'text-gold'
							: ''}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Hamburger button (mobile) -->
		<button
			class="flex flex-col gap-1.5 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
		>
			<span
				class="block h-0.5 w-6 bg-slate-300 transition-transform {mobileOpen
					? 'translate-y-2 rotate-45'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-slate-300 transition-opacity {mobileOpen
					? 'opacity-0'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-slate-300 transition-transform {mobileOpen
					? '-translate-y-2 -rotate-45'
					: ''}"
			></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md md:hidden">
			<ul class="flex flex-col px-6 py-4">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							onclick={closeMobile}
							class="block py-3 text-sm tracking-wide text-slate-300 transition-colors hover:text-gold {page
								.url.pathname === link.href
								? 'text-gold'
								: ''}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
