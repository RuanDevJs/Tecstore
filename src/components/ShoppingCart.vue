<template>
  <section
    :class="['modal', { actived: active, disabled: disabled }]"
    @click="disableModal"
  >
    <div class="modal-container">
      <h1>Carrinho</h1><hr>
      {{ cart }}
      <div class="list-products" v-if="carrinho.length">
        <div v-for="({ name, price, source }, index) of carrinho" :key="index">
          <div>
            <img :src="source" :alt="name" />
          </div>
          <h1>{{ name }}</h1>
          <div class="price">
            <div :class="['mouseArea']">
              <p>R$ {{ price }}</p>
              <a href="#" @click.prevent="removerCarrinho(index)">Remover</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="cart-empty">Nenhum produto :/</p>
      </div>
    </div>
  </section>
</template>

<script>
import { EventBus } from "../App.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  data: function () {
    return {
      active: false,
      disabled: true,
      carrinho: [],
    };
  },
  mounted() {
    EventBus.$on("activedShoppingCart", () => {
      this.disabled = false;
      this.active = true;
    });
  },
  methods: {
    disableModal({ currentTarget, target }) {
      if (currentTarget === target) {
        setTimeout(() => {
          this.active = false;
        }, 300);
        this.disabled = true;
      }
    },
    removerCarrinho(productIndex){
      const removedProduct = this.carrinho.filter((el, index) => {
          return productIndex !== index;
      });
      this.carrinho = removedProduct;
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    },
  },
  computed: {
    ...mapGetters(['cart'])
  }
};
</script>

<style type="scopped">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: transparent;

  display: none;
}

.modal h1 {
    padding: 20px 0 10px 0;
    font-size: 22px;
    font-weight: 300;
    color: #333;
    text-transform: capitalize;
}

.modal.actived {
  display: block;
}

.modal-container {
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  background: #FEFBFB;
  width: 0;
  height: 100%;

  overflow-y: scroll;
  transition: ease-in-out 0.3s;

  box-shadow: 0 0 16px rgba(0, 0, 0, 16%);
  border-top-left-radius: 10px;
}

.modal.actived > .modal-container {
  animation: AnimateModal forwards 0.3s;
}

.modal.disabled > .modal-container {
  animation: DisableModal forwards 0.3s;
}

.list-products {
  padding: 16px;
}

.list-products > div {
  margin: 10px 0 5px 0;
}

.list-products img {
  max-width: 100%;
  object-fit: cover;
  display: block;
}

.list-products h1 {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin: 8px 0 4px 0;
}

.price {
  height: 50px;
  overflow-y: hidden;
}

.list-products p {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  cursor: pointer;

  display: block;
  max-width: 50%;
  margin: 0 auto;

  padding: 12px;
}

.list-products a {
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

.cart-empty {
  font-size: 18px;
  font-weight: 300;
  color: #333;
  margin-top: 50px;
}

@keyframes AnimateModal {
  from {
    width: 0;
  }
  to {
    width: 320px;
  }
}

@keyframes DisableModal {
  from {
    width: 320px;
  }
  to {
    width: 0px;
  }
}
</style>