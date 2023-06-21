<script setup lang="ts"></script>
<template>
  <div class="actions">
    <button>sort by price</button>
    <button>sort by name</button>
    <select>
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