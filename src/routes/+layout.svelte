<script>
	import '../app.css';
</script>

<div class="w-[85%] mx-auto mt-5 text-md flex flex-col space-y-5">
	<div class="flex flex-col">
		<div class="text-xl">
			<strong><a href="/">CoSearch</a></strong>
		</div>
		<div class="text-gray-700 text-sm">Massively Collaborative Research</div>
	</div>

	<div class="flex flex-col space-y-4">
		<div class="flex space-x-3">
			<div class="w-[80px]">
				<img src="/bbchallenge_logo_no_text.png" alt="bbchallenge logo" class="rounded-md" />
			</div>
			<div>
				<div><strong>The Busy Beaver Challenge</strong></div>
				<div><a href="https://bbchallenge.org" class="l">bbchallenge.org</a></div>
			</div>
		</div>
		<slot />
	</div>
</div>
