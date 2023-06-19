const app = Vue.createApp({
  data() {
    return {
      showaAnswer: false,
      countDown: 5,
      timer: null,
    };
  },
  computed: {
    label() {
      return this.showaAnswer ? "隱藏答案" + this.countDown : "顯示答案";
    }
  },
  methods: {
		toggleAnswer(){
			this.showaAnswer = !this.showaAnswer;
    },
  },
  watch: {
    showaAnswer(newVal, oldVal) {
      if(newVal) {    // 當 showaAnswer 變成 true
        this.countDown = 5;    // 有可能上次被改成其他數字，所以重新設定為5
        if(this.timer) {    // 當 timer 有值的話，清除他
            //(多次點擊按鈕可能導致產生多個計時器，多個計時器同時修改countDown，可能會讓時間變化過快)
            clearInterval(this.timer);
            this.timer = null;
        }
      }
        // 正常處理
        this.timer = setInterval(() => {
          this.countDown -= 1;
          if(this.countDown === 0) {
            this.showaAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
    }
  }
});
app.mount("#app");
