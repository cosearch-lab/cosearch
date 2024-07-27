<script lang="ts">
	import ContributionSummary from '$lib/components/contribution-summary.svelte';
	import { mockContribs } from '$lib/index';
</script>

<div class="flex flex-col space-y-5 ml-0 pb-20">
	<ContributionSummary contrib={mockContribs[1]} review={true} />
</div>
