import React from 'react'
import { useContext } from 'react';
import Playlist from '../components/Playlist';
import { PlayerContext } from '../song-contexts/player-context';
import { ContentContext } from '../song-contexts/content-context';
import Song from '../components/Song';

const Favourite = () => {
  const { playTrack: handlePlayTrack } = useContext(PlayerContext);
  const { localFiles, favourite } = useContext(ContentContext);

  return (
    <>
      <Playlist playlistTitle={"Recently Played"}>
        {localFiles?.map(item => {
          return (
            <Song
              key={item.title}
              title={item.title}
              artists={item.artists}
              img={item.img}
              src={item.src}
              color={item.color}
              handlePlayTrack={handlePlayTrack}
            />
          )
        })}
      </Playlist>

      <Playlist playlistTitle={"Spotify Top 100"}>
        {favourite?.map((item, index)=> {
          return (
            <Song
              key={index}
              title={item.title}
              img={item.img}
              artists={item.artists}
              src={item.src}
              color={item.color}
              handlePlayTrack={handlePlayTrack}
            />
          )
        })}
      </Playlist>
    </>
  )
}

export default Favourite