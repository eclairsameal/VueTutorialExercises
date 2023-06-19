// 範例：表單輸入控制事件處理
const app = Vue.createApp({
  data() {
    return {
      username: "",
    };
  },
  methods: {
    handleInput(e) {
      this.username = e.target.value;
    },
    resetUsername() {
      this.username = "";
    }
  },
});
app.mount("#app");
