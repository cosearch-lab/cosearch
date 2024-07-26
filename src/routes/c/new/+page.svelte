<script lang="ts">
	import { goto } from '$app/navigation';
	import MultiSelect from 'svelte-multiselect';

	const ui_libs = [`Svelte`, `React`, `Vue`, `Angular`, `...`];

	function random_color() {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		return `rgb(${r}, ${g}, ${b})`;
	}
	let selected: string[] = [];
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-0">
		<li>
			<div>
				<a href="/" class="text-gray-400 hover:text-gray-500"> Contributions (200) </a>
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
	<div class="space-y-5">
		<div class="border-b border-gray-900/10 pb-10">
			<h2 class="text-base font-semibold leading-7 text-gray-900">New Contribution</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				Any result, experiment, successful or unsuccessful idea, and more generally, anything which
				you believe is helpful for the future of the project is a suitable contribution.
			</p>

			<div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
				<div class="sm:col-span-4">
					<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
						>Title*</label
					>
					<div class="mt-2">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:col-span-2 sm:col-start-1">
					<label for="city" class="block text-sm font-medium leading-6 text-gray-900"
						>Short Title</label
					>
					<div class="mt-2">
						<input
							type="text"
							name="city"
							id="city"
							autocomplete="address-level2"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="region" class="block text-sm font-medium leading-6 text-gray-900">Date*</label
					>
					<div class="mt-2">
						<input
							type="date"
							class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:col-span-4">
					<label for="country" class="block text-sm font-medium leading-6 text-gray-900"
						>Contributors* <a href="/contributors" target="_blank" title="Contributors"
							><i class="fa-solid fa-arrow-up-right-from-square text-xs ml-0.5"></i></a
						> <i class="fa-solid fa-arrows-rotate text-xs ml-0.5"></i></label
					>
					<div class="mt-2">
						<MultiSelect
							options={ui_libs.map((label) => ({
								label,
								style: `background-color: ${random_color()}`
							}))}
							placeholder="Pick your favorite foods"
							removeAllTitle="Remove all foods"
						/>
					</div>
					<p class="mt-1 text-sm leading-6 text-gray-600">
						Please list anyone that was involved in this contribution. You can use the Description
						field to provide more details on the role of each contributor.
					</p>
				</div>

				<div class="sm:col-span-4">
					<label for="country" class="block text-sm font-medium leading-6 text-gray-900"
						>Dependencies <a href="/" target="_blank" title="Contributions"
							><i class="fa-solid fa-arrow-up-right-from-square text-xs ml-0.5"></i></a
						>
						<i class="fa-solid fa-arrows-rotate text-xs ml-0.5"></i></label
					>
					<div class="mt-2">
						<MultiSelect
							options={ui_libs.map((label) => ({
								label,
								style: `background-color: ${random_color()}`
							}))}
							placeholder="Pick your favorite foods"
							removeAllTitle="Remove all foods"
						/>
					</div>
					<p class="mt-1 text-sm leading-6 text-gray-600">
						Please list any contribution that was directly used or had an influence on this
						contribution.
					</p>
				</div>

				<!-- <div class="col-span-6 block text-sm font-medium leading-6 text-gray-900">
					Featured Links
				</div>
				<div class="sm:col-span-6 flex space-x-3">
					<div>
						<label for="city" class="block text-sm font-medium leading-6 text-gray-900"
							>Description</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="city"
								id="city"
								autocomplete="address-level2"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="w-4/5">
						<label for="region" class="block text-sm font-medium leading-6 text-gray-900"
							>Link</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="city"
								id="city"
								autocomplete="address-level2"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
				</div>

				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-gray-900"
						>Description</label
					>
					<div class="mt-2">
						<textarea
							id="about"
							name="about"
							rows="3"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						></textarea>
					</div>
					<p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
				</div> -->

				<div class="sm:col-span-4">
					<label for="country" class="block text-sm font-medium leading-6 text-gray-900"
						>Tags <a href="/tags" target="_blank" title="Tags"
							><i class="fa-solid fa-arrow-up-right-from-square text-xs ml-0.5"></i></a
						>
						<i class="fa-solid fa-arrows-rotate text-xs ml-0.5"></i>
					</label>

					<div class="mt-2">
						<MultiSelect
							options={ui_libs.map((label) => ({
								label,
								style: `background-color: ${random_color()}`
							}))}
							placeholder="Pick your favorite foods"
							removeAllTitle="Remove all foods"
						/>
					</div>

					<p class="mt-1 text-sm leading-6 text-gray-600">
						Appropriate tagging will help the discoverability of the contribution.
					</p>
				</div>

				<div class="sm:col-span-4">
					<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
						>Where to chat about it? <a
							href="https://discord.com/invite/3uqtPJA9Uv"
							title="bbchallenge discord server invite"
							target="_blank"><i class="fa-brands fa-discord"></i></a
						></label
					>

					<div class="mt-2">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<p class="mt-1 text-sm leading-6 text-gray-600">
						Link to the discord channel or thread that is most relevant for discussing this
						contribution.
					</p>
				</div>
			</div>
		</div>

		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base font-semibold leading-7 text-gray-900">Featured Links</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				Feel free to add any link (GitHub, Discourse, bbchallenge, etc...) that you think is
				relevant to this contribution.
			</p>

			<div class="flex w-4/6 space-x-3 mt-5">
				<div>
					<label for="city" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
					<div class="mt-2">
						<input
							type="text"
							name="city"
							id="city"
							autocomplete="address-level2"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="w-4/5">
					<label for="region" class="block text-sm font-medium leading-6 text-gray-900">Link</label>
					<div class="mt-2">
						<input
							type="text"
							name="city"
							id="city"
							autocomplete="address-level2"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
			</div>

			<div class="mt-5">
				<button
					type="button"
					class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					on:click={() => goto('/c/new')}
				>
					<i class="fa-solid fa-circle-plus mr-1"></i>
					Add featured link
				</button>
			</div>
		</div>

		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base font-semibold leading-7 text-gray-900">Description</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				<em class="text-green-500">Coming soon:</em> markdown and latex formatting.
			</p>

			<div class="mt-5">
				<textarea
					id="about"
					name="about"
					rows="3"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				></textarea>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6 mb-10">
		<button
			type="button"
			class="text-sm font-semibold leading-6 text-gray-900"
			on:click={() => {
				goto('/');
			}}>Cancel</button
		>
		<button
			type="submit"
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Save</button
		>
	</div>
</form>
