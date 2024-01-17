import { FaPlay } from "react-icons/fa";

const MusicList = () => {
  return (
    <div className="musiclist">
      <ul className="ul_music">
        <li>
          <img src="./image/1.jpg" alt="" />
          <div className="song_list">
            <p>Song Name</p>
            <span>
              <FaPlay />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MusicList;
