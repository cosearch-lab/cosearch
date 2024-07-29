<script lang="ts">
	import { goto } from '$app/navigation';
	import { POST } from '$lib/api';
	import type { components } from '$lib/cosearch';

	import ColorPicker from 'svelte-awesome-color-picker';

	let new_tag: components['schemas']['TagCreate'] = {
		display_name: '',
		color: ''
	};

	let creationError: Error | null = null;

	async function createTag(event: Event) {
		const form = event.target.closest('form');
		const valid = form.checkValidity();
		if (!valid) {
			form.reportValidity();
			return;
		}
		try {
			new_tag.color = hex;
			await POST('/tags', {
				body: new_tag
			});
			goto('/tags');
		} catch (error) {
			creationError = error;
			console.error(error);
		}
	}

	let hex = '#d9ae21';
</script>

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
				<span class="ml-0 text-sm font-medium text-gray-500 hover:text-gray-700">New</span>
			</div>
		</li>
	</ol>
</nav>
