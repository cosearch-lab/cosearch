<script lang="ts">
	export let data;
</script>

<!-- TODO: custom open graph description per contribution -->
{#if data.contribution}
	{#if data.contribution.links.length > 0}
		<div class="text-lg font-bold">Featured Links</div>
		<table class="lg:w-1/2 md:w-4/5 w-full text-xs border-collapse border border-slate-400">
			<tbody>
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
