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
            <svg id="sun" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
                <path d="M450-770v-150h60v150h-60Zm256 106-42-43 106-106 42 43-106 106Zm64 214v-60h150v60H770Zm1 302L665-254l43-43 106 106-43 43ZM254-664 148-770l42-42 106 106-42 42Zm-14 484h180q33.333 0 56.667-23.265Q500-226.529 500-259.765 500-293 477.237-317 454.475-341 421-341h-44l-18-41q-15.145-35.75-47.6-56.875T240-460q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q100-262 140.833-221q40.834 41 99.167 41Zm0 60q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q57.736 0 105.368 32.5T416-401q60.117 0 101.058 43.589Q558-313.822 558-253q-5 56-44.033 94.5Q474.935-120 420-120H240Zm318-133q-3-15.385-6-30t-6-30q52-20 83-65.538 31-45.539 31-101.324Q660-555 607.5-607.5T480-660q-67.215 0-117.627 42.674Q311.962-574.652 303-509q-16-3-31.5-5.5T240-520q14-88 82.5-144T480-720q100 0 170 70t70 170.342Q720-402 675.5-340 631-278 558-253Zm-77-227Z"/>
            </svg>

        {:else}

            <svg id="moon" width="40" height="40" fill="none" viewBox="0 0 24 24">
              <path d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"/>
              <path d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"/>
            </svg>
        {/if}
    </div>
</div>


<style>
    #sun {
        fill: var(--text);
    }

    #moon { 
        stroke: var(--text);
        stroke-width: 1.5;
    }

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
            font-size: 2rem;
            padding: 0;
            margin: 0;
        }

        #sep1 {
            display: block;
            width: 3px;
            height: 1.6rem;
            background-color: var(--text);
        }

        .td {
            display: flex;
            flex-direction: row;
            column-gap: 0.75rem;
            align-items: center;
            margin: 0;
        }

        #icon {
            display: none;
        }

        #date {
            font-size: 1.6rem;
            text-align: right;
            padding: 0;
            margin: 0;
        }
    }

    @media(min-width: 751px) {
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            max-height: 4rem;
        }

        .td {
            display: flex;
            flex-direction: column;
        }

        #sep2 {
            display: none;
        }
        
        #icon {
            height: 40px;
            width: 40px;
        }

        #date {
            font-size: 1.1rem;
            text-align: right;
            padding: 0;
            margin: 0;
        }
    }

    #icon:hover {
        cursor: pointer;
    }
</style>
