<script>
    import RadioStack from '$components/element/RadioStack.svelte';
    import Header from '$components/section/header/Header.svelte';
    import Section from '$components/section/Section.svelte';
	import Pdf from '$components/svg/Pdf.svelte';
    import experiences from '$lib/data/experience.json';
    import skills from '$lib/data/skills.json';
</script>


<Header />
<!-- End Header -->
<!-- Main -->
<main>
    <div class="container main-container">
    <!-- Whoami Section -->
    <Section title="WHO AM I">
        <p>
            Self motivated Software Developer dedicated in building high
            performance and secure Apps. Efficient solver of complex problems,
            working with Back-End and Front-End technologies. Well-organized
            and effective learner, currently working on building Drupal sites.
        </p>
    </Section>
    <!-- End Whoami Section -->
    <!-- Education Section -->
    <Section title="EDUCATION">
        <div class="education-body">
            <p>University of Piraeus, (2016-2021)</p>
            <p class="w-700">DEPARTMENT OF INFORMATICS</p>
            <p>Direction: Software Engineering and Intelligent Systems</p>
        </div>
    </Section>
    <!-- End Education Section -->
    <!-- Experience Section -->
    <Section title="EXPERIENCE">
        <div class="experience-body">
            <ul>
                {#if Array.isArray(experiences) && experiences.length}
                    {#each experiences as item}
                        <li>{item}</li>
                    {/each}
                {/if}
            </ul>
        </div>
    </Section>
    <!-- End Experience Section -->
    <!-- Skills Section -->
    <Section title="SKILLS">
        <div class="skills-body">
            <div class="skills-part">
                <p class="skills-part-title">Technical</p>
                <!-- Technical -->
                <div class="technical-body">
                        {#if Array.isArray(skills) && skills.length}
                            {#each skills as skill}
                                <div class="single-technical">
                                    <div class="techical-title w-700">{skill.title}</div>
                                    <div class="technical-grade">
                                        <RadioStack total={5} selected={skill.grade ?? 0} size={20} color="var(--grey-dark)" />
                                    </div>
                                </div>
                            {/each}
                        {/if}
                </div>
                <!-- End Technical -->
            </div>
            <div class="skills-part">
                <p class="skills-part-title">Personal</p>
                <p class="w-700">TEAMWORK</p>
                <ul>
                <li>Adaptability</li>
                <li>Organization</li>
                </ul>
                <p class="">
                <span class="w-700">Self-Learning</span>
                <span>taught me</span>
                </p>
                <ul>
                <li>To read the manual first</li>
                <li>To ask the right questions (AI or person)</li>
                </ul>
            </div>
        </div>
    </Section>
    <!-- End Skills Section -->
    </div>
    <!-- Download Link -->
    <a class="float" href="/DiamantisResume.pdf" download="DiamantisResume.pdf">
        <span>Download</span>
        <Pdf width={20} height={20} fill="currentColor" />
    </a>
    <!-- End Download Link -->
</main>
<!-- End Main -->

<style>
    main {
    padding-top: 4.5rem;
    padding-bottom: 8.5rem;
    }

    .main-container {
    display: grid;
    gap: 3rem 5rem;
    }

    .education-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    }

    .experience-body ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline-start: 20px;
    height: 100%;
    transition: var(--transition);
    }

    .skills-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    }

    .skills-part-title {
    margin-bottom: 1rem;
    }

    .technical-body {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 0.2rem;
    }

    .single-technical {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    }

    .technical-grade {
    display: flex;
    }

    .skills-part ul {
    padding: 0 0 0 22px;
    }

    @media screen and (min-width: 768px) {
    .main-container {
        grid-template-columns: 1fr 1fr;
    }
    .experience-body {
        height: 100%;
    }
    .experience-body ul {
        justify-content: space-between;
        height: 80%;
        /* gap: 3.5rem; */
    }
    }

    .float {
    font-family: var(--body-font);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 3rem;
    height: 3rem;
    bottom: 1rem;
    right: 1rem;
    background-color: var(--grey-light);
    color: white;
    border-radius: 50px;
    margin-left: auto;
    box-shadow: 2px 2px 3px #999;
    border: none;
    cursor: pointer;
    }

    .float span {
    display: none;
    }

    @media print, screen and (min-width: 992px) {
    .float {
        width: 9rem;
        bottom: 1rem;
        right: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.1s ease-in-out;
    }
    .float:hover {
        translate: 0 -3px;
        color: white;
    }
    .float:visited, .float:active, .float:focus, .float:hover, .float:focus-visible, .float:focus-within {
        color: white;
    }
    .float span {
        display: inline;
        padding-right: 0.5rem;
    }
    }
</style>

