<script lang="ts">
  import Button from "spaper/components/Button.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

  let email: string = "";
  let text: string = "";

  async function submitForm() {
    const res = await fetch("https://formspree.io/f/mjvlopqj", {
      headers: {
        "Content-Type": "application/json",
        "Data-Type": "json",
      },
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ email, text }),
    });
  }
</script>

<body> 
  <div class="ml-image">
    <h1 class="inspire-text">At ML Club, we create the future.</h1>
  </div>

  <slot>
    <div class="row flex-center child-borders buttons">
      <Button
        class="margin"
        size="large"
        href="https://discord.gg/p5tCyBeWAF"
        outline="primary"
      >
        <Fa icon={faDiscord} />
        Discord
      </Button>
      <Button
        class="margin"
        size="large"
        href="mailto:lhsmlclub@gmail.com"
        outline="secondary"
      >
        <Fa icon={faEnvelope} />
        Email
      </Button>
      <Button
        class="margin"
        size="large"
        href="https://github.com/lynbrookmlclub"
        outline="primary"
      >
        <Fa icon={faGithub} />
        Github
      </Button>
      <Button class="margin" size="large" href="#" outline="danger">
        <Fa icon={faYoutube} />
        Youtube
      </Button>
    </div>
  </slot>

  <div class="questions">
    <form on:submit|preventDefault={submitForm}>
      <input
        type="hidden"
        name="accessKey"
        value="fa895393-ac5f-4e1e-89f0-a511de35eaf0"
      />
      <!-- Required -->
      <input type="hidden" name="subject" value="Contact us from - example.com" />

      <input
        type="email"
        placeholder="Email"
        bind:value={email}
        class="center-block"
        id="subject-email"
      />
      <textarea
        name="message"
        type="textarea"
        bind:value={text}
        placeholder="Message"
        class="center-block"
        id="subject-text"
      />
      <!--   <h1>{email}</h1>-->

      <div class="subtn">
        <Button
          type="secondary"
          size="default"
          block
          outlined
          nativeType="submit"
          disabled={email == null ||
            text == null ||
            email.length == 0 ||
            text.length == 0}>Send!</Button
        >
      </div>
      <!--    <input type="submit" value="Submit" />-->
    </form>
  </div>
</body>

<style>

  body {
    min-width: 1000px;
  }

  .other-links {
    color: black;
    font-size: 1.5em;
    text-decoration: none;
  }

  .ml-image {
    background-image: url("https://wallpaperaccess.com/full/1728960.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 26em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inspire-text {
    color: white;
    font-size: 5em;
    text-align: center;
  }

  /** questions form*/

  .questions {
    text-align: center;
  }

  #subject-text,
  #subject-email,
  .subtn {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 2em;
  }
</style>
