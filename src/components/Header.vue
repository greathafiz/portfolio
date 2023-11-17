<template>
    <header>
        <h1><router-link to="/">Abdul-Hafiz</router-link></h1>
        <ul class="desktop-nav">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <MobileNavBar />
    </header>
</template>

<script>
import MobileNavBar from './MobileNavBar.vue';

export default {
    name: 'Header',
    components: {
        MobileNavBar
    }
}
</script>

<style scoped>
header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    background: #e2e3e5;
    margin-bottom: 50px;
    /* position: fixed; */
    /* z-index: 999; */
}

h1 {
    font-size: 2.5rem;
}

h1:hover {
    cursor: pointer;
}

ul {
    display: flex;
    list-style: none;
}

li {
    padding: 2rem 1rem;
    font-size: 1.2rem;
}

@media screen and (max-width: 768px) {
    ul {
        display: none;
    }
}
</style>