<script lang="ts">
	import { page } from '$app/stores';
	import type { Tag, Contribution } from '$lib/index';
	import { tags } from '$lib/index';
	import { prettyPrintDate } from '$lib';
	import { goto } from '$app/navigation';

	let path;
	$: path = $page.url.pathname;

	let contrib_id = $page.params.contribution;

	let contrib: Contribution = {
		id: '5xvr42ix',
		title: 'Coq-BB5',
		date: 'Apr 24',
		authors: ['mxdys'],
		dependencies: ['FAR', 'MITWFAR', 'n-gram CPS', 'busycoq'],
		tags: [tags[0], tags[1]],
		number_of_reviews: 1,
		number_of_reproductions: null,
		number_of_views: 10,
		number_of_stars: 150
	};

	export let data;
</script>

{#if data.contribution}
	<nav class="flex" aria-label="Breadcrumb">
		<ol role="list" class="flex items-center space-x-0">
			<li>
				<div>
					<a href="/" class="text-gray-400 hover:text-gray-500">
						Contributions {#if data.contributions}({data.contributions.length}){/if}
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
					<a
						href={`/${data.contribution.id}`}
						class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700"
						>{data.contribution.title}</a
					>
				</div>
			</li>
		</ol>
	</nav>

	<div>
		<h1 class="text-xl font-bold">{data.contribution.title}</h1>

		<div class="text-md flex space-x-1">
			<span>{prettyPrintDate(data.contribution.date)}</span> <span>&middot;</span>
			{#each data.contribution.contributors as contributor, index}
				<a href="/" class="l">{contributor.display_name || contributor.local_handle}</a>
				{#if index !== data.contribution.contributors.length - 1},
				{/if}
			{/each}
		</div>

		{#if data.contribution.dependencies.length > 0}
			<div class="text-sm flex space-x-1">
				<span>Dependencies:</span>
				<div>
					{#each contrib.dependencies as dependency, index}
						<a href="/" class="l">{dependency}</a>{#if index !== contrib.dependencies.length - 1}
							<span>, </span>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
		{#if data.contribution.tags.length > 0}
			<div class="text-sm flex space-x-2">
				<div>
					{#each data.contribution.tags as tag, index}
						<span
							class=" text-white px-1 rounded-sm py-0.5 text-xs"
							style="background-color: {tag.color}">{tag.display_name}</span
						>{#if index !== contrib.tags.length - 1}
							<span>&nbsp;</span>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>

	{#if path != `/contribution/${contrib_id}/edit`}
		<div>
			<button
				type="button"
				class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				on:click={() => goto(`/contribution/${contrib_id}/edit`)}
			>
				<i class="fa-solid fa-pen mr-1"></i>
				Edit
			</button>
		</div>

		<div>
			<div class="sm:hidden">
				<label for="tabs" class="sr-only">Select a tab</label>
				<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
				<select
					id="tabs"
					name="tabs"
					class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
				>
					<option selected>Details</option>
					<option>Reviews</option>
				</select>
			</div>
			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<nav class="-mb-px flex space-x-8" aria-label="Tabs">
						<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700" -->
						<a
							href={`/contribution/${contrib_id}`}
							class="flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
							class:active={path === `/contribution/${contrib_id}`}
							class:not-active={!(path === `/contribution/${contrib_id}`)}
							aria-current="page"
						>
							Details
						</a>
						<a
							href={`/contribution/${contrib_id}/reviews`}
							class="flex whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium"
							class:active={path === `/contribution/${contrib_id}/reviews`}
							class:not-active={!(path === `/contribution/${contrib_id}/reviews`)}
						>
							Reviews
							<span
								class="ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium"
								class:active={path === `/contribution/${contrib_id}/reviews`}
								class:not-active={!(path === `/contribution/${contrib_id}/reviews`)}
								>{data.contribution.reviews.length}</span
							>
						</a>
					</nav>
				</div>
			</div>
		</div>
	{/if}
	<slot />
{/if}

<style>
	a.active {
		@apply text-indigo-600 hover:text-indigo-600 border-indigo-500;
	}

	a.not-active {
		@apply text-gray-500 hover:border-gray-200 hover:text-gray-700;
	}

	span.active {
		@apply text-indigo-600 bg-indigo-200;
	}

	span.not-active {
		@apply text-gray-800 bg-gray-300;
	}
</style>
