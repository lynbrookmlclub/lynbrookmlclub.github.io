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
    infoLinks?: {[name: string]: string}; 
  }

  const paragraph : string = loremIpsum() + loremIpsum() + loremIpsum();
  const officers: Person[] = [
    {
      name: "Cindy Chou", 
      shortPhrase: "it is what it is", 
      title: "President", 
      grade: 12,
      blurb: "Hi I'm Cindy! I joined ML club as a sophomore and became interested in the applications of machine learning in the medical field. I'm super excited to serve as the president this year, and some of my hobbies include walking, listening to Yoyo Ma's cello playing, trying new cuisines, and watching food Youtube shorts.",  
      photoURL: "/cindy.png", 
      infoLinks: {"email": "cindychou8@gmail.com"}
    }, 
    {
      name: "Anish Lakkapragada",
      shortPhrase: "anish the chad",
      title: "Co-VP",
      grade: 11,
      blurb: "Anish is a clumsy junior who still doesn’t know how to center a div in HTML. He joined ML Club as a freshman and is excited to be an officer for two years. Aside from ML, he loves to work on websites and backends. Beyond coding, he enjoys photography and taking naps.",
      photoURL: "https://microsites.databricks.com/sites/default/files/media/images/dataaisummit_speaker/databricks_headshot_1652326493620001EFzD.jpg",
      infoLinks: {"github": "anish-lakkapragada", "email": "anish.lakkapragada@gmail.com"}
    },
    {
      name: "Marc Melikyan",
      shortPhrase: "enjoyer of ",
      title: "Co-VP",
      grade: 11,
      blurb: paragraph,
      photoURL: "https://petitelamb65.qoom.space/Pellis/images/Marc.png",
      infoLinks: {"github": "novak-99", "email": "marc.melikyan@gmail.com"}
    },
    {
      name: "Agnik Banerjee",
      shortPhrase: "i like trains and turtle",
      title: "Secretary",
      grade: 12,
      blurb: "Hi guys! I'm Agnik, and am excited to be Secretary this year. One of my big interests in ML at the moment is privacy-preserving AI and deploying healthcare-based models in edge environments. In my free time, I love playing tennis, listening to music, and hanging out with my dog.",
      photoURL: "https://ca.slack-edge.com/E7SAV7LAD-U02403V7Z6K-2c0edfdb104a-512",
      infoLinks: {"email": "agnik42@gmail.com"}
    },
    {
      name: "Lillian Yu", 
      shortPhrase: "if it works, don't change it",
      title: "Treasurer", 
      grade: 12, 
      blurb: "Hi there! I'm Lillian, and I am beyond thrilled to serve as the treasurer this year. I started developing an interest in ML my freshman year and I have been a passionate ML enthusiast eversince. Currently, I am conducting research in computational neurobiology using ML applications. Some fun facts about me are that I enjoy running, listening to cdrama OSTs, sketching and I have a cat named Leo.",
      photoURL: "/lillian.png", 
      infoLinks: {"email": "leeleeian89@gmail.com"}
    }, 
    {
      name: "Vipra Bindal", 
      shortPhrase: "we need one", 
      title: "Public Relations", 
      grade: 11, 
      blurb: paragraph, 
      photoURL: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/250854156_407131807797681_2492226412003296312_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RLEuFefvYdUAX97VxJ2&_nc_ht=scontent-sjc3-1.xx&oh=00_AT8IguKUn6spYpxJ3tx6YVUbtSS7Uhtwr2o4tTYm9yC9ew&oe=6305143B", 
      infoLinks: {"email": "viprabind@gmail.com"}
    }
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
