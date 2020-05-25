<template>
  <div>
    <b-container fluid >
      <b-row>
          <br>
        <b-col cols="7" style="border-right: 1px solid #cecece">
          <div>
            <b-img :src="'http://localhost:3002/' + product.imagenPath" fluid 
                    alt="Fluid image"
                    style="height: 300px"
                    center/>
          </div>
          <br>
          <p>Descripción:</p>
          <p>
              {{product.descripcion}}
          </p>
        </b-col>

        <b-col cols="5" >
          <p class="text-muted">{{product.cantidadVendida}} vendidos</p>
          <h3>{{product.instrumento}}</h3>
          <br />
          <h1>${{product.precio}}</h1>
          <br>
          <p>
              Marca: {{product.marca}}
              <br>
              Modelo: {{product.modelo}}
          </p>
          <br>
          Costo Envío:
          <p v-if="product.costoEnvio === '0'" style="color: green">
            <b-img src="/img/camion.png" />Envío gratis
          </p>
          <p
            v-else
            style="color: orange"
          >Interio de Argentina: ${{product.costoEnvio}}</p>
          <br>
          <b-button variant="outline-primary">Agregar al carrito</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "ShowProduct",
  components: {},
  mounted() {
    this.getProductById();
  },
  data() {
    return {
      product: []
    };
  },
  methods: {
    async getProductById() {
      console.log("iniciando");

      const idParam = this.$route.params.id;
      const res = await fetch("http://localhost:3002/products/" + idParam);
      this.product = await res.json();
      
      console.log(this.product);
    }
  }
};
</script>