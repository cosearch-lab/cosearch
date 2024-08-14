<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
</script>

<!-- TODO: custom open graph description per contribution -->
{#if data.contribution}
	<div>
		<button
			type="button"
			class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			on:click={() => goto(`/contribution/${data.contribution.id}/edit`)}
		>
			<i class="fa-solid fa-pen mr-1"></i>
			Edit
		</button>
	</div>
	{#if data.contribution.links.length > 0}
		<div class="text-lg font-bold">Featured Links</div>
		<table class="lg:w-1/2 md:w-4/5 w-full text-xs border-collapse border border-slate-400">
			<tbody>
				{#if data.contribution.github_link}
					<tr>
						<td class="border border-slate-300 p-1">Github</td>
						<td class="border border-slate-300 p-1 max-w-[300px] truncate">
							<a href={data.contribution.github_link} class="l">{data.contribution.github_link}</a>
						</td>
					</tr>
				{/if}
				{#if data.contribution.discord_chat_link}
					<tr>
						<td class="border border-slate-300 p-1">Chat about it</td>
						<td class="border border-slate-300 p-1 max-w-[300px] truncate">
							<a href={data.contribution.discord_chat_link} class="l"
								>{data.contribution.discord_chat_link}</a
							>
						</td>
					</tr>
				{/if}
				{#if data.contribution.forum_link}
					<tr>
						<td class="border border-slate-300 p-1">Forum Link</td>
						<td class="border border-slate-300 p-1 max-w-[300px] truncate">
							<a href={data.contribution.forum_link} class="l">{data.contribution.forum_link}</a>
						</td>
					</tr>
				{/if}
				{#if data.contribution.wiki_link}
					<tr>
						<td class="border border-slate-300 p-1">Wiki Link</td>
						<td class="border border-slate-300 p-1 max-w-[300px] truncate">
							<a href={data.contribution.wiki_link} class="l">{data.contribution.wiki_link}</a>
						</td>
					</tr>
				{/if}
				{#each data.contribution.links as link}
					<tr>
						<td class="border border-slate-300 p-1">{link.description}</td>
						<td class="border border-slate-300 p-1 max-w-[300px] truncate">
							<a href={link.url} class="l">{link.url}</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}

	{#if data.contribution.description.trim().length > 0}
		<div class="text-lg font-bold">Description</div>
		<p class="text-sm">
			{data.contribution.description}
		</p>
	{/if}

	{#if data.contribution.links.length === 0 && data.contribution.description.trim().length === 0}
		<p class="text-xs">No details given.</p>
	{/if}

	<!-- <div class="text-lg font-bold">Attachments</div> -->
{/if}
