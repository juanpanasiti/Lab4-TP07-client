<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="pb-1">
          <b-button size="sm" variant="danger" v-on:click="deleteProduct(productParam._id)">Borrar</b-button>
          <br />
          <br />
          <b-button
            size="sm"
            variant="warning"
            :href="`/edit/${productParam._id}`"
            :productParam="productParam"
          >Editar</b-button>
        </b-col>

        <b-col class="pb-2"></b-col>
        <b-col cols="3">
          <a :href="'/product/' + productParam._id">
            <b-img
              :src="'http://localhost:3002/' + (productParam.imagenPath || '')"
              fluid
              alt="Fluid image"
            ></b-img>
          </a>
        </b-col>

        <b-col cols="8" style="text-align:left">
          <h3>{{productParam.instrumento || ''}}</h3>
          <br />
          <h2>${{productParam.precio.$numberDecimal || ''}}</h2>

          <p v-if="(productParam.costoEnvio.$numberDecimal || '') === '0'" style="color: green">
            <b-img src="/img/camion.png" />Envío gratis a todo el país
          </p>
          <p
            v-else
            style="color: orange"
          >Costo de Envío Interio de Argentina: ${{productParam.costoEnvio.$numberDecimal || ''}}</p>

          <p>{{productParam.cantidadVendida || ''}} vendidos</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["productParam"],

  methods: {
    async deleteProduct(idProd) {
      const res = await fetch(`http://localhost:3002/products/${idProd}`, {
        method: "DELETE"
      });
      const resJson = await res.json();
      console.log(resJson);
      this.$router.push("/products");
    } //deleteProduct()
  } //methods:
};
</script>