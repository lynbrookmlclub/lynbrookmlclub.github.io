<script lang="ts">
    export let name: string;
    export let shortPhrase: string;
    export let title: string;
    export let grade: number;
    export let blurb: string;
    export let photoURL: string;
    export let photoLeft: boolean;
    export let imageright: boolean;
    photoURL = "https://images.unsplash.com/photo-1659465398532-4d7ce2f5b46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
    const yearName: { [key: number]: string } = {
      9: "Freshman",
      10: "Sophomore",
      11: "Junior",
      12: "Senior",
    };
  
    console.log(name);
</script>

<div class="content"> 
    <div class="info-side">
        <h1 class="main"> {name} - {title}, {yearName[grade]} </h1>
        <p class="short-phrase"> <small class="short-phrase"> {shortPhrase} </small> </p>    
        <div class="blurb-and-content">
            <p class="blurb"> {blurb} </p>
            <img src={photoURL} alt="Photo of {name}, the {title} of the ML Club this year." class="image"/>
        </div> 
    </div>
</div> 

<style>
    .main {
        font-size: 2.75em;
        font-weight: bold;
        margin-top: 0.5em;
        margin-bottom: 0em;
    }

    .short-phrase {
        font-size: 1.1em;
        margin-top: 0.75em;
    }

    .info-side {
        float: left; 
        width: 25%;
    }

    .blurb {
        font-size: 1.5em;
        inline-size: 50%;
        float: left;
    }

    .image {
        width: 10rem;
        float: right;
    }

    .content {
        display: flex; 
        justify-content: center;
        align-items: center;
    }
</style> 
