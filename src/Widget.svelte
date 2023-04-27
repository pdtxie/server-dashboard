<script>
    import { onMount } from "svelte";

    let date = new Date();

    export let theme;

    let currentTheme = theme;
    console.log(currentTheme);

    $: h = date.getHours();
    $: m = date.getMinutes();

    $: displayH = (h < 10) ? "0" + h : h;
    $: displayM = (m < 10) ? "0" + m : m;

    if (h > 17) {
        document.body.classList.toggle("dark-theme")
    }

    $: displayTime = displayH + ":" + displayM;

    const displayDate = date.toLocaleDateString("en-NZ", { weekday: "short", month: "short", day: "numeric" });

    onMount(() => {
        const interval = setInterval(() => {
            date = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    function toggleTheme(event) {
        console.log(currentTheme);

        if (currentTheme === "light") {
            document.documentElement.setAttribute("theme", "dark");
            currentTheme = "dark";
        } else {
            document.documentElement.setAttribute("theme", "light");
            currentTheme = "light";
        }
    }
</script>

<div class="container">
    <div class="td">
        <h2 id="time">{displayTime}</h2>
        <div id="sep1"></div>
        <h3 id="date">{displayDate}</h3>
    </div>

    <div id="sep2"></div>

    <div on:mousedown={toggleTheme} id="icon">
        {#if currentTheme === "light"}
            <img src="icons/sun.png" alt="icon" width="48" height="48">
        {:else}
            <img src="icons/moon.png" alt="icon" width="48" height="48">
        {/if}
    </div>
</div>


<style>
    @media(max-width: 750px) {
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            max-height: 4rem;
            width: 90vw;
            margin: 0;
        }

        #time {
            font-size: 2.25rem;
        }

        #sep1 {
            display: block;
            width: 0.15rem;
            height: 1rem;
            background-color: var(--text);
        }

        .td {
            display: flex;
            flex-direction: row;
            column-gap: 0.75rem;
            align-items: baseline;
            margin: 0;
        }

        #icon {
            display: none;
            height: 18px;
        }
    }

    @media(min-width: 751px) {
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            max-height: 4rem;
        }

        .td {
            display: flex;
            flex-direction: column;
        }

        #sep2 {
            display: block;
            width: 0.15rem;
            height: 2.4rem;
            background-color: var(--text);
        }
    }

    #icon:hover {
        cursor: pointer;
    }
</style>
