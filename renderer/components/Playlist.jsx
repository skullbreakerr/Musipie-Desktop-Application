import React from 'react';
const Playlist = ({ playlistTitle, children }) => {
  return (
    <>
      <h2 className='playlist-title'>{playlistTitle}</h2>
      <div className='playlist-container'>
        {children}
      </div>
    </>)
}

export const PlaylistCard = ({ title, tracks, img="https://www.clker.com/cliparts/6/c/1/4/1358105971891943396music_note1.jpg", handleOpenTracks }) => {
 
  return (
    <button className='song-card' onClick={handleOpenTracks}>
      <span>
        <img src={img} alt={"playlist title"} />
        <h4 >{title}</h4>
        <p >{tracks}</p>
      </span>
    </button >
  )
}
export default Playlist