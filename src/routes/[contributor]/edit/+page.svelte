<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUT } from '$lib/api';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';

	export let data;

	let contributor = $page.params.contributor;

	let updateError = null;
	async function updateContributor(event: Event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();
		if (!valid) {
			form.reportValidity();
			return;
		}

		if (!data.contributor) {
			return;
		}
		try {
			await PUT('/contributors/{contributor_id}', {
				params: { path: { contributor_id: data.contributor.id } },
				body: data.contributor
			});
			await invalidateAll();
			goto(`/${data.contributor.local_handle}`);
		} catch (error) {
			updateError = error;
			console.error(error);
		}
	}
</script>

{#if data.contributor}
	<form class="sm:w-4/5">
		<div class="space-y-5">
			<div class="border-b border-gray-900/10 pb-10">
				<!-- <h2 class="text-base font-semibold leading-7 text-gray-900">New Contributor</h2> -->
				<!-- <p class="mt-1 text-sm leading-6 text-gray-600">
				Any result, experiment, successful or unsuccessful idea, and more generally, anything which
				you believe is helpful for the future of the project is a suitable contribution.
			</p> -->

				<div class=" grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
					<div class="sm:col-span-4">
						<label for="handle" class="inline-block text-sm font-medium leading-6 text-gray-900"
							>Handle*</label
						>
						<div class="flex items-center space-x-0.5">
							<div class="w-2/5">
								<div class="mt-2">
									<input
										type="text"
										name="handle"
										id="handle"
										class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										pattern="[a-zA-Z0-9_\-]+"
										title="Alphanumeric characters, - and _ only."
										bind:value={data.contributor.local_handle}
										required
									/>
								</div>
							</div>
							<div class="text-md text-gray-600">@cosearch.bbchallenge.org</div>
						</div>

						<p class="text-xs leading-5 text-gray-600">
							Handles must be URL-safe, i.e. including only alphanumeric characters, <span
								class="pre">-</span
							>
							and <span class="pre">_</span>. That is, anything matching the regex
							<span class="pre">[a-zA-Z0-9_-]+</span>.
						</p>
					</div>

					<div class="sm:col-span-3">
						<label
							for="display_name"
							class="inline-block text-sm font-medium leading-6 text-gray-900">Display name</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="display_name"
								id="display_name"
								bind:value={data.contributor.display_name}
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<p class="text-xs leading-5 text-gray-600">Any UTF-8 string.</p>
					</div>

					<div class="sm:col-span-3">
						<label
							for="discord_display_name"
							class="block text-sm font-medium leading-6 text-gray-900"
							>Discord display name <a
								href="https://discord.com/invite/3uqtPJA9Uv"
								title="bbchallenge discord server invite"
								target="_blank"><i class="fa-brands fa-discord"></i></a
							></label
						>

						<div class="mt-2">
							<input
								type="text"
								name="discord_display_name"
								id="discord_display_name"
								bind:value={data.contributor.discord_handle}
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="github_profile" class="block text-sm font-medium leading-6 text-gray-900"
							>GitHub profile <i class="fa-brands fa-github"></i></label
						>

						<div class="mt-2">
							<input
								type="text"
								name="github_profile"
								id="github_profile"
								bind:value={data.contributor.github_account}
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<p class="text-xs leading-5 text-gray-600">
							<span class="select-all">https://github.com/torvalds</span>
						</p>
					</div>

					<div class="sm:col-span-3">
						<label
							for="wiki_contributions"
							class="block text-sm font-medium leading-6 text-gray-900"
							>Wiki contributions <a href="https://wiki.bbchallenge.org" target="_blank"
								><i class="fa-solid fa-arrow-up-right-from-square text-xs"></i></a
							></label
						>

						<div class="mt-2">
							<input
								type="text"
								name="wiki_contributions"
								id="wiki_contributions"
								bind:value={data.contributor.wiki_account}
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<p class="text-xs leading-5 text-gray-600">
							<span class="select-all"
								>https://wiki.bbchallenge.org/wiki/Special:Contributions/Sligocki</span
							>
						</p>
					</div>

					<div class="sm:col-span-3">
						<label for="discourse_profile" class="block text-sm font-medium leading-6 text-gray-900"
							>Discourse profile <a href="https://discuss.bbchallenge.org" target="_blank"
								><i class="fa-brands fa-discourse"></i></a
							></label
						>

						<div class="mt-2">
							<input
								type="text"
								name="discourse_profile"
								id="discourse_profile"
								bind:value={data.contributor.discourse_account}
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<p class="text-xs leading-5 text-gray-600">
							<span class="select-all">https://discuss.bbchallenge.org/u/cosmo</span>
						</p>
					</div>

					<div class="sm:col-span-3">
						<label for="personal_website" class="block text-sm font-medium leading-6 text-gray-900"
							>Personal website
						</label>

						<div class="mt-2">
							<input
								type="text"
								name="personal_website"
								id="personal_website"
								bind:value={data.contributor.website}
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
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
					goto(`/${contributor}`);
				}}>Cancel</button
			>
			<button
				type="submit"
				on:click={async (event) => {
					await updateContributor(event);
				}}
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Save</button
			>
		</div>
	</form>
{/if}
