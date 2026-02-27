<script lang="ts">
	import { enhance } from '$app/forms';
	import SectionDivider from '$lib/components/ui/SectionDivider.svelte';

	let formResult: { success?: boolean; error?: string } | null = $state(null);
	let submitting = $state(false);

	const galleryItems = [
		{ file: 'gallery-01.jpg', style: 'Bare Elegance', alt: 'Pearl drape with red curtain backdrop' },
		{ file: 'gallery-02.jpg', style: 'Bare Elegance', alt: 'Dramatic dark bodyscape with red heels' },
		{ file: 'gallery-03.jpg', style: 'Bold & Editorial', alt: 'Red circle chair with fishnet stockings' },
		{ file: 'gallery-04.jpg', style: 'Old Hollywood', alt: 'Masked woman with red curtain, theatrical' },
		{ file: 'gallery-05.jpg', style: 'Bare Elegance', alt: 'Back silhouette with red lingerie' },
		{ file: 'gallery-06.jpg', style: 'Bold & Editorial', alt: 'Black and white dramatic portrait' },
		{ file: 'gallery-07.jpg', style: 'Classic Elegance', alt: 'Window light silhouette in black and white' },
		{ file: 'gallery-08.jpg', style: 'Classic Elegance', alt: 'Beauty close-up in warm tones' },
		{ file: 'gallery-09.jpg', style: 'Old Hollywood', alt: 'Gold curtain with warm amber and black lace' },
		{ file: 'gallery-10.jpg', style: 'Bold & Editorial', alt: 'Red lingerie with black wings, empowered' },
		{ file: 'gallery-11.jpg', style: 'Bare Elegance', alt: 'Back silhouette with pearl cascade' },
		{ file: 'gallery-12.jpg', style: 'Soft Romance', alt: 'Pink robe with floral backdrop' },
		{ file: 'gallery-13.jpg', style: 'Soft Romance', alt: 'Smiling woman on bed, warm and approachable' },
		{ file: 'gallery-14.jpg', style: 'Old Hollywood', alt: 'Pink tulle with theatrical amber lighting' },
		{ file: 'gallery-15.jpg', style: 'Bold & Editorial', alt: 'Plus-size woman in fur coat' },
		{
			file: 'gallery-16.jpg',
			style: 'Classic Elegance',
			alt: 'Elegant woman in ruffled leather coat, editorial confidence'
		}
	];

	const collages = [
		{ file: 'collage-01.jpg', alt: 'Eleonora: casual to warm boudoir portrait in pink lace' },
		{ file: 'collage-02.jpg', alt: 'Kristina: casual to dreamy pink tulle robe, soft floral' },
		{
			file: 'collage-03.jpg',
			alt: 'Lyudmila: everyday to dramatic glam with pearls and fur stole'
		},
		{
			file: 'collage-04.jpg',
			alt: 'Tatiana: casual to ethereal maternity in flowing white fabric'
		}
	];
</script>

<svelte:head>
	<title>Become a Muse | Noran Shine Studio</title>
	<meta
		name="description"
		content="Apply to be a muse at Noran Shine Studio in Lithia, FL. An exclusive creative boudoir session for real women — all ages, all sizes."
	/>
	<meta property="og:title" content="Become a Muse | Noran Shine Studio" />
	<meta
		property="og:description"
		content="We're looking for women ready to be seen — beautifully, powerfully, and on their own terms."
	/>
</svelte:head>

<!-- ════════════════════════════════════════════════════════
     SECTION 1 — HERO
     ════════════════════════════════════════════════════════ -->
