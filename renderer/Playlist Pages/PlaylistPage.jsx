import { useContext } from 'react';
import Playlist, { PlaylistCard } from '../components/Playlist.jsx';
import { ContentContext } from '../song-contexts/content-context.jsx';
import Track from '../components/Track.jsx';
import { PlayerContext } from '../song-contexts/player-context.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';

export default function PlaylistPage() {
    const { setPlaylistTracks,setContent,recentlyAdded, mostPlayed, localFiles, favourite } = useContext(ContentContext);
    const { playTrack } = useContext(PlayerContext);

    function openTracks(title,tracks,trackList){
        const selectedTrack = {title,tracks,trackList}
        setPlaylistTracks(selectedTrack);
        setContent(<PlaylistTracks/>);
    } 
    return (
        <>
            <Playlist>
                <PlaylistCard
                    key={"recentlyAdded"}
                    title={"Recently Added"}
                    tracks={recentlyAdded.length+" tracks"}
                    img={recentlyAdded[0].img}
                    handleOpenTracks={()=>openTracks("Recently Added",recentlyAdded.length,recentlyAdded)} />

                <PlaylistCard
                    key={"mostPlayed"}
                    title={"Most Played"}
                    tracks={mostPlayed.length+" tracks"}
                    img={mostPlayed[0].img}
                    handleOpenTracks={()=>openTracks("Most Played",mostPlayed.length,mostPlayed)} />

                <PlaylistCard
                    key={"favTracks"}
                    title={"Favourite Tracks"}
                    tracks={favourite.length+" tracks"}
                    img={favourite[0].img}
                    handleOpenTracks={()=> openTracks("Favourite Tracks",favourite.length,favourite)} />
            </Playlist>

            <ul>
                {
                    localFiles?.map(song => {
                        return (
                            <Track
                                key={song.title}
                                title={song.title}
                                img={song.img}
                                artists={song.artists}
                                src={song.src}
                                favourite={song.favourite}
                                artistMode={true}
                                handleClick={() => playTrack(song.title, song.artists, song.img, song.src,song.color)}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}