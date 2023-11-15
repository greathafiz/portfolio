<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

#app {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}

a {
  color: unset;
  text-decoration: none;
}

img {
  width: 400px;
  height: 400px;
  border: 1px #000 solid;
  border-radius: 50%;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn-white {
  background: #e2e3e5;
  border: 1px black solid;
  color: #000;
}

.btn:hover {
  border: 1px black solid;
  background: #fff;
  color: #000;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

svg {
  cursor: pointer;
}
</style>
