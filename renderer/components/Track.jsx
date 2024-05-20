import React, { useContext, useState } from 'react';
import { ContentContext } from '../song-contexts/content-context';
import DetailsPage from '../Details Page/DetailsPage';
import { PlayerContext } from '../song-contexts/player-context';
import AlbumTracks from '../Album Pages/AlbumDetail';
import ArtistTrack from '../Artists Pages/ArtistTrack';
export default function Track({ title, artists, img = "https://www.clker.com/cliparts/6/c/1/4/1358105971891943396music_note1.jpg", src, handleClick, favourite, dash = false, artistMode = false, option = true }) {
    const [showOptions, setShowOptions] = useState(false);
    const { addToQueue } = useContext(PlayerContext);
    const { setContent, addToFavourite, setTrackDetails, setAlbumContent, setArtistContent } = useContext(ContentContext);
    let track = {
        title,
        artists,
        img,
        src,
    }
    function handleDisplayOption(event) {
        event.stopPropagation(); // Prevent parent onClick from being triggered
        setShowOptions(prev => !prev);
        setTimeout(() => { setShowOptions(prev => !prev) }, 4000);
    }

    function handleOptionClick(option) {
        switch (option) {
            case "Details":
                const trackDetails = {
                    title,
                    img,
                    artists,
                    src,
                    path: "home/Downloads"
                }
                setTrackDetails(trackDetails);
                setContent(<DetailsPage />);
                break;
            case "Add to Queue":
                addToQueue({ favourite, title, img, artists, src });
                break;
            case "Add to Favorite":
                addToFavourite(!favourite, title, img, artists, src)
                break;
            case 'Album':

                const albumTrack = {
                    key: title,
                    tracks: [track]
                }
                setAlbumContent(albumTrack);
                setContent(<AlbumTracks />);
                break;
            case 'Artist':
                let artistData = {
                    key: title,
                    tracks: [track]
                };
                setArtistContent(artistData);
                setContent(<ArtistTrack />);
                break;
            default:
                break;
        }
    }

    return (
        <li>
            <div className="relative">
                <button className="w-full h-auto  flex items-center justify-between p-2  mt-2 rounded-lg hover:bg-slate-100" onClick={handleClick}>
                    {dash ? <span>-</span> : <img src={img} className="h-20 w-20 rounded-md" alt={title} />}
                    <div className="flex-col">
                        <h3 className="text-xl">{title}</h3>
                        <p className="font-extralight">{artists}</p>
                    </div>
                    {
                        option
                            ?
                            <button onClick={handleDisplayOption}>
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                            :
                            ""
                    }
                </button>
                {showOptions && (
                    <div className="absolute z-[1] top-full right-0 mt-auto bg-slate-100 rounded-md shadow-lg">
                        <button className="block w-full py-2 px-4 text-left hover:bg-slate-200" onClick={() => handleOptionClick('Add to Favorite')}>Add to Favorite</button>
                        <button className="block w-full py-2 px-4 text-left hover:bg-slate-200" onClick={() => handleOptionClick('Add to Queue')}>Add to Queue</button>
                        <button className="block w-full py-2 px-4 text-left hover:bg-slate-200" onClick={() => handleOptionClick('Details')}>Details</button>
                        {artistMode ?
                            <>
                                <button className="block w-full py-2 px-4 text-left hover:bg-slate-200" onClick={() => handleOptionClick('Album')}>Album</button>
                                <button className="block w-full py-2 px-4 text-left hover:bg-slate-200" onClick={() => handleOptionClick('Artist')}>Artist</button>
                            </>
                            :
                            ""
                        }
                    </div>
                )}
            </div>
        </li>
    );
}
