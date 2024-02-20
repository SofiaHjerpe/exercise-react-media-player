import { ITrack } from "../interfaces";
import "./Element.css"
interface IElementProps {
  tracks: ITrack[];
  paused?: string;
}
function Element({ tracks, paused}: IElementProps): JSX.Element {
   const classes= ["material-icons"];

    if(paused === "paused"){
      classes.push("paused");
    }
  return (
    <div>
      {tracks.map((track) => {
        return (
          <section className="visible-s-track">
            <section className="play-row">
              <img className="image" src={track.source} alt="img" />
              <div>
                <p className="song-title">{track.title}</p>
                <p>{track.artist}</p>
              </div>
            </section>
            <button className="icon-button">
              <i className={classes.join(" ")}>play_circle</i>
            </button>
          </section>
        );
      })}
    </div>
  );
}
export default Element;
