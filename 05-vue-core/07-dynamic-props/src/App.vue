<script>
import MessageItem from './components/MessageItem.vue';  // 導入組件
export default {
  components: {
    MessageItem,
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          sender: "Max",
          msg: "Hello",
          time: "19:30",
        },
        {
          id: 2,
          sender: "Jone",
          msg: "Hi",
          time: "40",          
        },
        {
          id: 3,
          sender: "Alex",
          msg: "Hiiiiiii",
          time: "22:27",          
        }
      ]
    }
  }
};
</script>

<template>
  <main>
    <div>
      <!-- <MessageItem sender="Max" msg="Hello" time="19:30"/>
      <MessageItem sender="Jone" msg="Hi" time="21:40"/>
      <MessageItem sender="Alex" msg="Hiiiii" time="22:27"/> -->
      <MessageItem v-for="message in messages" 
      :key="message.id"
      :sender="message.sender"
      :msg="message.msg"
      :time="message.time" />
    </div>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(#212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px);
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

h1 {
  margin-bottom: 2em;
}
</style>
