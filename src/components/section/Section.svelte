<script lang="ts">
    interface Props {
        title: string;
        children?: any;
    } 

  let { title, children, ...rest }: Props = $props();
</script>

<section class="section" {...rest}>
  <header class="section-header">
    <h3>{title}</h3>
    <div class="header-seperator"></div>
  </header>

  <div class="section-body">
    {@render children?.()}
  </div>
</section>

<style>
    .section {
        font-family: var(--body-font);
        color: var(--grey-dark);
    }

    .section-header {
        font-family: var(--header-font);
        color: var(--grey-light);
        letter-spacing: 0.4rem;
    }

    .header-seperator {
        height: 5px;
        width: 75px;
        background: var(--grey-light);
        margin-bottom: 1rem;
    }

    .section-header h3 {
        margin: 0 0 0.5rem 0;
    }
</style>
