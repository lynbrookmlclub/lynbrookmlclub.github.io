<script>
  import "papercss/dist/paper.css";
  import Navbar from "spaper/components/Navbar.svelte";
  import {base} from "$app/paths";
</script>

<Navbar>
  <h3 slot="brand">
    <a href={`${base}/`}>Lynbrook ML</a>
  </h3>
  <ul class="inline">
    <li><a class="other-links" href={`${base}/officers`}>About Us</a></li>
    <li><a class="other-links" href={`${base}/signup`}>Sign Up</a></li>
  </ul>
</Navbar>
<slot />
