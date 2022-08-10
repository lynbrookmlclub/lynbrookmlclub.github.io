<script lang="ts">
    export let name: string;
    export let shortPhrase: string;
    export let title: string;
    export let grade: number;
    export let blurb: string;
    export let photoURL: string;
    export let photoLeft: boolean;
    export let imageright: boolean;
    
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
        <h1 class="main"> {name} </h1>
        <h2 class="title"> {title} </h2>
        <p class="short-phrase"> <small class="short-phrase"> {shortPhrase} </small> </p>    
        <div class="both">
            <p class="blurb"> {blurb} </p>
            <img src={photoURL} alt="Photo of {name}, the {title} of the ML Club this year." class="image"/>
        </div> 
    </div>
</div>

<hr>
 
<style>
    .main {
        font-size: 2.75em;
        font-weight: bold;
        margin-top: 0.5em;
        margin-bottom: 0em;
    }

    .title {
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }

    .both {
        display: flex; 
        justify-content: space-between;
    }

    @media screen and (max-width: 600px) {
        /** media query for cell phone devices right*/
        .both {
            flex-direction: column;
        }
        .blurb {
            font-size: 1em;
        }

        .image {
            height: 12em;
        }
    }

    @media screen and (min-width: 600px) {
        /** media query for cell phone devices right*/
        .both {
            flex-direction: row;
        }
        .blurb {
            font-size: 1.5em;
            inline-size: 45%;
            float: left;
            margin: 0;
        }
     
        .image {
            aspect-ratio: 1 / 1;
            object-fit: cover;
            width: 50%;
            float: right;
        }
    }

    .short-phrase {
        font-size: 1.1em;
        margin-top: 0.75em;
    }

    .info-side {
        float: left; 
        width: 50%;
    }

    .content {
        display: flex; 
        justify-content: center;
        align-items: center;
    }
</style> 
