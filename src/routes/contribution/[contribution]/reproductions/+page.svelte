<script lang="ts">
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	export let data;
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#if data.reproductions}
		{#if data.reproductions.length > 0}
			{#each data.reproductions as contrib}
				<ContributionSummary {contrib} />
			{/each}
		{:else}
			<p class="text-xs">This contribution has not been reproduced yet.</p>
		{/if}
	{/if}
</div>
