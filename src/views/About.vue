<template>
  <main>
    <section class="top">
      <h1>About Me</h1>
      <div class="top-container">
        <p>My name is Abdul-Hafiz Aderemi. I am a self-taught backend developer with hands-on experience building secure,
          robust and scalable REST API services.</p>
        <!-- <DownloadFile :fileUrl="fileUrl" :fileName="fileName" /> -->
        <DownloadFile />
      </div>

    </section>

    <section class="bottom">
      <h1>Tech Stack</h1>

      <div class="grid">
        <div class="skill-card">
          <img src="../assets/nodejs-icon.svg" alt="nodejs-icon">
          <h2>NodeJS</h2>
        </div>

        <div class="skill-card">
          <img src="../assets/expressjs-icon.svg" alt="expressjs-icon">
          <h2>ExpressJS</h2>
        </div>

        <div class="skill-card"><img src="../assets/mongodb-icon.svg" alt="mongodb-icon">
          <h2>MongoDB</h2>
        </div>

        <div class="skill-card"><img src="../assets/mongoose.js.svg" alt="mongoosejs-icon">
          <h2>Mongoose</h2>
        </div>

        <div class="skill-card"><img src="../assets/handlebarsjs-icon.svg" alt="handlebarsjs-icon">
          <h2>HandleBars</h2>
        </div>

        <div class="skill-card"><img src="../assets/javascript-icon.svg" alt="javascript-icon">
          <h2>JavaScript</h2>
        </div>

        <div class="skill-card"><img src="../assets/git-scm-icon.svg" alt="git-icon">
          <h2>Git</h2>
        </div>

        <div class="skill-card"><img src="../assets/vuejs-icon.svg" alt="vuejs-icon">
          <h2>VueJS</h2>
        </div>

        <div class="skill-card">
          <img src="../assets/html5-icon.svg" alt="html5-icon">
          <h2>HTML</h2>
        </div>

        <div class="skill-card"><img src="../assets/css-icon.svg" alt="css-icon">
          <h2>CSS</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import DownloadFile from '@/components/DownloadFile.vue'

export default {
  name: 'AboutView',
  components: {
    DownloadFile
  },
  // data() {
  //   return {
  //     fileUrl: '/assets/Abdul-Hafiz-Resume.docx',
  //     fileName: 'Abdul-Hafiz-Resume.docx'
  //   }
  // },
}

</script>

<style scoped>
/* main {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
} */

h1 {
  text-align: center;
  margin: 20px;
  font-size: 25px;
}

p {
  font-size: 15px;
  padding: 5px;
}

.top .bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bottom {
  padding-top: 50px;
  padding-bottom: 50px;

}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1.25rem;
  padding: 30px;
}

.skill-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 -0.5rem 1rem rgba(0 0 0 / 0.15);
  border-radius: 4px;
  cursor: pointer;
}

.skill-card h2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-align: center;
}

.skill-card:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

img {
  color: none
}

@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 40px;
  }

  .top {
    display: flex;
    flex-direction: column;
    /* gap: 1.25rem; */
  }

  .top-container {
    width: 80%;
    padding: 10px;
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 25px;
  }
}
</style>
