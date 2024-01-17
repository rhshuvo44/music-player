const MusicElement = () => {
  return (
    <div className="musicelement">
      <div className="song_picture">
        <img src="" alt="Song Cover" />
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
    </div>
  );
};

export default MusicElement;
