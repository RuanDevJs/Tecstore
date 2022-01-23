<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <h1> <router-link :to="{name: 'Home'}"> VModel </router-link> </h1>
      </div>
      <nav class="menu">
        <ul>
          <li>
             <router-link :to="{name: 'Home'}"> home </router-link>
          </li>
          <li>
            <router-link :to="{name: 'Products'}"> shop </router-link>
          </li>
          <li>
            <a href="#">sale</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
      </nav>
      <nav class="menu-services">
        <ul>
          <li>
            <img src="../../assets/img/account.svg" alt="account" />
          </li>
          <li>
            <img src="../../assets/img/search.svg" alt="search" />
          </li>
          <li @click="activeShoppingCart">
            <img src="../../assets/img/shopping-cart.svg" alt="shopping-cart" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { EventBus } from "../../App.vue";
export default {
  name: "Header",
  data() {
    return {
      menu: null,
    };
  },
  methods: {
    activeShoppingCart(){
      EventBus.$emit("activedShoppingCart");
    }
  }
};
</script>

<style scoped>
.header {
  padding: 16px;
  border: 2px solid #ffff;
}

.header-container {
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;
}

.logo h1 a{
  font-size: 50px;
  font-weight: 500;
  color: #333;

  cursor: pointer;
  transition: ease-in-out 0.3s;
}

.logo h1 a:hover {
  color: #1f1f1f;
}

.menu > ul {
  display: flex;
  flex-wrap: wrap;

  align-items: center;
}

.menu > ul li {
  margin-right: 14px;
}

.menu > ul li a {
  display: block;
  padding: 12px;

  font-size: 16px;
  font-weight: 400;
  color: #333;

  text-decoration: none;
  text-transform: uppercase;
}

.menu > ul li a::after {
  content: "";
  display: none;
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  transition: ease-out 0.5s;
}

menu > ul li a:hover {
  color: #1f1f1f;
}

.menu > ul li a:hover::after {
  display: block;
  background-color: #1f1f1f;
  animation: AnimateUnderline 0.5s forwards;
}

.menu-services ul {
  display: flex;
  flex-wrap: wrap;

  align-items: center;
}

.menu-services > ul li {
  max-width: 100%;
  margin-right: 24px;
  padding: 12px;
  cursor: pointer;
}

.menu-services ul li img {
  display: block;
  width: 100%;
}
</style>