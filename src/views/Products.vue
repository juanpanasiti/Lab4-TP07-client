<template>
  <div class="home">
    
    <div
      v-for="instrumento in instrumentosData"
      :key="instrumento.id"
    >
      <product-item :productParam="instrumento"/>
      <hr>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    "product-item": Product
  },

  mounted(){
    this.getInstrumentos()
  },
  data(){
    return{
      instrumentosData: []
    }
  },
  methods:{
    async getInstrumentos(){
      const res = await fetch("/data/instrumentos.json")
      const resJson = await res.json()
      console.log(resJson)
      this.instrumentosData = resJson.instrumentos
    }
  }
}
</script>
