<template>
  <section class="newsletter">
    <div class="newsletter-container">
      <div class="newsletter-form">
        <h1 class="newsletter-title">Receba Novidades!</h1>
        <h2>
          Assine Nossa Newsletter Para Você Sempre Receber Promoções Exclusivas.
        </h2>
        <p>
          Basta Você Adicionar Seu Email <br> Para Você Receber Todas Suas Novidades.
        </p>
        <input type="text" placeholder="Nome ou Apelido">
        <input type="text" placeholder="Email">
        <button>Enviar</button>
      </div>
      <div class="newsletter-img">
        <img
          src="../../assets/img/NicePng_t-shirts-png_814209.jpg"
          alt="banner"
          draggable="false"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter",
};
</script>

<style scoped>
.newsletter {
  padding: 10px 0;
}

.newsletter-title {
  font-weight: 400;
  font-size: 24px;
  color: #333333;
}

.newsletter-container {
  max-width: 80%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.newsletter-form {
  flex: 3;
}

.newsletter-form h2 {
  margin: 12px 0;
  font-size: 36px;
  font-weight: 300;
  line-height: 1.5em;

  color: #333333;
  max-width: 520px;
}

.newsletter-form p {
  margin: 12px 0;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;

  color: #c2c2c2;
}

.newsletter-form p {
  margin: 12px 0 25px 0;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;

  color: #c2c2c2;
}

.newsletter-form input {
  margin: 12px 0;
  padding: 16px;

  display: block;
  width: 360px;

  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  outline: 0;

  color: #333;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;
}

.newsletter-form button {
  margin: 12px 0;
  padding: 12px;
  border-radius: 4px;

  display: block;
  width: 360px;

  background: #5450BF;
  border: 1px solid #F2F2F2;
  outline: 0;

  color: #fff;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
}

.newsletter-img {
  flex: 2;
}

.newsletter-img img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
</style>