<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Hero background image -->
	<img
		src="/images/model-call/hero.jpg"
		alt=""
		class="absolute inset-0 h-full w-full object-cover object-top"
		loading="eager"
	/>

	<!-- Dark overlay -->
	<div class="absolute inset-0 bg-slate-950/75"></div>

	<!-- Logo overlay — slightly left of center -->
	<div class="absolute left-[43%] top-8 z-10 -translate-x-1/2 md:top-12">
		<img src="/logo.png" alt="Noran Shine Photography Muse" class="w-56 md:w-72" />
	</div>

	<!-- Bottom fade into next section -->
	<div class="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-slate-950"></div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h1
			class="font-serif text-5xl font-light leading-tight tracking-widest text-white md:text-7xl lg:text-8xl"
		>
			We Are Looking for Our Muses
		</h1>
		<p
			class="mt-4 font-serif text-2xl tracking-wide text-gold md:text-3xl"
			style="font-family: 'Cormorant Garamond', serif;"
		>
			Be the Face of Our Next Creative Projects
		</p>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
			An invitation to women who are ready to be seen — beautifully, powerfully, and on their
			own terms.
		</p>
		<a
			href="#apply"
			class="mt-10 inline-block rounded-full bg-gradient-to-r from-[#a8792a] via-[#c9a84c] to-[#d4b56a] px-10 py-3.5 font-sans text-sm uppercase tracking-widest text-slate-950 shadow-lg shadow-[#c9a84c]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#c9a84c]/40"
		>
			Apply to be a Muse &rarr;
		</a>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 2 — WHO I'M LOOKING FOR (hummingbird statement)
     ════════════════════════════════════════════════════════ -->
<section class="relative flex min-h-[65vh] items-center overflow-hidden">
	<!-- Hummingbird background -->
	<img
		src="/brand/hummingbird-duo-left.jpg"
		alt=""
		class="absolute inset-0 h-full w-full object-cover object-left"
		loading="lazy"
	/>

	<!-- Gradient: lighter left (birds visible), darker right (text readable) -->
	<div class="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/55 to-slate-950/88"></div>

	<!-- Top fade — blends from hero -->
	<div class="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-slate-950 to-transparent"></div>

	<!-- Bottom fade into next section -->
	<div class="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950"></div>

	<!-- Content: starts just after the birds (~50% from left) -->
	<div class="relative z-10 w-full px-6 py-20 md:py-0">
		<div class="mx-auto max-w-lg md:ml-[62%] md:max-w-sm lg:max-w-md">
			<!-- Tagline -->
			<p class="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
				Empowering &bull; Glam &bull; Boudoir Portraits &nbsp;&middot;&nbsp; Noran Shine Studio,
				Lithia FL
			</p>

			<!-- Statement copy -->
			<div class="space-y-5 font-serif text-lg leading-relaxed text-white/90 md:text-xl">
				<p>Let me be direct — I am <em>not</em> searching for professional models.</p>
				<p>
					I am looking for <span class="text-gold">real women</span>. Women in their 30s, 40s,
					50s, and 60s — every shape, every story — ready to help bring my next creative vision
					to life.
				</p>
				<p>And I am not a photographer still finding her way.</p>
				<p>
					I am a professional, certified, and published portrait artist — expanding into deeper,
					more empowering photographic experiences for women. And I want <em>you</em> to be part
					of it.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 3 — THE INVITATION (candlelight)
     ════════════════════════════════════════════════════════ -->
<section class="relative flex min-h-screen flex-col justify-start overflow-hidden">
	<!-- Candlelight background -->
	<img
		src="/images/model-call/candlelight.jpg"
		alt=""
		class="absolute inset-0 h-full w-full object-cover object-[center_65%]"
		loading="lazy"
	/>

	<!-- Dark mysterious overlay -->
	<div class="absolute inset-0 bg-slate-950/65"></div>

	<!-- Top fade — blends from hummingbird section -->
	<div class="pointer-events-none absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>

	<!-- Bottom fade into next section -->
	<div class="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-slate-950"></div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-44 text-center">
		<p class="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
			This is your invitation to experience a full studio session at Noran Shine Studio
		</p>

		<p class="font-serif text-lg leading-relaxed text-white/80 md:text-xl">
			Complimentary — in exchange for your participation in content creation and your permission
			to share your story as part of our upcoming campaigns.
		</p>

		<p class="mt-6 font-serif text-base italic text-white/55">As a thank you, you will receive:</p>

		<ul class="mt-12 space-y-14">
			{#each [
				{
					title: 'Three beautifully retouched portraits',
					desc: 'Full-resolution digital files of your choice — yours to keep, forever'
				},
				{
					title: 'Your story, honoured',
					desc: 'Shared through a personal interview and heartfelt testimonial'
				},
				{
					title: 'Your transformation, captured',
					desc: 'Behind-the-scenes imagery celebrating who you became'
				}
			] as { title, desc }}
				<li class="space-y-3">
					<div class="mx-auto h-px w-12 bg-gold/50"></div>
					<p class="mt-4 font-serif text-2xl font-light tracking-wide text-gold md:text-3xl">
						{title}
					</p>
					<p class="text-base leading-relaxed tracking-wide text-white/70">{desc}</p>
				</li>
			{/each}
		</ul>

		<div class="mt-14">
			<a
				href="#apply"
				class="inline-block rounded-full bg-gradient-to-r from-[#a8792a] via-[#c9a84c] to-[#d4b56a] px-12 py-4 font-sans text-sm uppercase tracking-widest text-slate-950 shadow-lg shadow-[#c9a84c]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#c9a84c]/40"
			>
				Apply Now &rarr;
			</a>
		</div>

	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 4 — YOUR FULL EXPERIENCE (hummingbird right)
     ════════════════════════════════════════════════════════ -->
