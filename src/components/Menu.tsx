import { ITrack } from "../interfaces";
import { Element } from "./Element";
const tracks: ITrack[] = [
  {
    source: "./src/assets/dancingFlameImg.jpg",
    title: "Dancing flame",
    artist: "christo4us",
    pauseBtn: true,
    id: 1,
  },
  {
    source: "./src/assets/bailaImg.jpg",
    title: "Baila",
    artist: "Alfonso Lugo",
    pauseBtn: false,
    id: 2,
  },
  {
    source: "./src/assets/coffeeImg.jpg",
    title: "Evening coffee",
    artist: "Oleg O Kachanko",
    pauseBtn: false,
    id: 3,
  },
  {
    source: "./src/assets/CristoImg.jpg",
    title: "Es el cristo",
    artist: "Son by Four",
    pauseBtn: false,
    id: 4,
  },
  {
    source: "./src/assets/evidenceImg.jpg",
    title: "Evidence song",
    artist: "The good Lawdz",
    pauseBtn: false,
    id: 5,
  },
  {
    source: "./src/assets/givemetimeImg.jpg",
    title: "Give me time",
    artist: "The A.J Gatz project",
    pauseBtn: false,
    id: 6,
  },
  {
    source: "./src/assets/InBetweenImg.jpg",
    title: "In between",
    artist: "Kinematic",
    pauseBtn: false,
    id: 7,
  },
  {
    source: "./src/assets/PlayedImg.jpg",
    title: "Played",
    artist: "Niki J Crawford",
    pauseBtn: false,
    id: 8,
  },
  {
    source: "./src/assets/PlayedImg.jpg",
    title: "Round and round",
    artist: "Niki J Crawford",
    pauseBtn: false,
    id: 9,
  },
  {
    source: "./src/assets/TrueImg.jpg",
    title: "True Moment",
    artist: "The ARTISANS",
    pauseBtn: false,
    id: 10,
  },
];
function Menu() {
  return (
    <div className="track-container">
      <Element tracks={tracks} />
    </div>
  );
}
export default Menu;
