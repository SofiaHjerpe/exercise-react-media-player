import { ITrack } from "../interfaces";
import "./Menu.css";
interface IMenuProps {
  tracks: ITrack[];
}
function Menu({ tracks}: IMenuProps) {
  return (
    <div className="track-container">
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
              <i className="material-icons paused">play_circle</i>
            </button>
          </section>
        );
      })}
    </div>
  );
}
export default Menu;
