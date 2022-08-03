<script lang="ts">
  import Button from "spaper/components/Button.svelte";
  let email: string = "";
  let text: string = "";

  async function submitForm() {
    await fetch("https://formspree.io/f/xyylnqbg", {
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

<div class="ml-image">
  <h1 class="inspire-text">At ML Club, we create the future.</h1>
</div>

<h1>Henry plz add link buttons here</h1>

<div class="questions">
  <form on:submit|preventDefault={submitForm}>
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
    <div class="subtn" type="submit">
      <Button
        type="secondary"
        size="default"
        block
        outlined
        disabled={email == null ||
          text == null ||
          email.length == 0 ||
          text.length == 0}>Send!</Button
      >
    </div>
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
