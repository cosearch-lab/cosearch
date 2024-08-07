<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';

	import { POST } from '$lib/api';
	import type { components } from '$lib/cosearch';
	import ContributionForm from '$lib/components/contribution-form.svelte';

	export let data;

	let new_contribution: components['schemas']['ContributionCreate'] = {
		title: '',
		short_title: '',
		date: new Date().toISOString(),
		links: [],
		description: '',
		tags: [],
		contributors: [],
		dependencies: []
	};

	let selected_contributors = [];
	let selected_contributions_dependencies = [];
	let selected_tags = [];

	let creationError = null;
	let date = new Date();
	async function createContribution(event: Event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();
		if (!valid) {
			form.reportValidity();
			return;
		}
		try {
			new_contribution.contributors = selected_contributors.map(
				(contributor) => contributor.contributor.id
			);
			console.log(selected_contributions_dependencies);
			new_contribution.dependencies = selected_contributions_dependencies.map(
				(contribution) => contribution.contribution.id
			);
			new_contribution.tags = selected_tags.map((tag) => tag.tag.id);
			new_contribution.date = date.toISOString();
			await POST('/contributions', {
				body: new_contribution
			});
			await invalidateAll();
			goto('/');
		} catch (error) {
			creationError = error;
			console.error(error);
		}
	}
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-0">
		<li>
			<div>
				<a href="/" class="text-gray-400 hover:text-gray-500">
					Contributions {#if data.contributions}({data.contributions.length}){/if}
				</a>
			</div>
		</li>
		<li>
			<div class="flex items-center">
				<svg
					class="h-5 w-5 flex-shrink-0 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700">New</span>
			</div>
		</li>
	</ol>
</nav>

<!-- TODO: this form's DOM needs to be cleaned, using flex everywhere instead of grid.
    TODO: fix inputs name attributes and labels.
-->
<form class="sm:w-4/5">
	<ContributionForm
		bind:contrib={new_contribution}
		bind:date
		contributors={data.contributors}
		contributions={data.contributions}
		tags={data.tags}
		bind:selected_contributors
		bind:selected_tags
		bind:selected_contributions_dependencies
	/>

	<div class="mt-5 flex items-center justify-end gap-x-6 pb-12">
		<button
			type="button"
			class="text-sm font-semibold leading-6 text-gray-900"
			on:click={() => {
				goto('/');
			}}>Cancel</button
		>
		<button
			type="submit"
			on:click={(event) => {
				createContribution(event);
			}}
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Save</button
		>
	</div>
</form>
