import "./button.css";
import buttonhome from "./button-home.html";
import buttonsearch from "./button-search.html";
import buttonstar from "./button-star.html";
export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const home = () => buttonhome;
export const search = () => buttonsearch;
export const star = () => buttonstar;
