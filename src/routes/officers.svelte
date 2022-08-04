<script lang="ts">
  import Officer from "../components/Officer.svelte";

  interface Person {
    name: string;
    title: string;
    shortPhrase: string;
    grade: number;
    blurb: string;
    photoURL: string;
  }

  const officers: Person[] = [
    {
      name: "Anish Lakkapragada",
      shortPhrase: "smh bruh lmao",
      title: "Co-VP",
      grade: 11,
      blurb: "Anish is a memelord who likes to code blah blah blah blah",
      photoURL: "https://i.imgur.com/XqQZQZq.jpg",
    },
    {
      name: "Marc Melyikan",
      shortPhrase: "enjoyer of ",
      title: "Co-VP",
      grade: 11,
      blurb: "Marc is a memelord who likes to code blah blah blah blah",
      photoURL: "https://i.imgur.com/XqQZQZq.jpg",
    },
    {
      name: "Agnik",
      shortPhrase: "yeat he dont have one",
      title: "Secretary",
      grade: 12,
      blurb: "Agnik is a memelord who likes to code blah blah blah blah",
      photoURL: "https://i.imgur.com/XqQZQZq.jpg",
    },
  ];
</script>

{#each officers as officer, i}
  <Officer {...officer} imageright={true} photoLeft />
{/each}

<style>
</style>
