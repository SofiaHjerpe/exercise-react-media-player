import { ITrack } from "../interfaces";
import "./Track.css"

const tracks: ITrack[] = [
  {
    source: "./src/assets/dancingFlameImg.jpg",
    title: "Dancing flame",
    artist: "christo4us",
    pauseBtn: true,
    id: 1,
  },
];
export function Track(){
  return (
    <section className="playing">
      <section className="track">
        <div className="songImageContainer">
          <img className="songImage" alt="" src={tracks[0].source} />
        </div>
      </section>
      <div className="play-r">
        <i className="material-icons" id="rewind">
          repeat
        </i>
        <button id="play-icon">
          <i className="material-icons icon_text">
            {tracks[0].pauseBtn ? "pause_circle" : "play_circle"}
          </i>
        </button>
        <i className="material-icons" id="shuffle">
          shuffle
        </i>
      </div>
      <div className="time-line-container">
        <span className="outer-time-line">
          <span className="inner-time-line"> </span>
        </span>
      </div>

      <div className="song-play1">
        <button className="left-button">
          <span className="material-icons"> keyboard_double_arrow_left</span>
        </button>
        <div className="song-info">
          <p>{tracks[0].title}</p>
          <p>{tracks[0].artist}</p>
        </div>
        <button className="right-button">
          <span className="material-icons">keyboard_double_arrow_right</span>
        </button>
      </div>
    </section>
  );
}
