<script lang="ts">
	import type { components } from '$lib/cosearch';
	export let contributor: components['schemas']['Contributor'];
</script>

{#if contributor.display_name}
	<a href={`/${contributor.local_handle}`} class="l"
		>{contributor.display_name} ({contributor.local_handle})</a
	>
{:else}
	<a href={`/${contributor.local_handle}`} class="l">{contributor.local_handle}</a>
{/if}
