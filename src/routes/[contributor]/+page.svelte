<script lang="ts">
	import { page } from '$app/stores';
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import { mockContribs } from '$lib/index';

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

<div class="flex items-center">
	<div class="text-lg font-bold">Contributions</div>
	<span class="ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-800 bg-gray-300"
		>1</span
	>
</div>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	<ContributionSummary contrib={mockContribs[1]} />
</div>
