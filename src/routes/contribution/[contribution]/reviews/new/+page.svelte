<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { MultiSelect } from 'svelte-multiselect';
	import { pretty_print_contributor } from '$lib';
	import { POST } from '$lib/api';
	import type { components } from '$lib/cosearch.js';
	export let data;

	let selected_reviewers = [];

	let new_review: components['schemas']['ReviewCreate'] = {
		reviewers: [],
		link: '',
		notes: '',
		contribution_id: ''
	};

	let creationError: Error | null = null;

	async function createReview(event: Event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();

		if (!data.contribution) {
			return;
		}

		if (!valid) {
			form.reportValidity();
			return;
		}
		try {
			new_review.reviewers = selected_reviewers.map((reviewer) => reviewer.contributor.id);
			new_review.contribution_id = data.contribution.id;

			await POST('/reviews', {
				body: new_review
			});
			await invalidateAll();
			goto(`/contribution/${data.contribution.id}/reviews`);
		} catch (error) {
			creationError = error;
			console.error(error);
		}
	}
</script>

<form class="sm:w-4/5">
	<div class="space-y-5">
		<div class="border-b border-gray-900/10 pb-10">
			<!-- <h2 class="text-base font-semibold leading-7 text-gray-900">New Contributor</h2> -->
			<!-- <p class="mt-1 text-sm leading-6 text-gray-600">
				Any result, experiment, successful or unsuccessful idea, and more generally, anything which
				you believe is helpful for the future of the project is a suitable contribution.
			</p> -->

			<h2 class="text-base font-semibold leading-7 text-gray-900">New Review</h2>

			<div class=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
				<div class="sm:col-span-4">
					<label for="handle" class="inline-block text-sm font-medium leading-6 text-gray-900"
						>Reviewers*</label
					>
					<div class="mt-2">
						{#if data.contributors}
							<MultiSelect
								--sms-selected-bg="rgb(229,231,235)"
								options={data.contributors.map((contributor) => ({
									label: pretty_print_contributor(contributor),
									style: `color: #3b82f6`,
									contributor: contributor
								}))}
								bind:selected={selected_reviewers}
								name="reviewers"
								placeholder="Select reviewers"
								removeAllTitle="Remove all reviewers"
								required
							/>
						{/if}
					</div>

					<p class="mt-1 text-sm leading-6 text-gray-600">
						Please list anyone that was involved in this review.
					</p>
				</div>

				<div class="sm:col-span-4">
					<label for="review-url" class="inline-block text-sm font-medium leading-6 text-gray-900"
						>Review URL</label
					>
					<div class="mt-2">
						<input
							type="text"
							name="review-url"
							id="review-url"
							bind:value={new_review.link}
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:col-span-4">
					<label for="review_notes" class="inline-block text-sm font-medium leading-6 text-gray-900"
						>Notes</label
					>
					<div class="mt-2">
						<textarea
							id="review-notes"
							name="review-notes"
							rows="5"
							bind:value={new_review.notes}
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						></textarea>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6 mb-10">
		<button
			type="button"
			class="text-sm font-semibold leading-6 text-gray-900"
			on:click={() => {
				goto('/contributors');
			}}>Cancel</button
		>
		<button
			type="submit"
			on:click={async (event) => {
				await createReview(event);
			}}
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Save</button
		>
	</div>
</form>
