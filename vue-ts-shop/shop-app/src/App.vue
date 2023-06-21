<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ShopIcon from "./components/Icon/ShopIcon.vue";
import ProductItem from "./components/ProductItem.vue";
import ActionAndFilters from "./components/ActionAndFilters.vue";

interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

const products = ref<Product[]>([
  {
  id: 1,
    title: "cotton T-shirt",
    price: 66,
    inStock: true,
    imageUrl: "/images/t-shirt1.jpg",
  },
  {
    id: 2,
    title: "Jacket",
    price: 128,
    inStock: true,
    imageUrl: "/images/jacket1.jpg",
  },
  {
    id: 3,
    title: "washed jeans",
    price: 99,
    inStock: false,
    imageUrl: "/images/jeans1.jpg",
  },
  {
    id: 4,
    title: "Printed T-shirt",
    price: 72,
    inStock: true,
    imageUrl: "/images/t-shirt2.jpg",
  },
])

</script>

<template>
  <main>
    <h1><ShopIcon /> Shop </h1>
    <ActionAndFilters/>
    <div class="productList">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        v-bind="product"
        class="product"
      >
        <!-- <img :src="product.imageUrl" alt=""/>
        <h2>{{ product.title }}</h2>
        <p class="price">Price : {{ product.price }}</p>
        <p>Stock : {{ product.inStock ? "in stock" : "out of stock" }}</p> --> 
      </ProductItem>
    </div>
  </main>

</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  gap: 48px;
  width: 100vw;
  padding: 24px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 32px;
}

h1 svg {
  width: 64px;
  height: 64px;
}
.productList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  width: 60%;
}
.product {
  box-shadow: 0px 0px 24px hsl(0deg, 0%, 0%, 0.1);
  padding: 18px;
  border-radius: 12px;
}

.product img {
  height: 200px;
}

.price {
  color: hsl(0deg, 100%, 66%);
  font-weight: bold;
}
</style>
