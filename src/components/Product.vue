<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="3">
          <a :href="'/product/' + productParam.id" >
            <b-img :src="'/img/' + productParam.imagen" fluid alt="Fluid image"></b-img>
          </a>
        </b-col>

        <b-col cols="9" style="text-align:left">
          <h3>{{productParam.instrumento}}</h3>
          <br />
          <h2>${{productParam.precio}}</h2>

          <p v-if="productParam.costoEnvio === 'G'" style="color: green">
            <b-img src="/img/camion.png" />Envío gratis a todo el país
          </p>
          <p
            v-else
            style="color: orange"
          >Costo de Envío Interio de Argentina: ${{productParam.costoEnvio}}</p>

          <p>{{productParam.cantidadVendida}} vendidos</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["productParam"]
};
</script>