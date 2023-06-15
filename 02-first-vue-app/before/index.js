// Playlist 當作我們整個應用的設定對象，可以提供html方法 數據 等動態的東西
const Playlist = {
    data() {
      return {
        playlist: ["YOLO", "about Us", "Unleash"],
        searchTerm: "",    // 用來保存使用者的輸入
      };
    },
  };
// Vue 會讀取 Playlist 裡的配置，並掛載到 id 為 app 的元素上
Vue.createApp(Playlist).mount("#app");
