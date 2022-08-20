<script>
  import "papercss/dist/paper.css";
  import Navbar from "spaper/components/Navbar.svelte";
  import { base } from "$app/paths";
</script>

<!--
<nav>
  <h1 class="home-statement"><a href={`${base}/`}> Lynbrook ML Club </a></h1>
  <ul class={`other-links`}>
    <a href={`${base}/officers`}>About Us</a>
    <a href={`${base}/#contact`}>Contact Us</a>
    <a href={`${base}/signup`}>Sign Up!</a>
  </ul>
</nav>
-->

<Navbar fixed>
  <h3 slot="brand">
    <a href={`${base}/`}> Lynbrook ML Club </a>
  </h3>
  <ul class="inline">
    <li><a href={`${base}/officers`}>About Us</a></li>
    <li> <a href={`${base}/gallery`}> Gallery </a> </li>
    <li> <a href={`${base}/presentations`}> Presentations </a> </li>
    <li><a href={`${base}/#contact`}>Contact Us</a></li>
<<<<<<< HEAD
    <li class="signup"> <a href={`${base}/signup`}><em> Sign Up! </em></a> </li>
  </ul>
</Navbar>

=======
    <li><a href={`${base}/signup`}>Sign Up!</a></li>
    <li><a href={`${base}/gallery`}>Gallery</a></li>
    <li><a href={`${base}/presentations`}>Presentations</a></li>
  </ul>
</Navbar>
>>>>>>> 83bc1223acd82a681967044d04563ef948fcc753

<slot />

<style>
  a {
    text-decoration: none !important;
  }

  nav {
    display: flex;
    justify-content: space-between;
    background-color: rgb(119, 178, 250);
    position: sticky;
    top: 0;
  }

  .home-statement {
    font-size: 1.5em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    margin-left: 1.5em;
  }

  .other-links {
    display: flex;
    align-items: center;
    font-size: 1em;
    gap: 1em;
    margin-right: 1.5em;
  }
</style>
