<script lang="ts">
	import type { components } from '$lib/cosearch';
	import { copy } from 'svelte-copy';
	export let contrib: components['schemas']['ContributionShort'];
	export let review = false;

	import { prettyPrintDate } from '$lib';
</script>

<div class="flex space-x-7 items-center">
	<div>
		{#if !review}
			<i class="fas fa-solid fa-flag"></i>
		{:else}
			<i class="fas fa-solid fa-magnifying-glass"></i>
		{/if}
	</div>
	<div>
		<div>{contrib.title}</div>
		<div>
			<div class="text-sm flex space-x-1">
				<span>{prettyPrintDate(contrib.date)}</span> <span>&middot;</span>
				{#each contrib.contributors as contributor, index}
					<a href="/{contributor.local_handle}" class="l"
						>{contributor.display_name || contributor.local_handle}</a
					>{#if index !== contrib.contributors.length - 1},
					{/if}
				{/each}
			</div>
			{#if contrib.dependencies && contrib.dependencies.length > 0}
				<div class="text-sm flex space-x-1 -mb-1.5">
					<span>Dependencies:</span>
					<div class="flex">
						{#each contrib.dependencies as dependency, index}
							<div>
								<a href="/contribution/{dependency.id}" class="l truncate-dependencies"
									>{dependency.short_title || dependency.title}</a
								>
							</div>
							{#if index !== contrib.dependencies.length - 1}
								<div class="mr-1">,</div>{/if}
						{/each}
					</div>
				</div>
			{/if}
			<!-- <div class="text-xs flex space-x-1.5 items-center mb-0.5">
                <div class="flex items-center space-x-0.5">
                    <span>{contrib.number_of_reviews}</span>
                    <i class="fa-solid fa-magnifying-glass h-3" title="reviews"></i>
                </div>

                <div class="flex items-center">
                    <span>{contrib.number_of_stars}</span>
                    <i class="fas fa-star fa-fw" title="stars"></i>
                </div>
                
                        <div class="flex items-center space-x-0.5">
                            <span>{result.number_of_views}</span>
                            <i class="fas fa-eye fa-fw" title="views"></i>
                        </div> 
            </div> -->

			<div class="flex space-x-1">
				<button
					type="button"
					title="Copy link"
					use:copy={`https://cosearch.bbchallenge.org/contribution/${contrib.id}`}
					><i class="fa-solid fa-link text-sm"></i></button
				>

				<div>
					{#if contrib.github_link}
						<a href={contrib.github_link} target="_blank" title="Github">
							<i class="fa-brands fa-github text-sm"></i>
						</a>
					{:else}
						<i class="fa-brands fa-github text-sm text-gray-400"></i>
					{/if}
				</div>

				<div>
					{#if contrib.discord_chat_link}
						<a href={contrib.discord_chat_link} target="_blank" title="Gitlab">
							<i class="fa-brands fa-discord text-sm"></i>
						</a>
					{:else}
						<i class="fa-brands fa-discord text-sm text-gray-400"></i>
					{/if}
				</div>

				<div>
					{#if contrib.forum_link}
						<a href={contrib.forum_link} target="_blank" title="Forum link">
							<i class="fa-brands fa-discourse text-sm"></i>
						</a>
					{:else}
						<i class="fa-brands fa-discourse text-sm text-gray-400"></i>
					{/if}
				</div>

				<div>
					{#if contrib.wiki_link}
						<a href={contrib.wiki_link} target="_blank" title="Wiki link">
							<i class="fa-solid fa-book text-sm"></i>
						</a>
					{:else}
						<i class="fa-solid fa-book text-sm text-gray-400"></i>
					{/if}
				</div>
			</div>

			<div class="text-sm flex space-x-2">
				<div>
					{#each contrib.tags as tag, index}
						<a href="/tags/{tag.id}">
							<span
								class=" text-white px-1 rounded-sm py-0.5 text-xs"
								style="background-color: {tag.color}">{tag.display_name}</span
							></a
						>{#if index !== contrib.tags.length - 1}
							<span>&nbsp;</span>
						{/if}
					{/each}
				</div>
			</div>

			<div class="mt-2 flex space-x-2">
				<a
					href={`/contribution/${contrib.id}`}
					class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>View</a
				>

				<a
					href={`/contribution/${contrib.id}/reviews`}
					class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>Reviews ({contrib.reviews.length})</a
				>

				<a
					href={`/contribution/${contrib.id}/children`}
					class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>Children ({#await getChildren(contrib)}0{:then children}{children.length}{/await})
				</a>
			</div>
		</div>
	</div>
</div>
