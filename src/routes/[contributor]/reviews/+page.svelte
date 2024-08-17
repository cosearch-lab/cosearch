<script lang="ts">
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import { compare_contribs } from '$lib';

	export let data;
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#if data.contributor}
		{#if data.contributor.reviewed_contributions.length > 0}
			{#each data.contributor.reviewed_contributions.sort(compare_contribs) as contrib}
				<ContributionSummary {contrib} />
			{/each}
		{:else}
			<p class="text-xs">This contributor has not reviewed any contributions yet.</p>
		{/if}
	{/if}
</div>
