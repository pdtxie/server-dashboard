<script>
    export let box;
</script>

<main>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    <a rel="noreferrer noopener" href={box.loc}>
        <div class="box" style="--c: {box.c}">
            <div class="text" style="--c: {box.c}">
                <p class="title-char">{box.name[0].toUpperCase()}</p>
                <p class="subtitle">{box.name}</p>
            </div>
        </div>
    </a>
</main>

