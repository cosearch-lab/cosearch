<script lang="ts">
	import { mockContribs } from '$lib/index';
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import UpsertTag from '$lib/components/upsert-tag.svelte';
	export let data;

	let edit_mode = false;
</script>

{#if data.tag}
	<nav class="flex" aria-label="Breadcrumb">
		<ol role="list" class="flex items-center space-x-0">
			<li>
				<div>
					<a href="/tags" class="text-gray-400 hover:text-gray-500"> Tags (10) </a>
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
						href={`/${data.tag.id}`}
						class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700"
						>{data.tag.display_name}</a
					>
				</div>
			</li>
		</ol>
	</nav>

	{#if !edit_mode}
		<div>
			<span
				class="text-white px-1 rounded-sm py-0.5 text-normal"
				style="background-color: {data.tag.color}">{data.tag.display_name}</span
			>
			<button
				on:click={() => {
					edit_mode = true;
				}}><i class="fa-solid fa-pen text-norma pl-1"></i></button
			>
		</div>
	{:else}
		<UpsertTag upsert_tag={data.tag} />
	{/if}

	<div class="text-lg font-bold">Tagged Contributions (3)</div>

	<div class="flex flex-col space-y-5 ml-0 pb-20">
		<ContributionSummary contrib={mockContribs[1]} />
	</div>
{/if}
