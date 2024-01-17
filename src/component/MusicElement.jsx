import { FaPlay } from "react-icons/fa";
import { IoIosRepeat, IoIosShuffle } from "react-icons/io";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
const MusicElement = () => {
  return (
    <div className="musicelement">
      <div className="song_picture">
        <img src="./image/1.jpg" alt="Song Cover" />
      </div>
      <div className="progress">
        <div className="time">
          <span>00:00</span>
          <span>00:00</span>
        </div>
        <div className="progress_bar">
          <div className="progress_line"></div>
        </div>
      </div>
      <div className="song_detail">
        <marquee behavior="" direction="">
          this is a song name
        </marquee>
        <p>unkown artist</p>
      </div>
      <div className="controls">
        <button>
          <IoIosRepeat />
        </button>
        <div className="control_btn">
          <button>
            <MdOutlineSkipPrevious />
          </button>
          <button className="play_btn">
            <FaPlay />
          </button>
          <button>
            <MdOutlineSkipNext />
          </button>
        </div>
        <button>
          <IoIosShuffle />
        </button>
      </div>
    </div>
  );
};

export default MusicElement;
