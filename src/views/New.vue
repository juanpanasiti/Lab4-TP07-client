<template>
  <div>
    <h1>Nuevo Producto</h1>
    <form-product />

  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  components: {
    "form-product": Form
  }
};
</script>