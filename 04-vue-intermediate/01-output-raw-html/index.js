// 範例：v-html：在模板中輸出原始的 HTML 程式碼
const app = Vue.createApp({
  data() {
    return {
      content: `<p>這是一段<span style="color: hsl(0, 80%, 70%);">HTML</span>程式碼</p>`,
    };
  },
});
app.mount("#app");
