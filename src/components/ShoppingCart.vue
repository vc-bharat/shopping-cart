<template>
    <div class="shopping-cart">
      <h2 class="shopping-cart__title">Shopping Cart</h2>
      <ul class="shopping-cart__list">
        <li v-for="item in cartItems" :key="item.id" class="shopping-cart__item">
          {{ item.name }} - {{ item.price }}
          <button @click="removeFromCart(item.id)" class="shopping-cart__remove-btn">Remove</button>
        </li>
      </ul>
      <p class="shopping-cart__total">Total: {{ cartTotal }}</p>
    </div>
  </template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters(['getCartItems','getCartTotal']),
        cartItems() {
            return this.getCartItems
        },
        cartTotal() {
            return this.getCartTotal;
        }
    },
    methods: {
        ...mapActions(['removeFromCart']),
    },
}
</script>

<style scoped>
.shopping-cart {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}

.shopping-cart__title {
  font-size: 20px;
  margin-bottom: 10px;
}

.shopping-cart__list {
  list-style-type: none;
  padding: 0;
}

.shopping-cart__item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shopping-cart__remove-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.shopping-cart__remove-btn:hover {
  background-color: #c82333;
}

.shopping-cart__total {
  font-weight: bold;
  margin-top: 10px;
}

</style>