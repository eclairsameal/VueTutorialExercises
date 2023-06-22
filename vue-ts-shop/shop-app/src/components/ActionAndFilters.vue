<script setup lang="ts">
    const emit = defineEmits<{
        (e: "sortByPrice"): void;
        (e: "sortByName"): void;
        (e: "filterByStock", inStock: boolean | null): void;
    }>();
    function emitFilterByStock(e: Event) {    // 傳入原生事件
        const value = (e.target as HTMLSelectElement).value;    // 強制轉換
        let inStock: boolean | null = null;
        if (value) {    // value 是字串
            inStock = value === "true";
        }
        emit("filterByStock", inStock);
    }
</script>
<template>
  <div class="actions">
    <button @click="emit('sortByPrice')">sort by price</button>
    <button @click="emit('sortByName')">sort by name</button>
    <select @change="emitFilterByStock">
        <option value="">filter by stock</option>
        <option value="true">in stock</option>
        <option value="false">out of stock</option>
    </select>
  </div>
</template>
<style>
.actions {
    display: flex;
    gap: 24px;
}
</style>