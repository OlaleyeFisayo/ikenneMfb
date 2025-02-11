<template>
  <div class="chatbot-container" v-if="showFullForm">
    <div class="chat-header">
      <h3>Hey</h3>
      <div role="button" @click="toggleChatBot">
        <X color="white" />
      </div>
    </div>
    <div class="chat-window">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['chat-message', message.sender]"
      >
        <span>{{ message.text }}</span>
      </div>
    </div>
    <div class="chat-input">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Type your message..."
      />
      <AppButton @click="sendMessage">Send</AppButton>
    </div>
  </div>
  <div class="chatbot-button" v-else role="button" @click="toggleChatBot">
    <MessageCircle color="white" :size="35" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppButton from "./app-button.vue";
import { MessageCircle, X } from "lucide-vue-next";

const messages = ref([
  { sender: "bot", text: "Hello! How can I help you today?" },
]);
const userInput = ref("");
const showFullForm = ref(false);

const toggleChatBot = () => {
  showFullForm.value = !showFullForm.value;
};

const sendMessage = () => {
  if (userInput.value.trim()) {
    // Add user message to the chat
    messages.value.push({ sender: "user", text: userInput.value });
    const tempValue = userInput.value;
    // Simulate bot response
    setTimeout(() => {
      messages.value.push({
        sender: "bot",
        text: "You said: " + tempValue,
      });
    }, 1000);

    userInput.value = "";
  }
};
</script>

<style scoped lang="scss">
.chatbot-button {
  background: var(--blue4);
  width: fit-content;
  padding: 0.8rem;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}

.chatbot-container {
  max-width: 350px;
  width: 100%;
  height: 500px;
  border-radius: var(--borderRadius);
  display: flex;
  flex-direction: column;
  background-color: var(--text-light);
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  overflow: hidden;
}

.chat-header {
  background-color: var(--blue4);
  color: var(--text-light);
  padding: 1rem 0.8rem 1rem 0.8rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  div {
    cursor: pointer;
  }
}

.chat-window {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  span {
    font-size: var(--smallFontSize);
  }
}

.chat-message {
  margin-bottom: 10px;
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
}

.chat-message.bot {
  background-color: #f1f1f1;
  align-self: flex-start;
}

.chat-message.user {
  background-color: var(--blue4);
  color: var(--text-light);
  align-self: flex-end;
}

.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid var(--gray);
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
}
</style>
