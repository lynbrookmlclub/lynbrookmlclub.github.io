<script>
  import "papercss/dist/paper.min.css";
  import Navbar from "spaper/components/Navbar.svelte";
</script>

<Navbar>
  <h3 slot="brand">
    <a href="/">Lynbrook ML</a>
  </h3>
  <ul class="inline">
    <li><a class="other-links" href="./officers">About Us</a></li>
    <li><a class="other-links" href="./signup">Sign Up</a></li>
  </ul>
</Navbar>
<slot />
