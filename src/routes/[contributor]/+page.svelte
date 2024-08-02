<!-- TODO: custom open graph description per contributor -->

<script lang="ts">
	import ContributionSummary from '$lib/components/contribution-summary.svelte';

	export let data;
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#if data.contributor}
		{#each data.contributor.contributions as contrib}
			<ContributionSummary {contrib} />
		{/each}
	{/if}
</div>
