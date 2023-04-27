<script>
    export let box;
</script>

<!-- svelte-ignore security-anchor-rel-noreferrer -->
<a rel="noreferrer noopener" href={box.href}>
    <div class="box" style="--c: {box.colour}">
        <div class="text" style="--c: {box.colour}">
            <p class="title-char">{box.name[0].toUpperCase()}</p>
            <p class="subtitle">{box.name}</p>
        </div>
    </div>
</a>

<style>
    .box {
        cursor: pointer;        

        border-style: solid;
        border-color: rgb(var(--c));

        position: relative;

        color: rgb(var(--c));

        margin: 0;
    }

    @media(min-width: 751px) {
        .box {
            border-width: 0.675rem;
            padding: 0.675rem;

            width: min(12.5rem, max(15vw, 10vh));
            height: min(12.5rem, max(15vw, 10vh));
        }
    }


    @media(max-width: 750px) {
        .box {
            border-width: 0.625rem;
            padding: 0.625rem;

            height: 6rem;
        }
    }


    .box:hover {
        background-color: rgb(var(--c));
        color: white;

        box-shadow: 0px 0px 28px 6px rgba(var(--c), 0.28);
    }

    .box:active {
        box-shadow: 0px 0px 28px 6px rgba(var(--c), 0.48);
    }

    .text {
        color: inherit;
        position: absolute;

        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .text * {
        margin: 0;
        padding: 0;
    }

    .title-char {
        font-family: space-mono;
    }
    
    .subtitle {
        font-size: 1.75rem;
    }

    @media(min-width: 751px) {
        .text {
            bottom: 0.625rem;
        }

        .title-char {
            position: absolute;
            bottom: 4.5rem;
            font-size: 7rem;
        }
    }


    @media(max-width: 750px) {
        .text {
            box-sizing: border-box;

            width: 100%;
            height: 100%;

            padding: 0.625rem;

            transform: translate(-0.625rem, -0.625rem);

            display: flex;
            justify-content: space-between;
            align-items: end;

            gap: 1rem;
        }

        .title-char {
            align-self: center;
            font-size: 6rem;
        }
    }
</style>