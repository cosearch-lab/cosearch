<script lang="ts">
	interface Tag {
		name: string;
		color: string;
	}

	let tags: Tag[] = [
		{ name: 'Decider', color: 'bg-red-800' },
		{ name: 'Formal Verification', color: 'bg-indigo-800' },
		{ name: 'Individual Machine', color: 'bg-teal-800' },
		{ name: 'Meta', color: 'bg-gray-800' }
	];

	interface Result {
		title: string;
		date: string;
		authors: string[];
		dependencies: null | string[];
		tags: Tag[];
		number_of_reviews: number;
		number_of_reproductions: null | number;
		number_of_views: number;
		number_of_stars: number;
		links?: null | string[];
	}

	let results: Result[] = [
		{
			title: '1RB2LA0LA_2LC---2RA_0RA2RC1LC does not halt',
			date: 'Jul 13',
			authors: ['Jason Yuen'],
			dependencies: null,
			tags: [tags[2], tags[1]],
			number_of_reviews: 0,
			number_of_reproductions: null,
			number_of_views: 10,
			number_of_stars: 1
		},
		{
			title: 'Coq-BB5',
			date: 'Apr 24',
			authors: ['mxdys'],
			dependencies: ['FAR', 'MITWFAR', 'n-gram CPS', 'busycoq'],
			tags: [tags[0], tags[1]],
			number_of_reviews: 1,
			number_of_reproductions: null,
			number_of_views: 10,
			number_of_stars: 150
		}
	];
</script>

<div class="w-[85%] mx-auto mt-5 text-md flex flex-col space-y-5">
	<div class="flex flex-col">
		<div class="text-xl">
			<strong>CoSearch</strong>
		</div>
		<div class="text-gray-700 text-sm">Massively Collaborative Research</div>
	</div>

	<div class="flex flex-col space-y-4">
		<div class="flex space-x-3">
			<div class="w-[80px]">
				<img src="/bbchallenge_logo_no_text.png" alt="bbchallenge logo" class="rounded-md" />
			</div>
			<div>
				<div><strong>The Busy Beaver Challenge</strong></div>
				<div><a href="https://bbchallenge.org">bbchallenge.org</a></div>
			</div>
		</div>

		<nav class="flex" aria-label="Breadcrumb">
			<ol role="list" class="flex items-center space-x-1">
				<li>
					<div>
						<a href="#" class="text-black hover:text-gray-500">
							<i class="fas fa-flag"></i>
							&nbsp; Results
						</a>
					</div>
				</li>
				<li>
					<div class="flex items-center">
						<svg
							class="h-5 w-5 flex-shrink-0 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</li>
			</ol>
		</nav>

		<div class="flex flex-col space-y-5 ml-2">
			{#each results as result}
				<div class="flex space-x-7 items-center">
					<div>
						<i class="fas fa-solid fa-flag"></i>
					</div>
					<div>
						<div>{result.title}</div>
						<div>
							<div class="text-sm flex space-x-1">
								<span>{result.date}</span> <span>&middot;</span>
								<div><span class="text-blue-500">{result.authors[0]}</span></div>
							</div>
							{#if result.dependencies}
								<div class="text-sm flex space-x-1">
									<span>Dependencies:</span>
									<div>
										{#each result.dependencies as dependency, index}
											<span class="text-blue-500">{dependency}</span
											>{#if index !== result.dependencies.length - 1}
												<span>, </span>
											{/if}
										{/each}
									</div>
								</div>
							{/if}
							<div class="text-xs flex space-x-1.5 items-center mb-0.5">
								<div class="flex items-center space-x-0.5">
									<span>{result.number_of_reviews}</span>
									<i class="fa-solid fa-magnifying-glass h-3" title="reviews"></i>
								</div>
								{#if result.number_of_reproductions !== null}
									<div class="flex items-center space-x-0.5">
										<span>{result.number_of_reproductions}</span>
										<i class="fa-solid fa-repeat" title="reproductions"></i>
									</div>
								{/if}
								<div class="flex items-center">
									<span>{result.number_of_stars}</span>
									<i class="fas fa-star fa-fw" title="stars"></i>
								</div>
								<div class="flex items-center space-x-0.5">
									<span>{result.number_of_views}</span>
									<i class="fas fa-eye fa-fw" title="views"></i>
								</div>
							</div>

							<div class="text-sm flex space-x-2">
								<div>
									{#each result.tags as tag, index}
										<span class="{tag.color} text-white px-1 rounded-sm py-0.5 text-xs"
											>{tag.name}</span
										>{#if index !== result.tags.length - 1}
											<span>&nbsp;</span>
										{/if}
									{/each}
								</div>
							</div>
							<div class="mt-2 flex space-x-2">
								<button
									type="button"
									class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>View</button
								>
								<button
									type="button"
									class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>Review</button
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
