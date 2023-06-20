// 示例：全局注册组件
const app = Vue.createApp({});

app.component("WordCount", {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
  template: `
    <div>
      <input v-model="content" />
      <p>你輸入了 {{ count }} 個字</p>
    </div>
  `,
});

app.component("WordCountApp", {
  template: `<div>
    <h1>文字統計的應用</h1>
    <WordCount />
  </div>`,
});

const vm = app.mount("#app");
