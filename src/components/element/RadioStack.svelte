<script lang="ts">
     import RadioChecked from '$components/svg/RadioChecked.svelte';
     import RadioUnchecked from '$components/svg/RadioUnchecked.svelte';
     
    interface Props {
        total: number;
        selected: number;
        size: number;
        color: string;
    }

    let { 
        total = 5,
        selected = 0,
        size = 24,
        color = "#000",
        ...rest
     }: Props = $props();
</script>

<div class="radio-stack" {...rest}>
    {#each Array(total) as _, index}
        {#if index < selected}
            <RadioChecked width={size} height={size} fill={color} />
        {:else}
            <RadioUnchecked width={size} height={size} fill={color} />
        {/if}
    {/each}
</div>

<style>
    .radio-stack {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
</style>
