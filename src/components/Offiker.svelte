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

<div class:imageright={imageright} class:imageleft={!imageright} class="content">
  {#if imageright}
    <div class="left-section">
      <h1 class="main"> {name} - {title}, {yearName[grade]} </h1>
      <p class="short-phrase"> {shortPhrase} </p>
      <p class="blurb"> {blurb} </p>
    </div> 
    <div class="right-section">
      <img src={photoURL} alt="{name}" class="image"/>
    </div>
  {:else}
    <div class="left-section">
      <img src={photoURL} alt="{name}" class="image"/>
    </div>
    <div class="right-section">
      <h1 class="main"> {name} - {title}, {yearName[grade]} </h1>
      <p class="short-phrase"> {shortPhrase} </p>
      <p class="blurb"> {blurb} </p>
    </div> 
  {/if}
</div>


<style lang=scss>

  .main {
    font-size: 2.5em;
    font-weight: bold;
    margin-top: 0.5em;
    margin-bottom: 0em;
  }

  .short-phrase {
    margin-top: 0.5em;
    font-style: italic;
    margin-bottom: 1.5em;
  }

  .blurb {
    margin-top: 0.5em;
    font-size: 1.5em;
  }

  .content {
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-left: 2em;
  }

  .imageright {
    .left-section, .right-section {
      flex: 1;
    }

    .right-section {
      height: 100%; 
      flex: 0.5;
    }
  }

  .imageleft {
    .left-section, .right-section {
      flex: 1;
    }

    .left-section {
      flex: 0.75;
    }

    .image {
      margin-left: 50%;
    }

  }

  .image {
    border-radius: 50%; 
    width: 10em;
    height: 10em;
  }

</style> 
