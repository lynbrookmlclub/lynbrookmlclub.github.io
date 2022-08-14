<script lang="ts">
    import { onMount } from "svelte";
    const width: number = 15; 
    let windowWidth = undefined; 

    onMount(async () => {
        windowWidth = window.innerWidth; 
    });


</script> 

<div class="container">
    <h1> Sign up here! </h1>
    <p class="text-larger" >Fill out this form in order to get started.</p>
</div>


<div style="text-align: center;" class="form-container">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffgJ0-P9_FsuiYz7LsFP4AgSU4a_51fCFus-VoRMOGx-w7_A/viewform?embedded=true"  width="600" height="940" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>

<style>

    .container {
        text-align: center;
    }
    
    .text-larger{
        font-size: 1.5em;
    }

</style>
