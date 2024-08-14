<script lang="ts">
	import { DELETE } from '$lib/api';
	import { invalidateAll, goto } from '$app/navigation';
	export let data;

	let delete_state = 0;

	async function deleteReview(event: Event) {
		if (delete_state !== 1) {
			return;
		}

		if (!data.contribution || !data.review) {
			return;
		}

		let deletionError;

		try {
			await DELETE('/reviews/{review_id}', {
				params: {
					path: {
						review_id: data.review.id
					}
				}
			});
			await invalidateAll();
			goto(`/contribution/${data.contribution.id}/reviews`);
		} catch (error) {
			deletionError = error;
			console.error(error);
		}
	}
</script>

<h2 class="text-base font-semibold leading-7 text-gray-900">Review</h2>

{#if data.review}
	<div class="text-sm">
		<span class="font-medium text-gray-900">Reviewers:</span>
		{#each data.review.reviewers as reviewer}
			<a href="/{reviewer.local_handle}" class="l"
				>{reviewer.display_name || reviewer.local_handle}</a
			>
			{#if reviewer !== data.review.reviewers[data.review.reviewers.length - 1]}
				<span>, </span>
			{/if}
		{/each}
	</div>
	{#if data.review.link}
		<div class="text-sm">
			<span class="font-medium text-gray-900">URL:</span>
			<a href={data.review.link} class="l">{data.review.link}</a>
		</div>
	{/if}

	{#if data.review.notes}
		<div class="text-sm">
			<span class="font-medium text-gray-900">Notes</span>
		</div>
		<p class="text-sm">{data.review.notes}</p>
	{/if}

	<div class="pb-16">
		<button
			type="button"
			class="rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
			on:click={async (event) => {
				if (delete_state === 0) {
					delete_state = 1;
				} else {
					await deleteReview(event);
				}
			}}
		>
			{#if delete_state === 0}
				Delete review
			{/if}
			{#if delete_state === 1}
				Are you sure?
			{/if}</button
		>
	</div>
{/if}
