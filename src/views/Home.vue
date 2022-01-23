<template>
  <div>
    <Intro />
    <Products />
    <Newsletter />
    <keep-alive>
      <component :is="isComponent"> </component>
    </keep-alive>
  </div>
</template>

<script>
import Intro from '../components/Home/Intro.vue';
import Newsletter from '../components/Home/Newsletter.vue';
import Products from '../components/Home/Products.vue';
import ShoppingCart from '../components/Home/ShoppingCart.vue';
import EventBus from '../services/eventBus';

export default {
  data(){
    return {
      isComponent: null
    }
  },
  mounted(){
    EventBus.$on("update:component", (e) => {
      this.isComponent = e;
    })
  },
  components: {
    Intro,
    Products,
    ShoppingCart,
    Newsletter
  }
};
</script>

<style>
</style>