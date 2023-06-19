// Playlist 當作我們整個應用的設定對象，可以提供html方法 數據 等動態的東西
const Playlist = {
    data() {
      return {
        playlist: [
          {
            songName: "YOLO",
            commplete: true,
          },
          {
            songName: "about Us",
            commplete: false,
          },
          {
            songName: "Unleash",
            commplete: false,
          },
        ],
      };
    },
  };
// Vue 會讀取 Playlist 裡的配置，並掛載到 id 為 app 的元素上
Vue.createApp(Playlist).mount("#app");
