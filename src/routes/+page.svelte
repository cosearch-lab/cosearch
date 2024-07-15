<script lang="ts">
	import type { Tag, Contribution } from '$lib/index';
	import { tags } from '$lib/index';

	let contribs: Contribution[] = [
		{
			id: '2zr5ys29xxoexdlviulo',
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
			id: '5xvr42ixeifnp0fgmtpa',
			title: 'Coq-BB5',
			date: 'Apr 24',
			authors: ['mxdys'],
			dependencies: ['FAR', 'MITWFAR', 'n-gram CPS', 'busycoq'],
			tags: [tags[0], tags[1]],
			number_of_reviews: 1,
			number_of_reproductions: null,
			number_of_views: 10,
			number_of_stars: 150
		},
		{
			id: 'lxbplez6658ytyjss357',
			title: 'Coq formalisation of Cyclers',
			date: 'Jul 2023',
			authors: ['mei'],
			dependencies: ['Cyclers'],
			tags: [tags[0], tags[1]],
			number_of_reviews: 0,
			number_of_reproductions: 2,
			number_of_views: '2.3k',
			number_of_stars: 0,
			links: ['https://discuss.bbchallenge.org/t/decider-cyclers/33']
		},
		{
			id: '1jtod12g03dkz8zq9on7',
			title: 'Dafny formalisation of Cyclers',
			date: 'Mar 2022',
			authors: ['Nathan Fenner'],
			dependencies: ['Cyclers'],
			tags: [tags[0], tags[1]],
			number_of_reviews: 0,
			number_of_reproductions: 2,
			number_of_views: '2.3k',
			number_of_stars: 0,
			links: ['https://discuss.bbchallenge.org/t/decider-cyclers/33']
		},
		{
			id: 'fc4jc5fmaa1sbqz9w8y1',
			title: 'Cyclers',
			date: 'Sep 2022',
			authors: ['Tristan Stérin'],
			dependencies: null,
			tags: [tags[0]],
			number_of_reviews: 0,
			number_of_reproductions: 3,
			number_of_views: '2.3k',
			number_of_stars: 0,
			links: ['https://discuss.bbchallenge.org/t/decider-cyclers/33']
		},
		{
			id: 'jb95hfvarvt13dst063n',
			title: 'bbchallenge seed database',
			date: 'Dec 2021',
			authors: ['Tristan Stérin'],
			dependencies: null,
			tags: [],
			number_of_reviews: 0,
			number_of_reproductions: 2,
			number_of_views: 0,
			number_of_stars: 0,
			links: [
				'https://github.com/bbchallenge/bbchallenge-seed',
				'https://bbchallenge.org/method',
				'https://discuss.bbchallenge.org/t/reproduction-of-the-seed-database/160',
				'https://discuss.bbchallenge.org/t/re-constructing-the-seed-database/106'
			]
		}
	];
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#each contribs as contrib}
		<div class="flex space-x-7 items-center">
			<div>
				<i class="fas fa-solid fa-flag"></i>
			</div>
			<div>
				<div>{contrib.title}</div>
				<div>
					<div class="text-sm flex space-x-1">
						<span>{contrib.date}</span> <span>&middot;</span>
						{#each contrib.authors as author, index}
							<a href="">{author}</a>
							{#if index !== contrib.authors.length - 1}
								<span>, </span>
							{/if}
						{/each}
					</div>
					{#if contrib.dependencies}
						<div class="text-sm flex space-x-1">
							<span>Dependencies:</span>
							<div>
								{#each contrib.dependencies as dependency, index}
									<span class="text-blue-500">{dependency}</span
									>{#if index !== contrib.dependencies.length - 1}
										<span>, </span>
									{/if}
								{/each}
							</div>
						</div>
					{/if}
					<!-- <div class="text-xs flex space-x-1.5 items-center mb-0.5">
						<div class="flex items-center space-x-0.5">
							<span>{contrib.number_of_reviews}</span>
							<i class="fa-solid fa-magnifying-glass h-3" title="reviews"></i>
						</div>

						<div class="flex items-center">
							<span>{contrib.number_of_stars}</span>
							<i class="fas fa-star fa-fw" title="stars"></i>
						</div>
						
								<div class="flex items-center space-x-0.5">
									<span>{result.number_of_views}</span>
									<i class="fas fa-eye fa-fw" title="views"></i>
								</div> 
					</div> -->

					<div class="text-sm flex space-x-2">
						<div>
							{#each contrib.tags as tag, index}
								<span class="{tag.color} text-white px-1 rounded-sm py-0.5 text-xs">{tag.name}</span
								>{#if index !== contrib.tags.length - 1}
									<span>&nbsp;</span>
								{/if}
							{/each}
						</div>
					</div>
					<div class="mt-2 flex space-x-2">
						<a href={`/${contrib.id}`}>
							<button
								type="button"
								class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>View</button
							>
						</a>
						<button
							type="button"
							class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>Review ({contrib.number_of_reviews})</button
						>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
