<template>
  <main>
    <div class="container">
      <div class="head">
        <h1>Contact me</h1>
      </div>

      <div class="links">
        <a href="https://www.linkedin.com/in/abdul-hafiz-aderemi-5a66121b1" target="_blank"><img src="@/assets/linkedin-icon.svg"
            alt="linkedin-icon">
          <p>LinkedIn</p>
        </a>

        <a href="https://www.github.com/greathafiz" target="_blank"><img src="@/assets/github-icon.svg"
            alt="github-icon">
          <p>GitHub</p>
        </a>

        <a href="https://www.twitter.com/hafizaderemi" target="_blank"><img src="@/assets/x-twitter-icon.svg"
            alt="x-twitter-icon">
          <p>X</p>
        </a>

        <a href="mailto:abdulhafizaderemi@gmail.com" target="_blank"><img src="@/assets/email-icon.svg"
            alt="email-icon">
          <p>Email</p>
        </a>
      </div>
    </div>
  </main>
</template>
  
<style scoped>
main {
  min-height: 100vh;
  margin-top: -125px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.head {
  text-align: center;
}

/* h1 {
  text-transform: uppercase;
  font-family: 'Times New Roman', Times, serif;
} */

.links {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 30px;
  margin-bottom: 30px;
}

a {
  display: flex;
  align-items: center;
  gap: .5rem;
}

a:active {
  transform: scale(0.98);
}

p {
  font-size: 18px;
}

@media screen and (min-width: 768px) {
  p {
    font-size: 25px;
  }

  h1 {
    font-size: 40px;
  }
}
</style>