<template>
  <div>
    <Header />
    <Intro />
    <Products />
    <Newsletter />
    <keep-alive>
      <component :is="'ShoppingCart'"> </component>
    </keep-alive>
  </div>
</template>

<script>
import Header from '../components/Home/Header.vue';
import Intro from '../components/Home/Intro.vue';
import Newsletter from '../components/Home/Newsletter.vue';
import Products from '../components/Home/Products.vue';
import ShoppingCart from '../components/Home/ShoppingCart.vue';

export default {
  components: {
    Header,
    Intro,
    Products,
    ShoppingCart,
    Newsletter
  }
};
</script>

<style>
</style>