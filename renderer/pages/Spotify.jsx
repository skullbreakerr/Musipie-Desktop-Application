import React, { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../song-contexts/spotify-context.jsx';
import Playlist from '../components/Playlist.jsx';
import { fetchPlaylist } from '../spotifyApi/api.js';
import { PlayerContext } from '../song-contexts/player-context.jsx';
import Song from '../components/Song.jsx';

const Spotify = () => {
    const { token, login: handleClick, tokenParser } = useContext(SpotifyContext);
    useEffect(() => {
        const hash = new URLSearchParams(window.location.search);
        const token = hash.get('token');
        tokenParser(token);
    }, []);
    return (
        <div className='h-full w-full'>
            {token ? <SpotifyContent /> : <button className='h-12 w-fit rounded-[3vh] bg-green-500 text-black py-2 px-3' onClick={handleClick}>Login to Spotify</button>}
        </div>
    )
}


function SpotifyContent() {
    const { token } = useContext(SpotifyContext);
    const { playTrack: handlePlayTrack } = useContext(PlayerContext);
    const [randomPlaylists, setRandomPlaylists] = useState([]);

    useEffect(() => {
        async function fetchRandom() {
            const playlists = await fetchPlaylist();
            setRandomPlaylists(playlists);
        }
        fetchRandom();
    }, [token]);
    return (
        <>
            <div className='h-full w-full bg-slate-200'>Spotify Here....</div>
            <Playlist >
                {randomPlaylists.map((playlist, index) => (
                     
                    <Song
                        key={index}
                        title={playlist.title}
                        artists={playlist.artists}
                        img={playlist.img}
                        src={playlist.src}
                        handlePlayTrack={handlePlayTrack}
                    />
                ))}
            </Playlist>
        </>
    )
}

export default Spotify;