import React from 'react'
import { useContext } from 'react'
import Track from './Track';
import { PlayerContext } from '../song-contexts/player-context';

const TrackItem = ({tracks}) => {
   const {playTrack}= useContext(PlayerContext);
    return (
    <ul>
    {tracks?.map(song=>{
        return(
            <Track
            key={song.src}
            title={song.title} 
            artists={""}
            src={song.src}
            handleClick={() => playTrack(song.title, song.artists, song.img, song.src, song.color)} 
            favourite={false}
            dash={true}
            />
        )
    })}
    </ul>
  )
}
export default TrackItem;