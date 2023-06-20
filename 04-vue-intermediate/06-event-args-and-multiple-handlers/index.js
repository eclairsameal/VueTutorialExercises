// 示例：事件传参与多事件处理函数
const app = Vue.createApp({
  data() {
    return {
      todos: [
        {
          id: 1,
          content: "待辦事項1",
        },
        {
          id: 2,
          content: "待辦事項2",
        },
        {
          id: 3,
          content: "待辦事項3",
        },
      ],
    };
  },
  methods: {
    handleClick(id, e) {
      alert(id + ", " + e.clientX + ", " + e.clientY);
    },
    showContent(content) {
      alert(content);
    },
  },
});
app.mount("#app");
