<template>
    <svg v-if="!isMenuOpen" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" height="2em"
        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
    <svg style="z-index: 2;" v-else @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" height="2em"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>

    <div class="menu" v-show="isMenuOpen">
        <ul>
            <li><router-link to="/about" @click="toggleMenu">About</router-link></li>
            <li><router-link to="/projects" @click="toggleMenu">Projects</router-link></li>
            <li><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MobileNavBar',
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped>
svg {
    display: none;
}

li {
    list-style: none;
}

@media screen and (max-width: 768px) {
    
    svg {
        display: inline-block;
    }
    .menu {
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 0;
        right: 0;
        width: 50%;
        height: 100vh;
        padding: 20px;
        opacity: 0.9;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    
    .menu ul {
        text-align: center;
        /* position: relative;
        top: 50%; */
        list-style: none;
    }

    .menu li {
        margin-bottom: 20px;
    }

    .menu a {
        text-align: center;
        color: #000;
        opacity: 1;
        border-bottom: 1px solid #000;
    }

}
</style>