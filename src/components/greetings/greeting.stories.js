import "./greeting.css";
import SayHello from "./greeting.html";

export default {
  title: "Components/Greeting",
  parameters: { layout: "centered" },
};

export const greetings = () => SayHello;
