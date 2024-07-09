<nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">
	<div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
		<div class="w-1/2 pl-2 md:pl-0">
			<div class="">
				<a
					class="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"
					href="#"
				>
					Co-search
				</a>
				<p class="text-gray-500 text-sm lg:mb-0 md:mb-2 mb-0">Massively Collaborative Research</p>
			</div>
		</div>
		<div class="w-1/2 pr-0">
			<div class="flex relative inline-block float-right">
				<div class="relative text-sm">
					<button id="userButton" class="flex items-center focus:outline-none mr-3">
						<img
							class="w-8 h-8 rounded-full mr-4"
							src="http://i.pravatar.cc/300"
							alt="Avatar of User"
						/> <span class="hidden md:inline-block">Hi, User </span>
						<svg
							class="pl-2 h-2"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 129 129"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							enable-background="new 0 0 129 129"
						>
							<g>
								<path
									d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
								/>
							</g>
						</svg>
					</button>
					<div
						id="userMenu"
						class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
					>
						<ul class="list-reset">
							<li>
								<a
									href="#"
									class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
									>My account</a
								>
							</li>
							<li>
								<a
									href="#"
									class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
									>Notifications</a
								>
							</li>
							<li>
								<hr class="border-t mx-2 border-gray-400" />
							</li>
							<li>
								<a
									href="#"
									class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline"
									>Logout</a
								>
							</li>
						</ul>
					</div>
				</div>

				<div class="block lg:hidden pr-4">
					<button
						id="nav-toggle"
						class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
					>
						<svg
							class="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div
			class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
				<li class="mr-6 my-2 md:my-0">
					<a
						href="#"
						class="block py-1 md:py-3 pl-1 align-middle text-indigo-600 no-underline border-b-2 border-indigo-600 hover:border-indigo-600"
					>
						<i class="fas fa-home fa-fw mr-3 text-indigo-600"></i><span class="pb-1 md:pb-0 text-sm"
							>Projects</span
						>
					</a>
				</li>
				<li class="mr-6 my-2 md:my-0">
					<a
						href="#"
						class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:border-gray-300 hover:text-gray-700
                        border-b-2 border-white"
					>
						<i class="fas fa-solid fa-question mr-3"></i><span class="pb-1 md:pb-0 text-sm"
							>About</span
						>
					</a>
				</li>

				<li class="mr-6 my-2 md:my-0 invisible">
					<a
						href="#"
						class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500"
					>
						<i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">About</span>
					</a>
				</li>

				<li class="mr-6 my-2 md:my-0 invisible">
					<a
						href="#"
						class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500"
					>
						<i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">About</span>
					</a>
				</li>

				<li class="mr-6 my-2 md:my-0 invisible">
					<a
						href="#"
						class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500"
					>
						<i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">About</span>
					</a>
				</li>
			</ul>

			<!-- <div class="relative pull-right pl-4 pr-4 md:pr-0">
				<input
					type="search"
					placeholder="Search"
					class="w-full bg-gray-100 text-sm text-gray-800 transition border focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
				/>
				<div class="absolute search-icon" style="top: 0.375rem;left: 1.75rem;">
					<svg
						class="fill-current pointer-events-none text-gray-800 w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
						></path>
					</svg>
				</div>
			</div> -->
		</div>
	</div>
</nav>

<!--Container-->
<div class="container w-full mx-auto pt-20">
	<div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
		<div class="pt-3 flex w-full justify-between">
			<form class="max-w-md">
				<label
					for="default-search"
					class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label
				>
				<div class="relative">
					<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							class="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						class="block w-full p-2 ps-10
                        border-0
                        text-gray-900
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-300
                        placeholder:text-gray-400
                        bg-gray-50
                        focus:ring-2 focus:ring-inset
                        rounded
                        focus:ring-indigo-600
                        focus-visible:ring-indigo-600
                        sm:text-sm sm:leading-6
                        
                        "
						placeholder="Search projects"
						required
					/>
					<!-- <button
						type="submit"
						class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Search</button
					> -->
				</div>
			</form>
			<button
				type="button"
				class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<svg
					class="h-5 w-5"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
					/></svg
				>

				Create project
			</button>
		</div>
		<!--Console Content-->

		<!--Divider-->

		<div class="flex flex-row flex-wrap flex-grow mt-2">
			<div class="w-full lg:w-1/3 p-3">
				<div class="bg-white border rounded shadow">
					<div class="border-b p-3 flex justify-between">
						<h5 class="font-bold text-gray-600">bbchallenge</h5>
						<div class="flex space-x-2 items-center">
							<i class="fas fa-globe"></i>
							<img src="/icon_clyde_black_RGB.png" alt="Discord logo" class="w-5" />
							<img src="/github-mark.png" alt="GitHub logo" class="w-5" />
						</div>
					</div>
					<div class="p-5 flex space-x-5 items-center">
						<img
							src="/bbchallenge_logo_no_text.png"
							class="w-20 rounded-md"
							alt="bbchallenge logo"
						/>
						<div class="text-sm italic text-gray-600">
							Deciding the undecidable, one Turing machine at a time.
						</div>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-1/3 p-3">
				<div class="bg-white border rounded shadow">
					<div class="border-b p-3">
						<h5 class="font-bold text-gray-600">placeholder</h5>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/3 p-3">
				<div class="bg-white border rounded shadow">
					<div class="border-b p-3">
						<h5 class="font-bold text-gray-600">placeholder</h5>
					</div>
				</div>
			</div>
			<!--
			<div class="w-full md:w-1/3 p-3">

				<div class="bg-white border rounded shadow">
					<div class="border-b p-3">
						<h5 class="font-bold uppercase text-gray-600">Graph</h5>
					</div>
					<div class="p-5">
						<canvas id="chartjs-0" class="chartjs" width="undefined" height="undefined"></canvas>
					</div>
				</div>

			</div>

			<div class="w-full md:w-1/3 xl:w-1/3 p-3">

				<div class="bg-white border rounded shadow">
					<div class="border-b p-3">
						<h5 class="font-bold uppercase text-gray-600">Graph</h5>
					</div>
					<div class="p-5">
						<canvas id="chartjs-1" class="chartjs" width="undefined" height="undefined"></canvas>
					</div>
				</div>

			</div>

			<div class="w-full md:w-1/3 xl:w-1/3 p-3">
	
				<div class="bg-white border rounded shadow">
					<div class="border-b p-3">
						<h5 class="font-bold uppercase text-gray-600">Graph</h5>
					</div>
					<div class="p-5">
						<canvas id="chartjs-4" class="chartjs" width="undefined" height="undefined"></canvas>
					</div>
				</div>
			
			</div>
            -->
		</div>

		<!--/ Console Content-->
	</div>
</div>
<!--/container-->

<footer class="bg-white border-t border-gray-400 shadow">
	<!-- <div class="container max-w-md mx-auto flex py-8">
		<div class="w-full mx-auto flex flex-wrap">
			<div class="flex w-full md:w-1/2">
				<div class="px-8">
					<h3 class="font-bold font-bold text-gray-900">About</h3>
					<p class="py-4 text-gray-600 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus
						commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
					</p>
				</div>
			</div>

			<div class="flex w-full md:w-1/2">
				<div class="px-8">
					<h3 class="font-bold font-bold text-gray-900">Social</h3>
					<ul class="list-reset items-center text-sm pt-3">
						<li>
							<a
								class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1"
								href="#">Add social link</a
							>
						</li>
						<li>
							<a
								class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1"
								href="#">Add social link</a
							>
						</li>
						<li>
							<a
								class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1"
								href="#">Add social link</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div> -->
</footer>
