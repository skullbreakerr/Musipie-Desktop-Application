'use client';
import React, { useContext, useState } from 'react';
import { Modal } from './Modal';
import { ContentContext } from '../song-contexts/content-context';
import Track from './Track';
import { fetchRandomPlaylists } from '../spotifyApi/api';
import { SpotifyContext } from '../song-contexts/spotify-context';
import { PlayerContext } from '../song-contexts/player-context';

function SearchModal() {
    const { isOpen, searchTracks } = useContext(ContentContext);
    const {playTrack} = useContext(PlayerContext);
    const { token } = useContext(SpotifyContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchId, setSearchId] = useState("");
    const handleSearch = async (id) => {
        setSearchId(id);     
        if (id == "localSearch") {
            if (searchQuery.trim() !== '') {
                const data = await searchTracks(searchQuery);
                setSearchResults(data);
            }
        }
        if(id=="spotifySearch"){
            
            if (searchQuery.trim() !== '') {
                if (token) {
                    const playlists = await fetchRandomPlaylists(searchQuery, true);
                    setSearchResults(playlists);
                }
            }
        }
    };

    function handlePlay(track){
        if(searchId=="spotifySearch"){
           return window.location.href=track.src;
        }
        return playTrack(track.title, track.artists, track.img, track.src, track.color);
    }

    return (
        <Modal isOpen={isOpen}>
            <div className='w-96'>
                <h4 className="text-center bg-transparent font-bold mb-4">Search for Tracks</h4>
                <div className="flex justify-center mb-4">
                    <input
                        className="w-full max-w-md p-2 border border-gray-300 rounded"
                        placeholder="Search for a track..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className="ml-2 py-2 px-4 bg-slate-100 text-white rounded hover:bg-slate-200"
                        onClick={()=>handleSearch("localSearch")}
                        disabled={isLoading}
                    >
                        Search
                    </button>
                </div>
                <div className="flex justify-between mb-4">
                    <button
                        className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-white rounded"
                        onClick={() => handleSearch("localSearch")}
                    >
                        Local Music
                    </button>
                    <button
                        className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-white rounded"
                        onClick={() => handleSearch("spotifySearch")}
                    >
                        Spotify
                    </button>
                </div>
                <ul className="overflow-y-auto max-h-96">
                    {searchResults.map((track, index) => (
                        <Track
                            key={index}
                            title={track.title}
                            artists={track.artists}
                            src={track.src}
                            img={track.img}
                            handleClick={() => handlePlay(track)}
                            option={false}
                        />
                    ))}
                </ul>
            </div>
        </Modal>
    );
}

export default SearchModal;
