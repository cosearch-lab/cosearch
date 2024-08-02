<script lang="ts">
	import type { components } from '$lib/cosearch';
	import { copy } from 'svelte-copy';
	import { goto } from '$app/navigation';
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
				<div class="text-sm flex space-x-1">
					<span>Dependencies:</span>
					<div>
						{#each contrib.dependencies as dependency, index}
							<a href="/" class="l">{dependency}</a>{#if index !== contrib.dependencies.length - 1}
								<span>, </span>
							{/if}
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

			<div class="text-sm flex space-x-2">
				<div>
					{#each contrib.tags as tag, index}
						<a href="/tags/4">
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
				<button
					type="button"
					on:click={() => goto(`/contribution/${contrib.id}`)}
					class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>View</button
				>

				<button
					type="button"
					on:click={() => goto(`/contribution/${contrib.id}/reviews`)}
					class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>Review ({contrib.reviews.length})</button
				>

				<!-- <button
					type="button"
					class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					title="Add reaction"><i class="fa-regular fa-face-smile"></i></button
				> -->

				<button
					type="button"
					title="Copy link"
					use:copy={`https://cosearch.bbchallenge.org/contribution/${contrib.id}`}
					><i class="fa-solid fa-link text-sm"></i></button
				>
			</div>
		</div>
	</div>
</div>
