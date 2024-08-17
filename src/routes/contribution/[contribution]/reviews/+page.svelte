<script>
	import { goto } from '$app/navigation';
	import { copy } from 'svelte-copy';

	export let data;
</script>

{#if data.contribution}
	<div>
		<button
			type="button"
			class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			on:click={() => {
				goto(`/contribution/${data.contribution.id}/reviews/new`);
			}}
		>
			<i class="fa-solid fa-circle-plus mr-1"></i>
			Add review
		</button>
	</div>

	{#if data.contribution.reviews.length > 0}
		<table class="w-2/3 text-xs border-collapse border border-slate-400">
			<thead class="text-left">
				<th class="border border-slate-300 p-1">Reviewers</th>
				<th class="border border-slate-300 p-1">URL</th>
				<th class="border border-slate-300 p-1">Notes</th>
			</thead>
			<tbody>
				{#each data.contribution.reviews as review}
					{#if review}
						<tr>
							<td class="border border-slate-300 p-1">
								{#each review.reviewers as reviewer}
									<a href="/{reviewer.local_handle}" class="l"
										>{reviewer.display_name || reviewer.local_handle}</a
									>{#if reviewer !== review.reviewers[review.reviewers.length - 1]}<span>, </span>
									{/if}
								{/each}
							</td>
							<td class="border border-slate-300 p-1">
								{#if review.link}
									<a href={review.link} class="l">{review.link}</a>
								{/if}
							</td>
							<td class="border border-slate-300 p-1 truncate max-w-[200px]" title={review.notes}>
								{#if review.notes}
									{review.notes}
								{/if}</td
							>
							<td class="border border-slate-300 p-1">
								<button
									type="button"
									on:click={() => {
										goto(`/contribution/${data.contribution.id}/reviews/${review.id}`);
									}}><i class="fa-solid fa-eye text-xs"></i></button
								>
								<button
									type="button"
									title="Copy link"
									use:copy={`https://cosearch.bbchallenge.org/contribution/${data.contribution.id}/reviews/${review.id}`}
									><i class="fa-solid fa-link text-sm"></i></button
								>
							</td>
						</tr>
					{/if}
				{/each}
				<!-- <tr>
					<td class="border border-slate-300 p-1"><a href="/" class="l">yforster</a></td>
					<td class="border border-slate-300 p-1">
						<a href="https://github.com/ccz181078/Coq-BB5" class="l"
							>https://github.com/ccz181078/Coq-BB5</a
						>
					</td>
					<td class="border border-slate-300 p-1"></td>
				</tr> -->
			</tbody>
		</table>
		<div class="pt-12"></div>
	{/if}
{/if}
