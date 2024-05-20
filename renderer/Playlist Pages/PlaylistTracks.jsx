import React, { useContext } from 'react';
import Track from '../components/Track';
import { PlayerContext } from '../song-contexts/player-context';
import { ContentContext } from '../song-contexts/content-context';
import PlaylistPage from './PlaylistPage';

function PlaylistTrackPage() {
    const { playTrack } = useContext(PlayerContext);
    const { playlistTracks,setContent } = useContext(ContentContext);

    function handleClick(){
        setContent(<PlaylistPage/>);
    }

    return (
        <>
            <div className=' flex w-full h-auto items-center justify-start gap-4 mb-5'>
                <button className='ml-2'><span onClick={handleClick} className="cursor-pointer material-symbols-outlined">
                    arrow_back_ios
                </span>
                </button>
                <h2 className='text-lg'>{playlistTracks.title}<span>({playlistTracks.tracks} tracks)</span></h2>
            </div>
            <ul>
                {
                    playlistTracks.trackList.map(song => {
                        return (
                            <Track
                                key={song.title}
                                title={song.title}
                                img={song.img}
                                artists={song.artists}
                                src={song.src}
                                favourite ={song.favourite}
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

export default PlaylistTrackPage;