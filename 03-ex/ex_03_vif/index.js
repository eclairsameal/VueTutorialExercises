
const app = Vue.createApp({
    data() {
      return {
        books: ["The C Programming Language", "Operating System Concepts", "Introduction to Algorithms"],
        //books: ["The C Programming Language"],
        //books: [],
      };
    },
  });

app.mount("#app");
