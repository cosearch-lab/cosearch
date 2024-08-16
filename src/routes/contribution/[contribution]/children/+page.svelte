<script lang="ts">
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	export let data;
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	{#if data.children}
		{#if data.children.length > 0}
			{#each data.children as contrib}
				<ContributionSummary {contrib} />
			{/each}
		{:else}
			<p class="text-xs">This contribution has no children yet.</p>
		{/if}
	{/if}
</div>
