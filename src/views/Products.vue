<template>
  <section class="products">
    <div class="products-container">
      <div
        v-for="({ name, price, source, id }, index) of products"
        :key="index"
        class="product-item"
      >
        <div>
          <img :src="source" :alt="name" />
        </div>
        <h2>{{ name }}</h2>
        <div class="price">
          <div class="mouseArea">
            <p>R$ {{ price }}</p>
            <a href="#" @click.prevent="setInCarrinho(name, price, source, id)">comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Products",
  data() {
    return {
      products: {},
      carrinho: []
    };
  },
  methods: {
    fetchProducts() {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((res) => (this.products = res));
    },
    setInCarrinho(name, price, source, id){
        this.carrinho.push({name, price, source})
        this.$router.push(`/product/${id}`);
    },
    getCartInLocalStorage(){
      const products = JSON.parse(window.localStorage.getItem('carrinho'));
      if(products){
        this.carrinho.push(...products)
      }
    }
  },
  created() {
    this.fetchProducts();
    this.getCartInLocalStorage();
  },

  watch: {
    carrinho(){
      localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
    }
  }
};
</script>

<style>
.products {
  margin-top: 50px;
  padding: 15px;
}

.product-title {
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
}

.product-title span {
  font-size: 32px;
  font-weight: 300;
  color: #333;
}

.product-title h1 {
  font-size: 32px;
  font-weight: 700;
  color: #333;
}

.product-title button {
  position: relative;
  width: 220px;
  padding: 16px;

  border: 2px solid #333;
  border-radius: 2px;
  outline: 0;
  background-color: #fff;

  font-size: 16px;
  font-weight: 700;
  color: #333;

  text-transform: uppercase;
  cursor: pointer;

  transition: ease-in-out 0.4s;
}

.product-title button:hover {
  color: #f2f2f2 !important;
  background-color: #333;
}

.products-container {
  max-width: 960px;
  margin: 25px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  opacity: 1;
}

.product-item {
  max-width: 300px;
  margin-bottom: 18px;

  text-align: center;
}

.product-item img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

.product-item h2 {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin: 8px 0 4px 0;

  text-align: center;
}

.product-item p {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  cursor: pointer;

  display: block;
  max-width: 50%;
  margin: 0 auto;

  padding: 8px;
}

.product-item a {
  display: block;
  max-width: 50%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
  color: #1f1f1f;
  cursor: pointer;

  padding: 12px;

  text-decoration: underline 1px #1f1f1f;
  text-underline-offset: 4px;
}
</style>