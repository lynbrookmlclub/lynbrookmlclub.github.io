<script lang="ts">
  import Officer from "../components/Officer.svelte";
  import { loremIpsum } from "lorem-ipsum";

  interface Person {
    name: string;
    title: string;
    shortPhrase: string;
    grade: number;
    blurb: string;
    photoURL: string;
  }

  const paragraph : string = loremIpsum() + loremIpsum() + loremIpsum();
  const officers: Person[] = [
    {
      name: "Cindy Chou", 
      shortPhrase: "it is what it is", 
      title: "President", 
      grade: 12,
      blurb: "Hi I'm Cindy! I joined ML club as a sophomore and became interested in the applications of machine learning in the medical field. I'm super excited to serve as the president this year, and some of my hobbies include walking, listening to Yoyo Ma's cello playing, trying new cuisines, and watching food Youtube shorts.",  
      photoURL: "https://drive.google.com/uc?export=view&id=17Fkt-vaPBc2IVPW6c4xsTOb5_zvwMrZ-",
    }, 
    {
      name: "Anish Lakkapragada",
      shortPhrase: "anish the chad",
      title: "Co-VP",
      grade: 11,
      blurb: "Anish is a clumsy junior who still doesn’t know how to center a div in HTML. He joined ML Club as a freshman and is excited to be an officer for two years. Aside from ML, he loves to work on websites and backends. Beyond coding, he enjoys photography and taking naps.",
      photoURL: "https://microsites.databricks.com/sites/default/files/media/images/dataaisummit_speaker/databricks_headshot_1652326493620001EFzD.jpg",
    },
    {
      name: "Marc Melyikan",
      shortPhrase: "enjoyer of ",
      title: "Co-VP",
      grade: 11,
      blurb: paragraph,
      photoURL: "https://www.poynter.org/wp-content/uploads/2022/02/AP_22036722864852-1.jpg",
    },
    {
      name: "Agnik",
      shortPhrase: "yeat he dont have one",
      title: "Secretary",
      grade: 12,
      blurb: paragraph,
      photoURL: "https://i.imgur.com/XqQZQZq.jpg",
    },
  ];
</script>

<body>
  <h1 class="officer-header"> Officer Team 2022 </h1>
  <div class="officers-list">
  {#each officers as officer, i}
    <Officer {...officer} imageright={true} photoLeft />
  {/each}
  </div>
</body>

<style>
  
  .officer-header {
    text-align: center;
    font-size: 5em;
  }

  .officers-list {
    margin-top: 1em;
  }

  @media (max-width: 600px) {
    .officer-header {
      font-size: 3em;
    }
  }
</style>
