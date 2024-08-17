<script lang="ts">
	import { goto } from '$app/navigation';
	import { compare_tags } from '$lib';
	export let data;
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-0">
		<li>
			<div>
				<a href="/tags" class="text-gray-400 hover:text-gray-500">
					Tags {#if data.tags}({data.tags.length}){/if}
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

<div>
	<button
		type="button"
		class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		on:click={() => goto('/tags/new')}
	>
		<i class="fa-solid fa-circle-plus mr-1"></i>
		Add tag
	</button>
</div>

{#if data.tags}
	<div class="flex flex-col space-y-2 items-start">
		{#each data.tags.sort(compare_tags) as tag}
			<a href="/tags/{tag.id}">
				<div>
					<span
						class="text-white px-1 rounded-sm py-0.5 text-xs"
						style="background-color: {tag.color}">{tag.display_name}</span
					> <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
				</div>
			</a>
		{/each}
	</div>
{/if}
