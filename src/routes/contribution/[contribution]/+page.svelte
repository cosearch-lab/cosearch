<script lang="ts">
	export let data;
</script>

<!-- TODO: custom open graph description per contribution -->
{#if data.contribution}
	{#if data.contribution.links.length > 0}
		<div class="text-lg font-bold">Featured Links</div>
		<table class="w-1/2 text-xs border-collapse border border-slate-400">
			<tbody>
				{#each data.contribution.links as link}
					<tr>
						<td class="border border-slate-300 p-1">{link.description}</td>
						<td class="border border-slate-300 p-1">
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

	<!-- <div class="text-lg font-bold">Attachments</div> -->
{/if}
