<script>
  import ComingSoon from "../components/ComingSoon.svelte";
  const challenges = [
    {
      title: "Gradient Descent in Depth & Create Your Own Regressor Challenge",
      link: "https://anish.lakkapragada.com/notes/Gradient_Descent_ML_Club_Challenge.pdf",
    },
    {
      title: "Logistic Regression Challenge",
      link: "https://drive.google.com/file/d/1UVm6NZU9OMlB5ztluNdWQcGhLmM4Jg1A/view?usp=sharing",
    },
    {
      title: "Linear Neural Networks Suck",
      link: "https://anish.lakkapragada.com/notes/Linear_Regression_Layer.pdf",
    },
    {
      title: "Artificial Neural Networks & Autoencoders",
      link: "https://anish.lakkapragada.com/notes/Artificial_Neural_Networks_ML_Club_Worksheet.pdf",
    },
    {
      title: "AP Machine Learning C Exam :)",
      link: "https://anish.lakkapragada.com/notes/AP_Machine_Learning_C_Exam.pdf",
    },
    {
      title: "GAN Challenge",
      link: "https://drive.google.com/file/d/1LpTO2zc1OR3lzetb1k-cQrOSPaR0PlZJ/view?usp=sharing",
    },
  ];
</script>

<h1 class="header">What We Do!</h1>

<h2 class="second-title">
  <a
    style="text-decoration: none;"
    href="https://drive.google.com/drive/folders/1E5Mj_sWe-rsiMdCl8sOym_VhjGgWp6ty?usp=drive_link"
  >
    Presentation Slides
  </a>
</h2>
<h2 class="second-title">
  <a href="https://forms.gle/ARq2Gouz4f5Yf8oD7"> Interest Form </a>
</h2>

<div class="challenges-div">
  <h3 class="challenges-title">Paper Challenges & Articles</h3>
  <div class="challenges-list">
    {#each challenges as challenge, i}
      <p>
        <strong>
          <a href={challenge.link}> {i + 1}. {challenge.title} </a>
        </strong>
      </p>
    {/each}
  </div>
</div>

<style>
  .challenges-list {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    margin-top: -2em;
  }

  .challenges-list > p {
    font-size: 1.5em;
  }
  .challenges-div {
    text-align: center;
  }

  .challenges-title {
    font-size: 3em;
  }

  .header {
    font-size: 5em;
    text-align: center;
  }

  .organized-content {
    text-align: center;
  }
  .second-title {
    font-size: 3em;
    text-align: center;
  }

  .organized-content > p {
    font-size: 1.5em;
  }

  a {
    color: black;
    text-decoration: none !important;
  }

  a:link {
    text-decoration: none !important;
  }
</style>
