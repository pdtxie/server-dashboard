<script>
	import { onMount } from 'svelte';
	import Box from './Box.svelte';
	import Widget from './Widget.svelte';

	import * as configuration from './configuration.json';

	function getCurrentTheme() {
		let time = new Date();
		let hour = time.getHours();

		return ((hour > 17 || hour < 6) ? "dark" : "light");
	}

	function getCurrentMessage() {
		let time = new Date();
		let hour = time.getHours();

		let message;
		
		if (hour >= 6 && hour < 12) {
			message = "Good Morning!";
		} else if (hour >= 12 && hour < 18) {
			message = "Good Afternoon!";
		} else {
			message = "Good Evening!";
		}

		return message;
	}

	
	let theme = getCurrentTheme();
	let message = getCurrentMessage();
	
	const boxes = configuration.boxes;
	
	onMount(() => {
		document.documentElement.setAttribute("theme", theme);
	});
	
	onkeydown = (e) => {
		switch (e.key.toLowerCase()) {
			case "r":
			window.open(boxes[1].href, '_self');
			break;
			
			case "s":
			window.open(boxes[2].href, '_self');
			break;
			
			case "j":
			window.open(boxes[3].href, '_self');
			break;
			
			case "p":
			window.open(boxes[6].href, '_self');
			break;
			
			
			case "h":
			window.open(boxes[7].href, '_self');
			break;
			
			case "j":
			window.open(boxes[8].href, '_self');
			break;
		} 
	}
</script>

<main>
	<div id="parent-flex">
		<div id="group1">
			<div class="title-bar">
				<h1>{message}</h1>
				
				<Widget theme={getCurrentTheme()}/>
			</div>
			
			<div class="grid">
				{#each boxes as box}
					<Box {box}/>
				{/each}
			</div>
		</div>
		
		<div id="dummy-flex"></div>
		
		<p id="server-info">pdtserver.local [192.168.1.2:2345]</p>
	</div>
</main>


<style>
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
			margin-bottom: 2.5rem;
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
