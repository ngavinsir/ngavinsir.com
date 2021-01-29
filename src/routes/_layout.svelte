<script>
  import Stylesheet from "../components/Stylesheet.svelte";
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <link
    rel="preload"
    as="style"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    media="print"
    onload="this.media='all'" />

  <noscript>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
  </noscript>
</svelte:head>

<Stylesheet />
<main>
  {#if segment !== undefined}
    <Header />
  {/if}
  <slot />
</main>
