import React from 'react';

const Song = ({ title,img="https://www.clker.com/cliparts/6/c/1/4/1358105971891943396music_note1.jpg", artists, handlePlayTrack, src,color}) => { 
 
  return (

    < button className='song-card' onClick={() => handlePlayTrack(title,artists,img,src,color)}>
      <span>
        <img src={img} alt={"Lost stories Mirza"} />
        <h4 >{title}</h4>
        <p >{artists}</p>
      </span>
    </button >

  )
}

export default Song