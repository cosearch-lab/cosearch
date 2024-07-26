<script lang="ts">
	import { goto } from '$app/navigation';
	export let review: Review;
</script>

<div class="flex space-x-7 items-center">
	<div>
		<i class="fas fa-solid fa-magnifying-glass"></i>
	</div>
	<div>
		<div>
			<div class="text-sm flex space-x-1">
				<span>{review.date}</span> <span>&middot;</span>
				{#each review.authors as author, index}
					<a href="/mxdys" class="l">{author}</a>
					{#if index !== review.authors.length - 1}
						<span>, </span>
					{/if}
				{/each}
				<span>&middot;</span>
				<div>
					<i class="fa-solid fa-circle-check text-green-500" title="positive"></i>
				</div>
			</div>
		</div>

		<div class="text-sm flex space-x-2">
			<div>
				<span class="bg-teal-500 text-white px-1 rounded-sm py-0.5 text-xs"
					>Result reproduction</span
				>
			</div>
		</div>

		<div class="mt-1 flex space-x-2">
			<button
				type="button"
				class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
				on:click={() => goto(`/r/${review.id}`)}>View</button
			>
		</div>
	</div>
</div>