<section class="relative flex min-h-[65vh] items-center overflow-hidden">
	<!-- Hummingbird background — birds on right -->
	<img
		src="/brand/hummingbird-duo-right.jpg"
		alt=""
		class="absolute inset-0 h-full w-full object-cover object-right"
		loading="lazy"
	/>

	<!-- Gradient: darker left (text readable), lighter right (birds visible) -->
	<div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/15"></div>

	<!-- Top fade -->
	<div class="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent"></div>

	<!-- Bottom fade -->
	<div class="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950"></div>

	<!-- Content: LEFT side -->
	<div class="relative z-10 w-full px-6 py-20 md:py-0">
		<div class="mx-auto max-w-lg md:ml-auto md:mr-[62%] md:max-w-sm lg:max-w-md">
			<!-- Opening statement — same structure as tagline -->
			<p class="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">We are looking for five women to join our new empowering portrait series.</p>

			<div class="space-y-5 font-serif text-lg leading-relaxed md:text-xl">
				<!-- Experience label -->
				<p class="text-white/90">Your experience includes:</p>

				<!-- Experience items: gold title + white description -->
				<p><span class="text-gold">A Personalised Preparation Journey</span> — <span class="text-white/90">a one-on-one consultation to craft your story, vision, and style, plus prep guides and styling support so you arrive feeling confident and cared for.</span></p>

				<p><span class="text-gold">An Unforgettable Studio Experience</span> — <span class="text-white/90">expert posing guidance, access to our curated wardrobe of gowns, angel wings, and body jewellery, with up to three complete looks.</span></p>

				<p><span class="text-gold">Your Same-Day Cinematic Reveal</span> — <span class="text-white/90">a breathtaking unveiling of your most stunning portraits right after your session.</span></p>

				<p><span class="text-gold">Three Fully Retouched Digital Portraits</span> — <span class="text-white/90">full-resolution files of your choice, yours to keep forever.</span></p>

				<!-- Investment note — slightly bigger -->
				<p class="pt-3 text-xl leading-relaxed text-white/90 md:text-2xl">
					Your investment: a $230 glam fee covering professional hair &amp; makeup — payable upfront, and fully applicable as a credit toward any additional portraits, if you decide so.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 4 — WHAT WE ASK IN RETURN
     ════════════════════════════════════════════════════════ -->
<section class="bg-slate-950 px-6 py-24 md:py-32">
	<div class="mx-auto max-w-3xl">
		<h2 class="text-center text-gold">This is a creative collaboration.</h2>
		<p class="mt-4 text-center text-lg text-slate-400">
			In exchange for the full experience, we ask for:
		</p>

		<ul class="mt-10 space-y-4 text-slate-300">
			{#each [
				'Signed model release — covering all media created during your session',
				'Images before, during, and after your session',
				'Behind-the-scenes video: hair & makeup process',
				'Behind-the-scenes video: your session',
				'Behind-the-scenes video: the ordering & reveal experience',
				'Images for our portfolio, social media, and in-studio samples (may include uncensored boudoir images — for professional use only)',
				'A Google, Facebook, or website review / testimonial',
				'A short video testimonial',
				'Blog post or guest blog contribution',
				'Word-of-mouth referrals'
			] as item}
				<li class="flex items-start gap-3">
					<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"></span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>

		<p class="mt-10 text-center text-sm italic text-slate-400">
			Everything is done with care and professionalism. You will see and approve everything
			before it's used.
		</p>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 5 — THE STYLES (Gallery)
     ════════════════════════════════════════════════════════ -->
