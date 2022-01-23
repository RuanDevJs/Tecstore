<template>
  <section class="shopping-cart" @click="disableModal">
    <div class="shopping-cart-container">
      <div class="shopping-cart-title">
        <h1>Carrinho</h1>
      </div>
      <div class="shopping-cart-products">
        <div class="product" v-for="({name, price, source, id}, index) of carrinho" :key="index">
          <img :src="source" :alt="name">
          <div class="product-info">
            <router-link :to="`/product/${id}`">{{  name }}</router-link>
            <p>R$ {{ price }}</p>
            <span>Remover</span>
          </div>
        </div>
      </div>
      <div class="subtotal">
       <h2>Subtotal {{ total }} </h2>
      </div>
      <div class="close-modal">
        <button>Continuar Navegando</button>
        <button>Continuar Navegando</button>
      </div>
    </div>
  </section>
</template>

<script>
import EventBus from '../../services/eventBus';
export default {
  name: "ShoppingCart",
  data: function () {
    return {
      active: false,
      disabled: true,
      carrinho: [],
    };
  },
  methods: {
    getProducts(){
      const products = JSON.parse(localStorage.getItem("carrinho"));
      if(products){
        this.carrinho.push(...products);
      }
    },
    disableModal({ currentTarget, target}){
      if(currentTarget === target){
        EventBus.$emit("update:component", null);
      }
    }
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    total(){
       const price = this.carrinho.reduce((acc, item) => {
        const price = +item.price.replace(',', '.');
        acc += price;
        return acc;
      }, 0);
      return `R$ ${price}`;
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
}

.shopping-cart-container {
  padding: 32px;
  width: 460px;
  height: 100vh;
  background: #ffffff;
  overflow-y: auto;
  animation: Open 0.5s forwards;
}

.shopping-cart-title h1 {
  font-size: 32px;
  font-weight: 300;
  color: #333;
}

.shopping-cart-title h1::after {
  content: "";
  width: 100%;
  height: 1px;
  background: #f2f2f2;
  display: block;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: #c2c2c2; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c9c9c9; 
}

.shopping-cart-products {
  margin: 32px 0;
}

.product {
  padding: 18px;
  margin: 18px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #F8F8F8;
}

.product-info a{
  font-size: 18px;
  font-weight: 400;
  color: #333;
}

.product-info p{
  font-size: 16px;
  font-weight: 400;
  color: #1f1f1f;
}

.product img {
  margin-right: 16px;
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.product span {
  text-align: center;
  display: block;
  padding: 5px;

  width: 120px;
  background: #333;

  font-size: 16px;
  font-weight: 300;
  color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out .3s;
}

.product span:hover {
  background: #1f1f1f;
}

.subtotal {
  padding: 16px 0 0px 0;
}

.subtotal h2::before, .subtotal h2::after {
  content: "";
  margin: 16px 0;

  display: block;
  width: 100%;
  height: 1px;

  background: #f2f2f2;
}

.subtotal h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #1f1f1f !important;
}

.close-modal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px 0 50px;
  margin: 16px 0;
}

.close-modal button:nth-child(1){
  border: 0;
  outline: 0;

  width: 220px;
  padding: 12px 6px;
  background: #F2F2F2;

  border-radius: 4px;

  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400 !important;
  color: #333;
  cursor: pointer;
}

.close-modal button:nth-child(2){
  margin-left: 18px;
  border: 0;
  outline: 0;

  width: 220px;
  padding: 12px 6px;
  background: #1f1f1f;

  border-radius: 4px;

  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400 !important;
  color: #FEFBFB;
  cursor: pointer;
}

@keyframes Open {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    width: 460px;
    opacity: 1;
  }
}

@keyframes Close {
  from {
    width: 460px;
    opacity: 1;
  }
  to {
    opacity: 0;
    width: 0;
  }
}
</style>