<template>
  <div>
    <b-form @submit="onSubmit">
      <b-row>
        <b-col cols="6">
          <b-form-group id="input-group-1" label="Instrumento:" label-for="input-instrumento">
            <b-form-input id="input-instrumento" v-model="form.instrumento" type="text"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="3">
          <b-form-group id="input-group-2" label="Marca:" label-for="input-marca">
            <b-form-input id="input-marca" v-model="form.marca" type="text"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="3">
          <b-form-group id="input-group-3" label="Modelo:" label-for="input-modelo">
            <b-form-input id="input-modelo" v-model="form.modelo" type="text"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <b-form-group id="input-group-5" label="Precio:" label-for="input-precio">
            <b-form-input id="input-precio" v-model="form.precio" type="number"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="3">
          <b-form-group id="input-group-6" label="Costo de Envío:" label-for="input-costo-envio">
            <b-form-input id="input-costo-envio" v-model="form.costoEnvio" type="number"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="3">
          <b-form-group
            id="input-group-7"
            label="Cantidad Vendida:"
            label-for="input-cantidad-vendida"
          >
            <b-form-input id="input-cantidad-vendida" v-model="form.cantidadVendida" type="number"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="3">
          <b-form-group id="input-group-4" label="Imagen:" label-for="input-imagen">
            <input type="file" @change="onFileSelected" accept="image/png, image/jpeg" />
          </b-form-group>
        </b-col>
      </b-row>

      <div>
        <b-form-textarea
          id="textarea"
          v-model="form.descripcion"
          placeholder="Enter something..."
          rows="5"
          max-rows="10"
        ></b-form-textarea>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
//import VueRouter from 'vue-router'

export default {
  props: ["productParam"],
  data() {
    return {
      form: {
        instrumento: "",
        marca: "",
        modelo: "",
        precio: "",
        costoEnvio: "",
        cantidadVendida: "",
        descripcion: ""
      },
      productImage: null,
      product: []
    }; //return
  },
  async mounted() {
    if (this.$route.params.id) {
      await this.getProductById();
      await this.fillForm();
    }
  },
  methods: {
    onFileSelected(event) {
      this.productImage = event.target.files[0];
    },
    async onSubmit() {
      try {
        const fd = new FormData();
        fd.append("_id", this.$route.params.id);
        fd.append("instrumento", this.form.instrumento);
        fd.append("marca", this.form.marca);
        fd.append("modelo", this.form.modelo);
        fd.append("precio", this.form.precio);
        fd.append("costoEnvio", this.form.costoEnvio);
        fd.append("cantidadVendida", this.form.cantidadVendida);
        fd.append("descripcion", this.form.descripcion);
        if (this.productImage) {
          fd.append("productImage", this.productImage, this.productImage.name);
        }

        if (this.$route.params.id) {
          console.log("Enviando para actualizar");

          await axios
            .put("http://localhost:3002/products/" + this.$route.params.id, fd)
            .then(() => {
              console.log("Actualizado OK");
              window.location.replace("/products");
            })
            .catch(err => {
              console.log("Error: " + err.message);
            });
        } else {
          await axios
            .post("http://localhost:3002/products/", fd)
            .then(() => {
              console.log("Actualizado OK");
              window.location.replace("/products");
            })
            .catch(err => {
              console.log("Error: " + err.message);
            });
        }
      } catch (err) {
        console.log("Error en onSubmit: " + err.message);
      }
    }, //onSubmit()
    fillForm() {
      console.log("Llenar form");

      (this.form.instrumento = this.product.instrumento),
        (this.form.marca = this.product.marca),
        (this.form.modelo = this.product.modelo),
        (this.form.precio = this.product.precio),
        (this.form.costoEnvio = this.product.costoEnvio),
        (this.form.cantidadVendida = this.product.cantidadVendida),
        (this.form.descripcion = this.product.descripcion);
    },
    async getProductById() {
      const idParam = this.$route.params.id;
      const res = await fetch("http://localhost:3002/products/" + idParam);
      this.product = await res.json();
    }
  } //methods:
};
</script>