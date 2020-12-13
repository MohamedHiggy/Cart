<template>
  <div class="home">
    <div class="container">
      
    <notifications group="foo" position="middle left"/>
      <div class="row">
          <Card 
          v-for="product in products" 
          :key="product.id" 
          :title="product.title"
          :id="product.id"
          :image="product.image"
          :body="product.body"
          :price="product.price"/>
        </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card"
import data from "../../data/db"
export default {
  name: 'Home',
  data() {
    return {
      products: data
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss">
  .home {
    padding: 50px 0;
  }
</style>
