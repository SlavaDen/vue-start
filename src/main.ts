import { createApp } from "vue";
import App from "./App.vue";
import componets from "@/components/UI";

const app = createApp(App);

componets.forEach((componet) => {
  app.component(componet.name, componet);
});
app.mount("#app");