<section class="bg-slate-900 px-6 py-24 md:py-32">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-center text-gold">Every woman has a style. We'll find yours.</h2>

		<div class="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
			{#each galleryItems as { file, style, alt }, i}
				<div class="group relative mb-4 overflow-hidden break-inside-avoid">
					<img
						src="/images/model-call/{file}"
						{alt}
						loading="lazy"
						class="w-full rounded-sm bg-slate-800 object-cover transition-transform duration-500 group-hover:scale-105"
						style="aspect-ratio: {i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/5' : '2/3'}"
					/>
					<div
						class="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<span class="p-4 font-serif text-sm tracking-wide text-gold">
							{style}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 6 — A NOTE FROM OLGA
     ════════════════════════════════════════════════════════ -->
<section class="relative overflow-hidden bg-slate-950 px-6 py-24 md:py-32">
	<!-- Hummingbird accent background -->
	<img
		src="/brand/hummingbird-single-ray.jpg"
		alt=""
		class="pointer-events-none absolute bottom-0 right-0 max-w-[400px] opacity-[0.12]"
	/>

	<div class="relative mx-auto max-w-4xl md:flex md:items-center md:gap-12">
		<!-- Portrait -->
		<div class="mb-8 flex-shrink-0 md:mb-0">
			<div class="mx-auto h-64 w-64 overflow-hidden rounded-full border-2 border-gold/30 md:h-80 md:w-80">
				<img
					src="/images/model-call/olga.jpg"
					alt="Olga, photographer and founder of Muse by Noran Shine"
					loading="lazy"
					class="h-full w-full object-cover object-top"
				/>
			</div>
		</div>

		<!-- Bio -->
		<div>
			<h2 class="text-gold">I see you — before the lens ever does.</h2>
			<div class="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
				<p>
					I'm Olga — the photographer and founder of Muse by Noran Shine. I've spent years
					helping women discover something they didn't expect to find: themselves.
				</p>
				<p>
					In my studio in Lithia, FL, I create a space where you can exhale. Where the
					lighting is soft, the pace is slow, and every moment is designed around you — not
					a shot list.
				</p>
				<p>
					These sessions aren't about the final image. They're about who you become in the
					process of creating it.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 7 — THE TRANSFORMATION
     ════════════════════════════════════════════════════════ -->
<section class="bg-slate-900 px-6 py-24 md:py-32">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-gold">You already have everything you need.</h2>
		<p class="mt-4 text-lg text-slate-400">The woman you already are — finally seen.</p>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each collages as { file, alt }}
				<div class="overflow-hidden rounded-sm">
					<img
						src="/images/model-call/{file}"
						{alt}
						loading="lazy"
						class="w-full bg-slate-800 object-cover"
						style="aspect-ratio: 3/4"
					/>
				</div>
			{/each}
		</div>

		<p class="mt-8 text-sm italic text-slate-500">Real women. Real transformations.</p>
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION 8 — APPLY FORM
     ════════════════════════════════════════════════════════ -->
