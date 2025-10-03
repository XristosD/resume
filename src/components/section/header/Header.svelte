<script lang="ts">
	import Email from "$components/svg/Email.svelte";
	import Github from "$components/svg/Github.svelte";
	import Linkedin from "$components/svg/Linkedin.svelte";
	import Mobile from "$components/svg/Mobile.svelte";
	import type { Component } from "svelte";
</script>

<!-- Header -->
<header class="header">
    <!-- Title -->
    <div class="container title-container">
    <h1 class="title">CHRISTOS DIAMANTIS</h1>
    <h2 class="subtitle">FULL STACK DEVELOPER</h2>
    </div>
    <!-- End Title -->
    <!-- Communications -->
    <div class="communications-container">
    <!-- End Toggle Communications -->
    <!-- Communications Container -->
    <div class="communications">
        <div class="communications-inner-container" id="comms-height">
            {@render linkedCommunication('mailto:xristos567@gmail.com', Email, 'xristos567@gmail.com')}
            {@render linkedCommunication('tel:+306977562318', Mobile, '+306977562318')}
            {@render linkedCommunication('https://www.linkedin.com/in/christos-diamantis-th', Linkedin, '/christos-diamantis-th')}
            {@render linkedCommunication('https://www.github.com/xristosD', Github, '/xristosD')}
        </div>
    </div>
    <!-- End Communications Container -->
    </div>
    <!-- End Communications -->
</header>

{#snippet linkedCommunication(link: string, Icon: Component<{width: number, height: number, fill: string}>, text: string)}
    <div class="single-communication">
        <a href={link}>
            <Icon width={20} height={20} fill="currentColor" />
            <span>{text}</span>
        </a>
    </div>
{/snippet}

<style>
    .header {
        display: flex;
        flex-direction: column;
    }

    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1.3rem auto;
        flex-direction: column;
    }

    .title {
        text-align: center;
        margin: 0;
        color: var(--grey-light);
        font-family: var(--body-font);
        font-weight: 900;
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
        transition: var(--transition);
    }

    .subtitle {
        margin: 0;
        text-align: center;
        color: var(--grey-dark);
        font-family: var(--header-font);
        font-weight: normal;
        font-size: 1.5rem;
        transition: var(--transition);
    }

    .communications-container {
        background: var(--grey-light);
        font-family: var(--body-font);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .single-communication {
        display: flex;
        align-content: center;
    }

    .single-communication a {
        padding: 0.4rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
    }

    .single-communication a:hover {
        text-decoration: none;
    }

    @media print, screen and (min-width: 576px) {
    .title {
        font-size: 2rem;
    }
    }

    @media print, screen and (min-width: 768px) {
    .title {
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
        font-weight: 800;
    }
    .subtitle {
        font-size: 2rem;
        letter-spacing: 0.25rem;
    }
    .communications-container {
        align-items: unset;
    }
    .communications {
        height: auto !important;
    }
    .communications-inner-container {
        display: flex;
        justify-content: space-between;
        height: auto;
        width: 90vw;
        max-width: var(--max-width);
        margin: auto;
    }
    }

    @media print, screen and (min-width: 992px) {
    .title {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 0.3rem;
    }
    }
</style>