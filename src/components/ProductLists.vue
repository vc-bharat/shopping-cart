<template>
    <div>
      <h2>Product List</h2>
      <ul class="product-list">
        <li v-for="product in products" :key="product.id" class="product-item">
          <span class="product-name">{{ product.name }}</span>
          <span class="product-price">{{ product.price }}</span>
          <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters(['getProducts']),
        products() {
            return this.getProducts
        }
        // products() {
        //     return this.$store.getters.getProducts;
        // },
    },
    methods: {
        ...mapActions(['addToCart']),
    }
};
</script>

<style scoped>
.product-list {
  list-style-type: none;
  padding: 0;
}

.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.product-name {
  flex: 1;
  font-weight: bold;
  margin-right: 10px;
}

.product-price {
  font-style: italic;
  margin-right: 10px;
}

.add-to-cart-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>