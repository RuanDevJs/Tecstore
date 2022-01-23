<template>
  <section class="product" v-if="data">
    <div class="product-container">
      <div class="product-image">
        <img :src="data.source" :alt="data.name" />
      </div>
      <div class="product-info">
        <p>Marca: Vuex</p>
        <h2>{{ data.name }}</h2>
        <span>R$ {{ data.price }}</span>
        <div class="sizes">
          <div class="size">
            <input type="radio" v-model="checkbox" value="P" name="p" id="p" />
            <label for="p">P</label>
          </div>
          <div class="size">
            <input type="radio" v-model="checkbox" value="M" name="m" id="m" />
            <label for="m">M</label>
          </div>
          <div class="size">
            <input type="radio" v-model="checkbox" value="G" name="g" id="g" />
            <label for="g">G</label>
          </div>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            natus quaerat provident ea harum aspernatur amet nesciunt, ipsum
            deleniti molestiae!
          </p>
        </div>
        <button class="product-btn">Comprar</button>
        <div class="cep">
          <p class="cep-title">Calcular Frete</p>
          <div class="cep-input">
            <input
              type="text"
              maxlength="8"
              v-model.trim="cep"
              placeholder="Insira seu cep"
            />
          </div>
          <div class="loading" v-if="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="cep-response" v-else-if="!loading && cepResponse">
              <span><span class="title"> Web Entregas </span> - R$ 18,00 (Chegará dia 5)</span>
              <span><span class="title"> Vue Rotas </span> - R$ 7,00 (Chegará dia 29)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="loading" v-else>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: false,
      loading: false,
      checkbox: null,
      cep: "",
      cepResponse: false
    };
  },
  props: ["product"],
  methods: {
    fetchProduct() {
      fetch(`http://localhost:3000/products/${this.product}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
              this.data = r;
          }, 1000)
        });
    },
  },
  created() {
    this.fetchProduct();
  },
  watch: {
    cep() {
      if (this.cep.length === 8) {
        this.cep = `${this.cep.substr(0,5)}-${this.cep.substr(5,9)}`;
        this.loading = true;
        this.cepResponse = false;
        console.log('mudando')
        fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then((r) => r.json())
          .then(() => {
              setTimeout(() => {
                  this.loading = false;
                  this.cepResponse = true;
              }, 1020)
          });
      }
    },
  },
};
</script>

<style scopped>
.loading {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #333;
  margin: 0 4px;
  animation: dots 0.6s cubic-bezier(0.1, 0.1, 1, 0.4) infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: 0.1s;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.3s;
}

.loading span:nth-child(4) {
  animation-delay: 0.4s;
}

.product {
  padding: 50px 0;
  animation: Animate .5s forwards;
}

.product-container {
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.product-image {
  flex: 2;
  margin-right: 50px;
  align-self: flex-start;
}

.product-image img {
  width: 100%;
  height: 460px;
  object-fit: cover;
}

.product-info {
  flex: 2;
  align-self: flex-start;
}

.product-info p {
  padding: 10px 0 5px 0;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #c2c2c2;
}

.product-info h2 {
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #333;
}

.product-info span {
  display: block;
  margin: 5px 0;
  font-size: 24px;
  font-weight: 400;
  color: #333;
}

.product-btn {
  margin: 50px 0 10px 0;
  padding: 12px;
  border-radius: 4px;

  display: block;
  width: 360px;

  background: #1f1f1f;
  border: 1px solid #f2f2f2;
  outline: 0;

  color: #fff;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;

  transition: 0.3s ease-in-out;
}

.product-btn:hover {
  background: #333;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 16%);
}

.sizes {
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.size label {
  padding: 2px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 16px;
}

.description p {
  font-weight: 300;
  line-height: 1.5em;
  color: #c2c2c2;
}

.cep {
  padding: 20px 0;
}

.cep-title {
  font-size: 18px !important;
  font-weight: 400 !important;
  color: #1f1f1f !important;
}

.cep-input input {
  padding: 16px 12px;
  margin: 4px 0;
  outline: 0;

  width: 360px;
  background: #fff;
  border: 1px solid #f2f2f2;

  font-size: 18px;
  font-weight: 500;
}

.cep-response span {
    display: flex;
    align-items: center;
    font-size: 18px !important;
    font-weight: 300;
    color: #c2c2c2;
}

.cep-response span .title {
    font-weight: 400 !important;
    color: #1f1f1f !important;
    padding-left: 5px;
    padding-right: 5px;
}

@keyframes Animate {
    from {
        opacity: 0;
        transform: translate3d(0, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 10px, 0);
    }
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>