<script lang="ts">
	import type { components } from '$lib/cosearch';
	export let contrib:
		| components['schemas']['ContributionCreate']
		| components['schemas']['ContributionWithAttributesShortPublic'];
	import DateInput from '$lib/components/DateInput.svelte';
	export let edit = false;
	export let contributors: components['schemas']['ContributorShort'][] | undefined;
	export let contributions: components['schemas']['ContributionShort'][] | undefined;
	export let tags: components['schemas']['Tag'][] | undefined;
	import MultiSelect from 'svelte-multiselect';
	import { invalidateAll } from '$app/navigation';

	import { pretty_print_contributor } from '$lib';

	export let date = new Date();
	if (edit) {
		date = new Date(contrib.date);
	}
	export let selected_contributors;

	export let selected_contributions_dependencies;

	if (edit) {
		selected_contributors = contrib.contributors.map((contributor) => ({
			label: pretty_print_contributor(contributor),
			style: `color: #3b82f6`,
			contributor: contributor
		}));
	}

	function pretty_print_contribution(contribution: components['schemas']['ContributionShort']) {
		if (!contribution.short_title) return `${contribution.title} (ID: ${contribution.id})`;
		return `${contribution.short_title} (ID: ${contribution.id})`;
	}

	if (edit) {
		selected_contributions_dependencies = contrib.dependencies.map((contribution) => ({
			label: pretty_print_contribution(contribution),
			style: `color: #3b82f6`,
			contribution: contribution
		}));
	}

	export let selected_tags;

	if (edit) {
		selected_tags = contrib.tags.map((tag) => ({
			label: tag.display_name,
			style: `background-color: ${tag.color}; color: white;`,
			tag: tag
		}));
	}

	const ui_libs = [`Svelte`, `React`, `Vue`, `Angular`, `...`];

	function random_color() {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		return `rgb(${r}, ${g}, ${b})`;
	}
	let selected: string[] = [];

	let link_add: components['schemas']['ContributionLinks'] = {
		description: '',
		url: ''
	};

	function addFeaturedLink() {
		contrib.links = [...contrib.links, link_add];
		link_add = {
			description: '',
			url: ''
		};
	}

	function removeLink(index: number) {
		contrib.links = contrib.links.filter((_, i) => i !== index);
	}
</script>

