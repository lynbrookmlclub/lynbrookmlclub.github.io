<script lang="ts">
  export let haveReturnButton: boolean;
  import { base } from "$app/paths";
  import Button from "spaper/components/Button.svelte";
</script>

<h1 class="header">Coming Soon!</h1>
{#if haveReturnButton}
  <div>
    <Button type="secondary" block href={`${base}/`}>Back to Home</Button>
  </div>
{:else}
  <h2 class="header">For more content watch these videos:</h2>
  <div style="gap: 1rem;">
    <iframe
      src="https://www.youtube.com/embed/Wbid5rvCGos"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="vid-iframe"
    />
    <iframe
      src="https://www.youtube.com/embed/Xw-zxQSEzqo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="vid-iframe"
    />
  </div>
{/if}

<style>
  .header {
    text-align: center;
    font-weight: 500;
    margin-top: 1em;
    /* font-size: 1.2rem; */
  }

  div {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
  }

  .vid-iframe {
    height: 315px;
    width: 500px;
  }
</style>
