<script lang="ts">
	import type { Contribution } from '$lib/index';
	export let contrib: Contribution;
</script>

<div class="flex space-x-7 items-center">
	<div>
		<i class="fas fa-solid fa-flag"></i>
	</div>
	<div>
		<div>{contrib.title}</div>
		<div>
			<div class="text-sm flex space-x-1">
				<span>{contrib.date}</span> <span>&middot;</span>
				{#each contrib.authors as author, index}
					<a href="/mxdys" class="l">{author}</a>
					{#if index !== contrib.authors.length - 1}
						<span>, </span>
					{/if}
				{/each}
			</div>
			{#if contrib.dependencies}
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
						<span class="{tag.color} text-white px-1 rounded-sm py-0.5 text-xs">{tag.name}</span
						>{#if index !== contrib.tags.length - 1}
							<span>&nbsp;</span>
						{/if}
					{/each}
				</div>
			</div>
			<div class="mt-2 flex space-x-2">
				<a href={`/c/${contrib.id}`}>
					<button
						type="button"
						class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>View</button
					>
				</a>
				<a href={`/c/${contrib.id}/reviews`}>
					<button
						type="button"
						class="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>Review ({contrib.number_of_reviews})</button
					>
				</a>
			</div>
		</div>
	</div>
</div>
