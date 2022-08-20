<script lang="ts">
  export let haveReturnButton : boolean; 
  import { base } from "$app/paths";
  import Button from "spaper/components/Button.svelte";
</script>

<h1 class="header">Coming Soon! </h1>
{#if haveReturnButton}
  <div>
    <Button type="secondary" block href={`${base}/`}>Back to Home</Button>
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
    text-align: center;
    padding: 0 2rem;
  }
</style>
