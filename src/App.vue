<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Home/Header.vue';

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
/* Reset */
body,
h1,
h2,
ul,
li,
a,
p,
span {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  display: block;
  text-decoration: none;
}

body {
  font-family: "Poppins", sans-serif;
}

/* Class */

.price {
    height: 50px;
    overflow-y: hidden;
}

.mouseArea {
    width: 100%;
    animation: AnimateButtonBack .3s forwards;
    transition: ease-in-out .3s;
    cursor: pointer;
    height: 160px;
}

.mouseArea:hover {
    animation: AnimateButtonGo .3s forwards;
}

/* Animations */

@keyframes AnimateUnderline {
  from {
    opacity: 0;
    transform: translate3d(0px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0.7px, 0, 0);
  }
}

@keyframes AnimateButtonGo {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-45px);
  }
}

@keyframes AnimateButtonBack {
  from {
    transform: translateY(-45px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes AnimateScroll {
  from {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }
}
</style>
