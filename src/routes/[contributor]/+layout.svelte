<!-- TODO: custom open graph description per contributor -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import { mockContribs } from '$lib/index';
	import { pretty_print_contributor } from '$lib';

	export let data;

	let path;
	$: path = $page.url.pathname;

	let contributor = $page.params.contributor;
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-0">
		<li>
			<div>
				<a href="/contributors" class="text-gray-400 hover:text-gray-500">
					Contributors {#if data.contributors}({data.contributors.length}){/if}
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
					href={`/${contributor}`}
					class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700"
					>{pretty_print_contributor(data.contributor)}</a
				>
			</div>
		</li>
	</ol>
</nav>

<div>
	<a href="/" class="text-sm text-gray-500 hover:text-gray-400"
		><i class="fa-solid fa-arrow-left mr-1"></i>All contributions</a
	>
</div>

{#if data.contributor}
	<div class="text-lg font-bold">Infos</div>
	{#if path != `/${contributor}/edit`}
		<table class="lg:w-1/2 md:w-4/5 w-full text-xs border-collapse border border-slate-400">
			<tbody>
				<tr>
					<td class="border border-slate-300 p-1 w-1/3">Handle</td>
					<td class="border border-slate-300 p-1">
						<a href={`/${contributor}`} class="l"
							>@{data.contributor.local_handle}@cosearch.bbchallenge.org</a
						>
					</td>
				</tr>
				{#if data.contributor.display_name}
					<tr>
						<td class="border border-slate-300 p-1 w-1/3">Display Name</td>
						<td class="border border-slate-300 p-1">
							<a href={`/${contributor}`} class="l">{data.contributor.display_name}</a>
						</td>
					</tr>
				{/if}
				{#if data.contributor.discord_handle}
					<tr>
						<td class="border border-slate-300 p-1 w-1/3">Discord Display Name</td>
						<td class="border border-slate-300 p-1">{data.contributor.discord_handle}</td>
					</tr>
				{/if}
				{#if data.contributor.github_account}
					<tr>
						<td class="border border-slate-300 p-1 w-1/3">GitHub</td>
						<td class="border border-slate-300 p-1 max-w-[300px]">
							<a href={data.contributor.github_account} class="l"
								>{data.contributor.github_account}</a
							>
						</td>
					</tr>
				{/if}
				{#if data.contributor.wiki_account}
					<tr>
						<td class="border border-slate-300 p-1 w-1/3">Wiki contributions</td>
						<td class="border border-slate-300 p-1 max-w-[300px] truncate">
							<a href={data.contributor.wiki_account} class="l truncate"
								>{data.contributor.wiki_account}</a
							></td
						>
					</tr>
				{/if}
				{#if data.contributor.discourse_account}
					<tr>
						<td class="border border-slate-300 p-1 w-1/3">Discourse profile</td>
						<td class="border border-slate-300 p-1 max-w-[300px]"
							><a href={data.contributor.discourse_account} class="l"
								>{data.contributor.discourse_account}</a
							></td
						>
					</tr>
				{/if}
				{#if data.contributor.website}
					<tr>
						<td class="border border-slate-300 p-1 w-1/3">Personal website</td>
						<td class="border border-slate-300 p-1 max-w-[300px]"
							><a href={data.contributor.website} class="l">{data.contributor.website}</a></td
						>
					</tr>
				{/if}
			</tbody>
		</table>

		<div>
			<button
				type="button"
				class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				on:click={() => goto(`/${contributor}/edit`)}
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
							href={`/${contributor}`}
							class="flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
							class:active={path === `/${contributor}`}
							class:not-active={!(path === `/${contributor}`)}
							aria-current="page"
						>
							Contributions <span
								class="ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium"
								class:active={path === `/${contributor}`}
								class:not-active={!(path === `/${contributor}`)}
								>{#if data.contributor}{data.contributor.contributions.length}{:else}0{/if}</span
							>
						</a>
						<a
							href={`/${contributor}/reviews`}
							class="flex whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium"
							class:active={path === `/${contributor}/reviews`}
							class:not-active={!(path === `/${contributor}/reviews`)}
						>
							Reviews
							<span
								class="ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium"
								class:active={path === `/${contributor}/reviews`}
								class:not-active={!(path === `/${contributor}/reviews`)}
								>{#if data.contributor}{data.contributor.reviewed_contributions
										.length}{:else}0{/if}</span
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
