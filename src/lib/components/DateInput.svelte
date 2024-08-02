<script>
	import dayjs from 'dayjs';

	export let format = 'YYYY-MM-DD';
	export let date = new Date();

	let internal;

	const input = (x) => (internal = dayjs(x).format(format));
	const output = (x) => (date = dayjs(x, format).toDate());

	$: input(date);
	$: output(internal);
</script>

<input
	type="date"
	id="date"
	name="date"
	bind:value={internal}
	max={dayjs().format(format)}
	class="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
	required
/>
