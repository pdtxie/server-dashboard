<script>
    import { onMount } from "svelte";

    let date = new Date();

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
</script>

<main>
    <div class="container">
        <div class="td">
            <h2>{displayTime}</h2>
            <h3>{displayDate}</h3>
        </div>

        <div class="sep"></div>

        <div class="weather"> </div>
    </div>
</main>

<style>
    @media(max-width: 800px) {
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            max-height: 4rem;
            width: 90vw;
            margin: 0;
        }

        .td {
            display: flex;
            flex-direction: row;
            column-gap: 1rem;
            align-items: baseline;
            margin: 0;
        }
    }

    @media(min-width: 801px) {
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            max-height: 4rem;
        }

        .td {
            display: flex;
            flex-direction: column;
        }
    }
    

    /* .sep {
        border-left: 0.15rem solid var(--text);
        height: 2.8rem;
    } */
</style>