<script lang="ts">
	import { onMount } from 'svelte';
	import Box from './Box.svelte';
	import Widget from './Widget.svelte';

	import * as configuration from './configuration.json';

	function getCurrentTheme() {
		let time = new Date();
		let hour = time.getHours();

		return ((hour > 17 || hour < 6) ? "dark" : "light");
	}

	let theme = getCurrentTheme();
	
	const boxes = configuration.boxes;
	
	onMount(() => {
		document.documentElement.setAttribute("theme", theme);
	});
	
	/*
	onkeydown = (e) => {
		switch (e.key.toLowerCase()) {
			// ... all your cases here
		} 
	}
	*/
</script>

<main>
	<div id="parent-flex">
		<div id="group1">
			<div class="title-bar">
				<p id="title">title</p>
				
				<Widget theme={getCurrentTheme()}/>
			</div>
			
			<div class="grid">
				{#each boxes as box, i}
					<Box {box} boxColour={configuration.colours[i]}/>
				{/each}
			</div>
		</div>
		
		<div id="dummy-flex"></div>
		
		<p id="server-info">something here...</p>
	</div>
</main>


<style>
	#title {
		font-size: 3.4rem;
	}

	@media(max-width: 750px) {
		#title {
			font-size: 3.8rem;
			margin-bottom: 0.6rem;
			line-height: 3.75rem;
		}
	}

	#server-info {
		font-family: space-mono;
		font-size: 13px;
	}

	#parent-flex {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		box-sizing: border-box;
	}

	.title-bar {
		width: 90vw;
		margin-bottom: 4.7rem;
	}

	@media(max-width: 750px) {
		.title-bar {
			display: flex;
			flex-direction: column;
			justify-items: left;
			margin-bottom: 2rem;
		}
		
		.grid {
			display: flex;
			flex-direction: column;
			gap: 16px;
			padding-right: 0;
			margin-right: 0;
		}
	}

	@media(min-width: 751px) {
		.title-bar {
			display: flex;
			justify-content: space-between; 
			align-items: center;
		}
		
		.grid {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 20px;
		}
	}
</style>
