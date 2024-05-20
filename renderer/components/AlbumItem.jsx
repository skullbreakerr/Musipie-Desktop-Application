import React, { useContext } from 'react'
import Playlist, { PlaylistCard } from './Playlist'
import { PlayerContext } from '../song-contexts/player-context';

const AlbumItem = ({ item }) => {
    const { playTrack } = useContext(PlayerContext);
    return (
        <Playlist>
            {item?.map(item => {
                return (
                    <PlaylistCard
                        key={item.title}
                        title={item.title}
                        tracks={item.artists}
                        img={item.img}
                        handleOpenTracks={() => playTrack(item.title, item.artists, item.img, item.src, item.color)}
                    />)
            })}
        </Playlist>
    )
}

export default AlbumItem;