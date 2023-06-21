<script setup lang="ts">
    // defineProps(["imageUrl","title", "price", "inStock"]); // 原生的 js ，這樣寫的話型態都是any
    // 原生的 js寫法比較繁瑣
    // defineProps({
    //     title: {
    //         type: String,
    //     }
    // });
interface Props {
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

defineProps<Props>();  
</script>
<template>
      <div class="product">
        <img :src="imageUrl" alt=""/>
        <h2>{{ title }}</h2>
        <p class="price">Price : {{ price }}</p>
        <p>Stock : {{ inStock ? "in stock" : "out of stock" }}</p>
      </div>
</template>
<style scoped>
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