<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import type { components } from '$lib/cosearch';
	import type { PageData } from './$types.js';
	import { PUT, DELETE } from '$lib/api';
	import ContributionForm from '$lib/components/contribution-form.svelte';

	export let data: PageData;

	let selected_contributors = [];
	let selected_tags = [];
	let deletionError = null;
	let date = new Date();

	let update_contribution: components['schemas']['ContributionUpdate'];
	if (data.contribution) {
		update_contribution = { ...data.contribution };
	}

	let selected_contributions_dependencies;

	let updateError = null;
	async function updateContribution(event: Event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();
		if (!valid) {
			form.reportValidity();
			return;
		}
		try {
			update_contribution.contributors = selected_contributors.map(
				(contributor) => contributor.contributor.id
			);

			update_contribution.tags = selected_tags.map((tag) => tag.tag.id);
			update_contribution.dependencies = selected_contributions_dependencies.map(
				(contribution) => contribution.contribution.id
			);
			console.log(selected_contributions_dependencies);
			update_contribution.date = date.toISOString();
			await PUT('/contributions/{contribution_id}', {
				params: { path: { contribution_id: data.contribution.id } },
				body: update_contribution
			});
			await invalidateAll();
			goto(`/contribution/${data.contribution.id}`);
		} catch (error) {
			updateError = error;
			console.error(error);
		}
	}
</script>

<form class="sm:w-4/5">
	<ContributionForm
		bind:contrib={update_contribution}
		bind:date
		edit={true}
		contributors={data.contributors}
		contributions={data.contributions}
		tags={data.tags}
		bind:selected_contributors
		bind:selected_tags
		bind:selected_contributions_dependencies
	/>

	<div class="mt-5 flex items-center justify-between gap-x-6 pb-12">
		<button
			type="button"
			on:click={(event) => {
				deleteContribution(event);
			}}
			class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
			>Archive contribution</button
		>
		<div class="flex gap-x-6">
			<button
				type="button"
				class="text-sm font-semibold leading-6 text-gray-900"
				on:click={() => {
					goto(`/contribution/${data.contribution.id}`);
				}}>Cancel</button
			>
			<button
				type="submit"
				on:click={(event) => {
					updateContribution(event);
				}}
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Save</button
			>
		</div>
	</div>
</form>
