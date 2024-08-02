<!-- TODO: custom open graph description per contributor -->

<script lang="ts">
	import ContributionSummary from '$lib/components/contribution-summary.svelte';

	export let data;
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#if data.contributor}
		{#if data.contributor.contributions.length > 0}
			{#each data.contributor.contributions as contrib}
				<ContributionSummary {contrib} />
			{/each}
		{:else}
			<p class="text-xs">This contributor has not contributed yet.</p>
		{/if}
	{/if}
</div>
