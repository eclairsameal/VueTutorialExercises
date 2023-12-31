<script setup lang="ts">
import { computed, reactive, ref, type Ref } from 'vue';
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

// 設定狀態
type SortDirections = "asc" | "desc" | "";  // 升序

interface SortAndFilter {
  price: SortDirections;
  name: SortDirections;
  inStock: boolean | null;
}

const sortAndFilter: SortAndFilter = reactive({
  price: "",
  name: "",
  inStock: null,
});

// 事件處理
const productResult = computed(()=>{
  return products.value.filter((p) => 
  sortAndFilter.inStock === null ? true : p.inStock === sortAndFilter.inStock)
  .sort((a, b) => {
    if(sortAndFilter.price) {
      return sortAndFilter.price === "asc" 
      ? a.price - b.price 
      : b.price - a.price;
    }
    if(sortAndFilter.name) {
      return sortAndFilter.name === "asc" 
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
    }
    return 0;
  });
})

function handleSortByPrice() {
  if(sortAndFilter.price === "asc") {
    sortAndFilter.price = "desc";
  } else {
    sortAndFilter.price = "asc";
  }
  sortAndFilter.name = "";  // 當按照價格排序時，把依照名稱排序的狀態關掉
}
function handleSortByName() {
  if(sortAndFilter.name = "asc") {
    sortAndFilter.name = "desc";
  } else {
    sortAndFilter.name = "asc";
  }
  sortAndFilter.price = "";
} 
function handleSortByStock(inStock: boolean | null) {  // 要跟 (e: "filterByStock", inStock: boolean | null) 一樣
sortAndFilter.inStock = inStock;
}


</script>

<template>
  <main>
    <h1><ShopIcon /> Shop </h1>
    <ActionAndFilters 
      @sort-by-price="handleSortByPrice" 
      @sort-by-name="handleSortByName" 
      @filter-by-stock="handleSortByStock"/>
    <div class="productList">
      <ProductItem
        v-for="product in productResult"
        :key="product.id"
        v-bind="product"
        class="product"
      >
      <!-- in 後面改用 productResult -->
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
