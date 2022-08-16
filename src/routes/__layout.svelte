<script>
  import "papercss/dist/paper.css";
  import Navbar from "spaper/components/Navbar.svelte";
  import { base } from "$app/paths";
</script>


<nav>
  <h1 class="home-statement"> <a href="/"> Lynbrook ML Club </a> </h1>
  <ul class="other-links"> 
    <a href="/officers">About Us</a>
    <a href="/#contact"> Contact Us </a> 
    <a href="/signup">Sign Up!</a>
  </ul> 
</nav>

<slot></slot>

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
    font-size: 2em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    margin-left: 1.5em;
  }

  .other-links { 
    display: flex; 
    flex-direction: row;  
    margin-top: 0.5em;
    margin-bottom: 0.5em; 
    margin-right: 1.5em;

    gap: 1em;
    font-size: 1.3em;
  }

</style> 