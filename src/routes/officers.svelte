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
    infoLinks: { [name: string]: string };
  }

  const paragraph: string = loremIpsum() + loremIpsum() + loremIpsum();
  const officers: Person[] = [
    {
      name: "Anish Lakkapragada",
      shortPhrase: "whatever it takes!",
      title: "President",
      grade: 12,
      blurb:
        "Hey there! I'm Anish. Anish is a clumsy senior who still doesn't know how to center a div in HTML. He joined ML Club as a freshman and is excited to be an officer for two years. Aside from ML, he loves to work on websites and backends. Beyond coding, he enjoys photography and taking naps.",
      photoURL:
        "https://microsites.databricks.com/sites/default/files/media/images/dataaisummit_speaker/databricks_headshot_1652326493620001EFzD.jpg",
      infoLinks: {
        github: "anish-lakkapragada",
        email: "anish.lakkapragada@gmail.com",
      },
    },
    {
      name: "Marc Melikyan",
      shortPhrase: "enjoyer of ",
      title: "President",
      grade: 12,
      blurb:
        "Hi everyone, my name is Marc. I have been passionate about machine learning for 2-3 years now, and I am enthused to share what I know about the subject. My favorite aspect of the field is the activation function. I enjoy low level development, reading, music and walking in my spare time.",
      photoURL: "https://petitelamb65.qoom.space/Pellis/images/Marc.png",
      infoLinks: { github: "novak-99", email: "marc.melikyan@gmail.com" },
    },
    {
      name: "Vipra Bindal",
      shortPhrase: "we need one",
      title: "Vice President",
      grade: 12,
      blurb:
        "Hey, I'm Vipra (your VP this year)! I joined ML Club as a freshman and am enthralled with ML's limitless applications. In my free time, I like reading about new ML applications, watching political news, and going on walks. So excited for everything in store this year!",
      photoURL: "/vipra.png",
      infoLinks: { email: "viprabind@gmail.com" },
    },
    {
      name: "Vrishank Chandrasekhar",
      shortPhrase: "on da grind at all times",
      title: "PR",
      grade: 11,
      blurb:
        "Hi! I'm Vrishank. I joined ML club as a freshman and am passionate about creating tools to make point-of-care diagnostics more accurate, rapid, and interpretable through the use of deep learning, statistics, and (way too many) late nights. I'm super excited to serve as the PR officer this year, and some of my hobbies include singing, playing many instruments, and making education accessible for everyone.",
      photoURL: "/vrishank.png",
      infoLinks: {
        email: "chandrasekharvrishank@gmail.com",
        github: "vrishankc",
      },
    },
    {
      name: "Adarsh Iyer",
      shortPhrase: "you're into machine learning? well, learn all the machines",
      title: "Secretary",
      grade: 12,
      blurb:
        " I'm Adarsh, and I'm glad to be your secretary this year! I've done a couple of projects in CV and Action Recognition. In my free time, I run for Lynbrook's Cross Country and Track teams, compose music, play the tuba and piano, animate short films, and read ML papers.",
      photoURL: "/adarsh.png",
      infoLinks: {
        email: "adarsh.r.iyer@gmail.com",
        github: "adarshramiyer",
      },
    },
    {
      name: "Aadi Tiwari",
      shortPhrase: "why does italian coke look like that",
      title: "Treasurer",
      grade: 12,
      blurb:
        "Hey there, I'm Aadi and am excited to be your treasurer this year! Even though I've only been learning about ML for a year, I am fascinated by the endless applications of it and how it ties into other developing fields or research such as quantum computing. In my free time, I love playing tennis, swimming, and hanging out with my friends. Hope to have a fun year with everyone! ",
      photoURL: "/aadi.png",
      infoLinks: {
        email: "AadiTiwari1223@gmail.com",
        github: "AadiTiwar1",
      },
    },
  ];

  const replacements: { [name: string]: string } = {
    email: "mailto:",
    github: "https://github.com/",
  };
  for (const officer of officers) {
    const { infoLinks } = officer;
    for (const [name, value] of Object.entries(infoLinks)) {
      const replacement: string = replacements[name];
      officer.infoLinks[name] = replacement + officer.infoLinks[name];
    }
  }

  console.log(officers);
</script>

<body>
  <h1 class="officer-header">Officer Team 2023-2024</h1>
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
