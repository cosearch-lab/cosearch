<script lang="ts">
	import type { Tag, Contribution } from '$lib/index';
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import { mockContribs, tags } from '$lib/index';
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-0">
		<li>
			<div>
				<a href="/" class="text-gray-400 hover:text-gray-500"> Contributions (200) </a>
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

<div>
	<button
		type="button"
		class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
	>
		<i class="fa-solid fa-circle-plus mr-1"></i>
		Add contribution
	</button>
</div>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#each mockContribs as contrib}
		<ContributionSummary {contrib} />
	{/each}
</div>
