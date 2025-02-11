import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { router } from "./routes/route";
import "@splidejs/splide/dist/css/splide.min.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
