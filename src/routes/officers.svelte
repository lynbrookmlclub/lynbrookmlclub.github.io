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
      shortPhrase: "smh bruh lmao",
      title: "Co-VP",
      grade: 11,
      blurb: paragraph,
      photoURL: "https://i.imgur.com/XqQZQZq.jpg",
    },
    {
      name: "Marc Melyikan",
      shortPhrase: "enjoyer of ",
      title: "Co-VP",
      grade: 11,
      blurb: paragraph,
      photoURL: "https://i.imgur.com/XqQZQZq.jpg",
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

<h1 class="officer-header"> Officer Team 2022 </h1>
<div class="officers-list">
<hr>
{#each officers as officer, i}
  <Officer {...officer} imageright={true} photoLeft />
{/each}
</div>

<style>
  .officer-header {
    text-align: center;
  }
  .officers-list {
    margin-top: 1em;
  }
</style>
