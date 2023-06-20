// 示例：如何创建组件
const app = Vue.createApp({});

app.component("WordCount", {
	template: `
    <div>
        <input v-model="content"></input>
        <p>你輸入了 {{ count }} 個字</p>
    </div>`,
    data() {
       return{
           content: "",
       };
    },
    computed: {
        count() {
            return this.content.length;
        }
    }
})

const vm = app.mount("#app");
