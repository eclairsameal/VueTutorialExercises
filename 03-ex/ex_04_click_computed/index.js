const app = Vue.createApp({
  data() {
    return {
      showaAnswer: false,
    };
  },
  computed: {
    label() {
      return this.showaAnswer ? "隱藏答案" : "顯示答案";
    }
  }
});
app.mount("#app");
