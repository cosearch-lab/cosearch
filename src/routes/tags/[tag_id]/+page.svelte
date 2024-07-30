<script lang="ts">
	import { mockContribs } from '$lib/index';
	import ContributionSummary from '$lib/components/contribution-summary.svelte';

	import { PUT } from '$lib/api';
	import { goto } from '$app/navigation';
	import ColorPicker from 'svelte-awesome-color-picker';

	export let data;

	let edit_mode = false;
	let hex = data.tag?.color;

	let updateError: Error | null = null;

	async function updateTag(event: Event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();
		if (!valid) {
			form.reportValidity();
			return;
		}
		if (!data.tag) {
			return;
		}
		try {
			data.tag.color = hex;
			await PUT(
				'/tags/{tag_id}',

				{
					params: { path: { tag_id: data.tag.id } },
					body: data.tag
				}
			);
			edit_mode = false;
		} catch (error) {
			updateError = error;
			console.error(error);
		}
	}
</script>

{#if data.tag}
	<nav class="flex" aria-label="Breadcrumb">
		<ol role="list" class="flex items-center space-x-0">
			<li>
				<div>
					<a href="/tags" class="text-gray-400 hover:text-gray-500"> Tags (10) </a>
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
					<a
						href={`/${data.tag.id}`}
						class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700"
						>{data.tag.display_name}</a
					>
				</div>
			</li>
		</ol>
	</nav>

	{#if !edit_mode}
		<div>
			<span
				class="text-white px-1 rounded-sm py-0.5 text-normal"
				style="background-color: {data.tag.color}">{data.tag.display_name}</span
			>
			<button
				on:click={() => {
					edit_mode = true;
				}}><i class="fa-solid fa-pen text-norma pl-1"></i></button
			>
		</div>
	{:else}<form class="sm:w-4/5">
			<div class="space-y-5">
				<div>
					<div class=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
						<div class="sm:col-span-2">
							<label
								for="tag_display_name"
								class="inline-block text-sm font-medium leading-6 text-gray-900"
								>Text
							</label>

							<div class="mt-2">
								<input
									type="text"
									name="tag_display_name"
									id="tag_display_name"
									autocomplete="off"
									bind:value={data.tag.display_name}
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									required
								/>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label
								for="personal_website"
								class="block text-sm font-medium leading-6 text-gray-900"
								>Color
							</label>

							<ColorPicker bind:hex position="responsive" />

							<button
								type="submit"
								on:click={async (event) => {
									await updateTag(event);
								}}
								class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
								>Save</button
							>
						</div>
					</div>
				</div>
			</div>
		</form>{/if}

	<div class="text-lg font-bold">Tagged Contributions (3)</div>

	<div class="flex flex-col space-y-5 ml-0 pb-20">
		<ContributionSummary contrib={mockContribs[1]} />
	</div>
{/if}