<div class="space-y-5">
	<div class="border-b border-gray-900/10 pb-10">
		<h2 class="text-base font-semibold leading-7 text-gray-900">
			{#if !edit}New{:else}Edit{/if} Contribution
		</h2>
		{#if !edit}
			<p class="mt-1 text-sm leading-6 text-gray-600">
				Any result, experiment, successful or unsuccessful idea, and more generally, anything which
				you believe is helpful for the future of the project is a suitable contribution.
			</p>
		{/if}

		<div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
			<div class="sm:col-span-4">
				<label for="title" class="inline-block text-sm font-medium leading-6 text-gray-900"
					>Title*</label
				>
				<div class="mt-2">
					<input
						type="text"
						name="title"
						id="title"
						autocomplete="off"
						bind:value={contrib.title}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						required
					/>
				</div>
			</div>

			<div class="sm:col-span-2 sm:col-start-1">
				<label for="short_title" class="inline-block text-sm font-medium leading-6 text-gray-900"
					>Short Title</label
				>
				<div class="mt-2">
					<input
						type="text"
						name="short_title"
						id="short_title"
						autocomplete="off"
						bind:value={contrib.short_title}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-2">
				<label for="date" class="inline-block text-sm font-medium leading-6 text-gray-900"
					>Date*</label
				>
				<DateInput bind:date />
			</div>

			<div class="sm:col-span-4">
				<label for="contributors" class="input-block text-sm font-medium leading-6 text-gray-900"
					>Contributors* <a href="/contributors" target="_blank" title="Contributors"
						><i class="fa-solid fa-arrow-up-right-from-square text-xs ml-0.5"></i></a
					>
					<button
						type="button"
						title="reload"
						on:click={async () => {
							await invalidateAll();
						}}><i class="fa-solid fa-arrows-rotate text-xs ml-0.5"></i></button
					></label
				>
				<div class="mt-2">
					{#if contributors}
						<MultiSelect
							--sms-selected-bg="rgb(229,231,235)"
							options={contributors.map((contributor) => ({
								label: pretty_print_contributor(contributor),
								style: `color: #3b82f6`,
								contributor: contributor
							}))}
							bind:selected={selected_contributors}
							name="contributors"
							placeholder="Select contributors"
							removeAllTitle="Remove all contributors"
							required
						/>
					{/if}
				</div>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Please list anyone that was involved in this contribution. You can use the Description
					field to provide more details on the role of each contributor.
				</p>
			</div>

			<div class="sm:col-span-4">
				<label for="dependencies" class="block text-sm font-medium leading-6 text-gray-900"
					>Dependencies <a href="/" target="_blank" title="Contributions"
						><i class="fa-solid fa-arrow-up-right-from-square text-xs ml-0.5"></i></a
					>
					<button
						type="button"
						title="reload"
						on:click={async () => {
							await invalidateAll();
						}}><i class="fa-solid fa-arrows-rotate text-xs ml-0.5"></i></button
					></label
				>
				<div class="mt-2">
					<MultiSelect
						--sms-selected-bg="rgb(229,231,235)"
						options={contributions.map((contribution) => ({
							label: pretty_print_contribution(contribution),
							style: `color: #3b82f6`,
							contribution: contribution
						}))}
						bind:selected={selected_contributions_dependencies}
						name="dependencies"
						placeholder="Select dependencies"
						removeAllTitle="Remove all dependencies"
					/>
				</div>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Please list any contribution that was directly used or had an influence on this
					contribution.
				</p>
			</div>

			<div class="sm:col-span-4">
				<label for="tags" class="block text-sm font-medium leading-6 text-gray-900"
					>Tags <a href="/tags" target="_blank" title="Tags"
						><i class="fa-solid fa-arrow-up-right-from-square text-xs ml-0.5"></i></a
					>
					<button
						type="button"
						title="reload"
						on:click={async () => {
							await invalidateAll();
						}}><i class="fa-solid fa-arrows-rotate text-xs ml-0.5"></i></button
					>
				</label>

				<div class="mt-2">
					{#if tags}
						<MultiSelect
							options={tags.map((tag) => ({
								label: tag.display_name,
								style: `background-color: ${tag.color}; color: white;`,
								tag: tag
							}))}
							name="tags"
							bind:selected={selected_tags}
							placeholder="Select tags"
							removeAllTitle="Remove all tags"
						/>
					{/if}
				</div>

				<p class="mt-1 text-sm leading-6 text-gray-600">
					Appropriate tagging will help the discoverability of the contribution.
				</p>
			</div>
		</div>
	</div>

	<div class="border-b border-gray-900/10 pb-12">
		<h2 class="text-base font-semibold leading-7 text-gray-900">Featured Links</h2>
		<p class="mt-1 text-sm leading-6 text-gray-600">
			Feel free to add any link (GitHub, Discourse, bbchallenge, etc...) that you think is relevant
			to this contribution.
		</p>

		<div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
			<div class="sm:col-span-4">
				<label for="where-chat" class="block text-sm font-medium leading-6 text-gray-900"
					>Where to chat about it? <a
						href="https://discord.com/invite/3uqtPJA9Uv"
						title="bbchallenge discord server invite"
						target="_blank"><i class="fa-brands fa-discord"></i></a
					></label
				>

				<div class="mt-2">
					<input
						type="text"
						name="where-chat"
						id="where-chat"
						autocomplete="off"
						bind:value={contrib.discord_chat_link}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Link to the discord channel or thread (or message to thread from) that is most relevant
					for discussing this contribution.
				</p>
			</div>

			<div class="sm:col-span-4">
				<label for="github-link" class="block text-sm font-medium leading-6 text-gray-900"
					>GitHub <i class="fa-brands fa-github"></i></label
				>

				<div class="mt-2">
					<input
						type="text"
						name="github-link"
						id="github-link"
						bind:value={contrib.github_link}
						autocomplete="off"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Link to the contribution's GitHub repo/gist, if relevant.
				</p>
			</div>

			<div class="sm:col-span-4">
				<label for="forum-link" class="block text-sm font-medium leading-6 text-gray-900"
					>Forum post <a
						href="https://discuss.bbchallenge.org"
						title="bbchallenge discord server invite"
						target="_blank"><i class="fa-brands fa-discourse"></i></a
					></label
				>

				<div class="mt-2">
					<input
						type="text"
						name="forum-link"
						id="forum-link"
						autocomplete="off"
						bind:value={contrib.forum_link}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Link to the contribution's forum topic or message, if relevant.
				</p>
			</div>

			<div class="sm:col-span-4">
				<label for="wiki-link" class="block text-sm font-medium leading-6 text-gray-900"
					>Wiki link <a
						href="https://wiki.bbchallenge.org"
						title="bbchallenge discord server invite"
						target="_blank"><i class="fa-solid fa-book"></i></a
					></label
				>

				<div class="mt-2">
					<input
						type="text"
						name="wiki-link"
						id="wiki-link"
						autocomplete="off"
						bind:value={contrib.wiki_link}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					Link to the contribution's wiki page, if relevant.
				</p>
			</div>

			<div class="sm:col-span-4 mb-5">
				<h2 class="text-base font-semibold leading-7 text-gray-900">Other featured links</h2>
				{#if contrib.links.length > 0}
					<table>
						<thead>
							<tr>
								<th class="text-left text-sm font-medium leading-6 text-gray-900">Name</th>
								<th class="text-left text-sm font-medium leading-6 text-gray-900">Link</th>
							</tr>
						</thead>
						<tbody>
							{#each contrib.links as link, i}
								<tr>
									<td class="w-2/5 pr-2"
										><input
											type="text"
											name="link-name-{i}"
											id="link-name-{i}"
											bind:value={link.description}
											autocomplete="off"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/></td
									>
									<td
										><input
											type="text"
											name="link-url-{i}"
											id="link-url-{i}"
											bind:value={link.url}
											autocomplete="off"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</td>
									<td
										><button
											type="button"
											on:click={() => {
												removeLink(i);
											}}><i class="fa-regular fa-circle-xmark pl-1"></i></button
										></td
									>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
				<div class="mt-3">
					<button
						type="button"
						class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						on:click={() => addFeaturedLink()}
					>
						<i class="fa-solid fa-circle-plus mr-1"></i>
						Add featured link
					</button>
				</div>
			</div>
		</div>

		<div class="">
			<h2 class="text-base font-semibold leading-7 text-gray-900">Description</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				<em class="text-green-500">Coming soon:</em> markdown and latex formatting.
			</p>

			<div class="mt-5">
				<textarea
					id="description"
					name="description"
					bind:value={contrib.description}
					rows="10"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				></textarea>
			</div>

			<div class="col-span-full mt-5">
				<label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
					>Attachments
				</label>

				<em class="text-green-500 text-sm">Coming soon</em>

				<!-- <div
					class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 opacity-50"
				>
					<div class="text-center">
						<svg
							class="mx-auto h-12 w-12 text-gray-300"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<div class="mt-4 flex text-sm leading-6 text-gray-600">
							<label
								for="file-upload"
								class="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
								
							>
								<span>Upload a file</span>
								<input id="file-upload" name="file-upload" type="file" class="sr-only" disabled />
							</label>
							<p class="pl-1">or drag and drop</p>
						</div>
						<p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</div>
