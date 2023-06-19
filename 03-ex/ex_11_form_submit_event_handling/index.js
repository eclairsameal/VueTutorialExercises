// 示例：其它表单控件处理
const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();   // 防止頁面跳轉，也可以寫在html中
      console.log(
        this.username,
        this.gender,
        this.interests,
        this.occupation,
        this.intro
      );
    }
  }
});
app.mount("#app");
