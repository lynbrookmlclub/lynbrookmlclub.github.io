<script>
  import { base } from "$app/paths";
  import Button from "spaper/components/Button.svelte";
</script>

<h1 class="header">Coming Soon</h1>
<div>
  <Button type="secondary" block href={`${base}/`}>Back to Home</Button>
</div>

<style>
  .header {
    text-align: center;
    font-weight: 500;
    /* font-size: 1.2rem; */
  }

  div {
    text-align: center;
    padding: 0 2rem;
  }
</style>
