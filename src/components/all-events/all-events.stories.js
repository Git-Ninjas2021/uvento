import "./all-events.css";
import cardConcert from "./concert.html";
import cardSports from "./sports.html";
import cardEducation from "./education.html";
import cardAll from "./all-events.html";
export default {
  title: "Components/All-events",
  parameters: { layout: "centered" },
};

export const concert = () => cardConcert;
export const sport = () => cardSports;
export const education = () => cardEducation;
export const containercard = () => cardAll;
containercard.parameters = { layout: "fullscreen" };
