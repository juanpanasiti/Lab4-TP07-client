<template>
  <div>
    <h1>Editar {{product.instrumento}}</h1>
    <form-product :productParam="product"/>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  components: {
    "form-product": Form
  },
  mounted(){
    this.getProductById()
  },
  data() {
    return {
      product: []
    }
  },
  methods: {
    async getProductById() {  
      const idParam = this.$route.params.id;
      const res = await fetch("http://localhost:3002/products/" + idParam);
      this.product = await res.json()
    }
  }
};
</script>