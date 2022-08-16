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
  }
  .officers-list {
    margin-top: 1em;
  }
</style>
