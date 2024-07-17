<script lang="ts">
	import { mockContributors } from '$lib/index';
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-0">
		<li>
			<div>
				<a href="/contributors" class="text-gray-400 hover:text-gray-500"> Contributors (32) </a>
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

<ul class="list-disc ml-4 marker:text-gray-500">
	{#each mockContributors as contributor}
		<li>
			<div class="flex items-center space-x-1">
				<a href={`/${contributor.local_handle}`} class="l">{contributor.display_name}</a>
			</div>
		</li>
	{/each}
</ul>
