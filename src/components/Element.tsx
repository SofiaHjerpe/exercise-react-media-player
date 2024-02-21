import { ITrack } from "../interfaces";
import "./Element.css";
interface IElementProps {
  tracks: ITrack[];
  pause?: true | undefined;
}
export function Element({ tracks, pause }: IElementProps): JSX.Element {


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
              <span className="material-icons">play_circle</span>
            </button>
          </section>
        );
      })}
    </div>
  );
}
