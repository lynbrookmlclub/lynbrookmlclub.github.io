<script lang="ts"> 
    
    export let name: string; 
    export let shortPhrase: string; 
    export let title: string; 
    export let grade: number;
    export let blurb: string; 
    export let photoURL: string; 
    export let photoLeft: boolean;  

    const yearName: {[key: number]: string} = {
        9: "Freshman",
        10: "Sophomore",
        11: "Junior",
        12: "Senior",
    }; 

    console.log(name); 

</script> 

<h1 class="main-title"> {name}, {title} - {yearName[grade]} </h1>
<h3 class="short-phrase"> {shortPhrase} </h3>
<p class="blurb"> {blurb} </p>  

<div class="photo-container" style={`background-image: url(${photoURL})`}/> <!-- stores the photo in here-->

<hr> 
<style> 
    .main-title {
        font-size: 2.5em;
        font-weight: bold;
    }

    .short-phrase {
        font-size: 1.5em;
        margin-top: 0;
    }

    .photo-container {
        border-radius: 50%; 
        width: 200px;
        height: 200px;
        float: right; 
    }


</style> 


