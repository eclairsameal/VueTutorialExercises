<template>
<div>
    <input type="text" v-model="content">
    <p>你輸入了 {{ count }} 個字</p>
</div>

</template>

<!-- 組件的配置 data computed 之類的-->
<script>
export default {
    data() {
       return{
           content: "",
       };
    },
    computed: {
        count() {
            return this.content.length;
        }
    },
}
</script>
<!-- css 樣式，scoped 表示只對這個組件生效-->
<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

p {
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>