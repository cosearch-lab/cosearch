<!-- TODO: custom open graph description per contributor -->

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import { mockContribs } from '$lib/index';

	let path;
	$: path = $page.url.pathname;

	let contributor = $page.params.contributor;
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
				<a
					href={`/${contributor}`}
					class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700">{contributor}</a
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

<div class="text-lg font-bold">Infos</div>

<table class="w-1/2 text-xs border-collapse border border-slate-400">
	<tbody>
		<tr>
			<td class="border border-slate-300 p-1">Handle</td>
			<td class="border border-slate-300 p-1">
				<a href={`/${contributor}`} class="l">@mxdys@cosearch.bbchallenge.org</a>
			</td>
		</tr>
		<tr>
			<td class="border border-slate-300 p-1">Display Name</td>
			<td class="border border-slate-300 p-1">
				<a href={`/${contributor}`} class="l">mxdys</a>
			</td>
		</tr>
		<tr>
			<td class="border border-slate-300 p-1">Discord handle</td>
			<td class="border border-slate-300 p-1"> mxdys_82900 </td>
		</tr>
		<tr>
			<td class="border border-slate-300 p-1">GitHub</td>
			<td class="border border-slate-300 p-1">
				<a href="https://github.com/ccz181078/Coq-BB5" class="l"
					>https://github.com/ccz181078/Coq-BB5</a
				>
			</td>
		</tr>
	</tbody>
</table>

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
						class:not-active={!(path === `/${contributor}`)}>10</span
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
						class:not-active={!(path === `/${contributor}/reviews`)}>2</span
					>
				</a>
			</nav>
		</div>
	</div>
</div>

<slot />

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
