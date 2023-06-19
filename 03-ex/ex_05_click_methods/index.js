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
  },
  methods: {
		toggleAnswer(){
			this.showaAnswer = !this.showaAnswer;
    }
  }
});
app.mount("#app");
