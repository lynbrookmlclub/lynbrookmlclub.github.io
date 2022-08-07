<script lang="ts">
  import Button from "spaper/components/Button.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";


  let email: string = "ed";
  let text: string = "";

  async function submitForm() {

    await fetch("https://formspree.io/f/mknewakj", {
      headers: {
        "Content-Type": "application/json",
        "Data-Type": "json",},
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ email, text })
    });
  }
</script>

<div class="ml-image">
  <h1 class="inspire-text">At ML Club, we create the future.</h1>
</div>

<slot>
  <div class="row flex-center child-borders">
    <Button
      class="margin"
      size="default"
      href="https://discord.gg/p5tCyBeWAF"
      outline="primary"
    >
      <Fa icon={faDiscord} />
      Discord
    </Button>
    <Button
      class="margin"
      size="default"
      href="mailto:lhsmlclub@gmail.com"
      outline="secondary"
    >
      <Fa icon={faEnvelope} />
      Email
    </Button>
    <Button
      class="margin"
      size="default"
      href="https://github.com/lynbrookmlclub"
      outline="primary"
    >
      <Fa icon={faGithub} />
      Github
    </Button>
    <Button class="margin" size="default" href="#" outline="danger">
      <Fa icon={faYoutube} />
      Youtube
    </Button>
  </div>
</slot>

<div class="questions">
  <form on:submit|preventDefault={submitForm} form action="https://api.staticforms.xyz/submit" method="post">
    <input type="hidden" name="accessKey" value="fa895393-ac5f-4e1e-89f0-a511de35eaf0"> <!-- Required -->
    <input type="hidden" name="subject" value="Contact us from - example.com" />

    <input type="email" placeholder="Email" bind:value={email} class="center-block" id="subject-email"/>
    <textarea name="message" type="textarea" bind:value={text} placeholder="Message" class="center-block" id="subject-text"/>
<!--   <h1>{email}</h1>-->

    <div class="subtn" type="submit">
      <Button type="secondary" size="default" block outlined disabled={email == null || text == null ||email.length == 0 || text.length == 0}>Send!</Button>
    </div>
<!--    <input type="submit" value="Submit" />-->

  </form>
</div>


<style>
  .other-links {
    color: black;
    font-size: 1.5em;
    text-decoration: none;
  }

  .ml-image {
    background-image: url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
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