<section id="apply" class="scroll-mt-20 bg-slate-950 px-6 py-24 md:py-32">
	<div class="mx-auto max-w-2xl">
		<h2 class="text-center text-gold">Ready to become a Muse?</h2>
		<p class="mt-4 text-center text-slate-400">
			Spots are limited. We review every application personally.
		</p>

		{#if formResult?.success}
			<div class="mt-12 rounded-sm border border-gold/30 bg-slate-900 p-8 text-center">
				<p class="font-serif text-2xl text-gold">Thank you!</p>
				<p class="mt-3 text-slate-300">
					We'll be in touch personally. Keep an eye on your inbox.
				</p>
			</div>
		{:else}
			<form
				method="POST"
				action="?/apply"
				class="mt-12 space-y-6"
				use:enhance={() => {
					submitting = true;
					return async ({ result, update }) => {
						submitting = false;
						if (result.type === 'success') {
							formResult = { success: true };
						} else if (result.type === 'failure') {
							const msg = (result.data as { message?: string })?.message;
							formResult = { error: msg ?? 'Something went wrong. Please try again.' };
							await update();
						} else {
							await update();
						}
					};
				}}
			>
				{#if formResult?.error}
					<div class="rounded-sm border border-blush/50 bg-blush-900/20 px-4 py-3 text-sm text-blush-200">
						{formResult.error}
					</div>
				{/if}

				<!-- Name -->
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="firstName" class="mb-1 block text-sm text-slate-400"
							>First Name <span class="text-gold">*</span></label
						>
						<input
							type="text"
							id="firstName"
							name="firstName"
							required
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
						/>
					</div>
					<div>
						<label for="lastName" class="mb-1 block text-sm text-slate-400"
							>Last Name <span class="text-gold">*</span></label
						>
						<input
							type="text"
							id="lastName"
							name="lastName"
							required
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
						/>
					</div>
				</div>

				<!-- Email & Phone -->
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="email" class="mb-1 block text-sm text-slate-400"
							>Email Address <span class="text-gold">*</span></label
						>
						<input
							type="email"
							id="email"
							name="email"
							required
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
						/>
					</div>
					<div>
						<label for="phone" class="mb-1 block text-sm text-slate-400"
							>Phone Number <span class="text-gold">*</span></label
						>
						<input
							type="tel"
							id="phone"
							name="phone"
							required
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
						/>
					</div>
				</div>

				<!-- City & Travel -->
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="cityState" class="mb-1 block text-sm text-slate-400"
							>City &amp; State <span class="text-gold">*</span></label
						>
						<input
							type="text"
							id="cityState"
							name="cityState"
							required
							placeholder="e.g. Tampa, FL"
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
						/>
					</div>
					<fieldset>
						<legend class="mb-1 text-sm text-slate-400"
							>Able to travel to Lithia, FL? <span class="text-gold">*</span></legend
						>
						<div class="flex gap-4 pt-2">
							{#each ['Yes', 'No', 'Maybe'] as option}
								<label class="flex items-center gap-2 text-sm text-slate-300">
									<input
										type="radio"
										name="canTravel"
										value={option.toLowerCase()}
										required
										class="accent-gold-400"
									/>
									{option}
								</label>
							{/each}
						</div>
					</fieldset>
				</div>

				<!-- Age & Size -->
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="age" class="mb-1 block text-sm text-slate-400"
							>Age <span class="text-gold">*</span></label
						>
						<select
							id="age"
							name="age"
							required
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition-colors focus:border-gold focus:outline-none"
						>
							<option value="" disabled selected>Select age range</option>
							<option value="18-24">18–24</option>
							<option value="25-34">25–34</option>
							<option value="35-44">35–44</option>
							<option value="45-54">45–54</option>
							<option value="55-64">55–64</option>
							<option value="65+">65+</option>
						</select>
					</div>
					<div>
						<label for="clothingSize" class="mb-1 block text-sm text-slate-400"
							>Clothing Size <span class="text-slate-600">(optional)</span></label
						>
						<select
							id="clothingSize"
							name="clothingSize"
							class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition-colors focus:border-gold focus:outline-none"
						>
							<option value="" selected>Prefer not to say</option>
							<option value="XS">XS</option>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="Plus">Plus size</option>
						</select>
					</div>
				</div>

				<!-- What this means to you -->
				<div>
					<label for="meaningToYou" class="mb-1 block text-sm text-slate-400"
						>What would this experience mean to you? <span class="text-gold">*</span
						></label
					>
					<textarea
						id="meaningToYou"
						name="meaningToYou"
						required
						rows="4"
						class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
					></textarea>
				</div>

				<!-- What drew you -->
				<div>
					<label for="whatDrewYou" class="mb-1 block text-sm text-slate-400"
						>What drew you to apply? <span class="text-gold">*</span></label
					>
					<textarea
						id="whatDrewYou"
						name="whatDrewYou"
						required
						rows="3"
						class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
					></textarea>
				</div>

				<!-- Styles -->
				<fieldset>
					<legend class="mb-3 text-sm text-slate-400">Which styles speak to you?</legend>
					<div class="flex flex-wrap gap-4">
						{#each ['Classic Elegance', 'Old Hollywood', 'Bold & Editorial', 'Soft Romance', 'Bare Elegance'] as style}
							<label class="flex items-center gap-2 text-sm text-slate-300">
								<input
									type="checkbox"
									name="styles"
									value={style}
									class="accent-gold-400"
								/>
								{style}
							</label>
						{/each}
					</div>
				</fieldset>

				<!-- Instagram -->
				<div>
					<label for="socialHandle" class="mb-1 block text-sm text-slate-400"
						>Instagram or social handle <span class="text-slate-600">(optional)</span
						></label
					>
					<input
						type="text"
						id="socialHandle"
						name="socialHandle"
						placeholder="@yourusername"
						class="w-full border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 placeholder-slate-600 transition-colors focus:border-gold focus:outline-none"
					/>
				</div>

				<!-- Investment acknowledgment -->
				<label class="flex items-start gap-3 text-sm text-slate-300">
					<input
						type="checkbox"
						name="investmentAck"
						required
						class="mt-1 accent-gold-400"
					/>
					<span>
						I understand that a $230 hair &amp; makeup investment is required upfront to
						confirm my session. This amount applies as a credit toward any portrait
						package I choose. <span class="text-gold">*</span>
					</span>
				</label>

				<!-- Best time -->
				<fieldset>
					<legend class="mb-2 text-sm text-slate-400"
						>Best time to reach you <span class="text-gold">*</span></legend
					>
					<div class="flex gap-6">
						{#each ['Morning', 'Afternoon', 'Evening'] as time}
							<label class="flex items-center gap-2 text-sm text-slate-300">
								<input
									type="radio"
									name="bestTime"
									value={time.toLowerCase()}
									required
									class="accent-gold-400"
								/>
								{time}
							</label>
						{/each}
					</div>
				</fieldset>

				<!-- Ready within 4 weeks -->
				<label class="flex items-start gap-3 text-sm text-slate-300">
					<input
						type="checkbox"
						name="readyWithin4Weeks"
						required
						class="mt-1 accent-gold-400"
					/>
					<span>
						If selected, I am ready to move forward within 4 weeks.
						<span class="text-gold">*</span>
					</span>
				</label>

				<!-- Submit -->
				<div class="pt-4 text-center">
					<button
						type="submit"
						disabled={submitting}
						class="inline-block border border-gold px-10 py-3 text-sm uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{submitting ? 'Submitting...' : 'Submit My Application'}
					</button>
				</div>
			</form>
		{/if}
	</div>
</section>

<!-- ════════════════════════════════════════════════════════
     MINIMAL FOOTER
     ════════════════════════════════════════════════════════ -->
<footer class="border-t border-white/10 bg-[#0d0d0d] py-10 text-center">
	<div class="mx-auto mb-4 inline-block">
		<img
			src="/logo.png"
			alt="Noran Shine Photography Muse"
			class="h-16 w-auto"
		/>
	</div>
	<p class="text-sm italic text-white/60">
		Luxury boudoir photography studio in Lithia, FL.
	</p>
	<p class="mt-2 text-xs text-white/40">Lithia, FL</p>

	<!-- Social icons -->
	<div class="mt-4 flex items-center justify-center gap-6">
		<a
			href="https://www.instagram.com/noranshine"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white/40 transition-all hover:scale-110 hover:text-gold"
			aria-label="Instagram"
		>
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
				/>
			</svg>
		</a>
		<a
			href="https://www.facebook.com/Noranshinestudio"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white/40 transition-all hover:scale-110 hover:text-gold"
			aria-label="Facebook"
		>
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
				/>
			</svg>
		</a>
	</div>

	<!-- Legal -->
	<p class="mt-4 text-xs text-white/30">
		<a href="/privacy-policy" class="underline transition-colors hover:text-white/50">Privacy Policy</a>
		&middot; &copy; {new Date().getFullYear()} Muse by Noran Shine. All rights reserved.
	</p>
</footer>
