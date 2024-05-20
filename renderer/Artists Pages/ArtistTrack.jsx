'use client';
import { useContext, useState } from "react";
import { ContentContext } from '../song-contexts/content-context';
import ArtistsPage from "./ArtistsPage.jsx";
import TrackItem from '../components/TrackItem.jsx';
import AlbumItem from '../components/AlbumItem.jsx';

function ArtistTrack() {
    const { artistContent, setContent} = useContext(ContentContext);
    const { key, tracks } = artistContent
    const [tracksContent,setTracksContent] = useState(<TrackItem tracks={tracks}/>);
 
    function handleClick() {
        setContent(<ArtistsPage />)
    }


    return (
        <>
            <div className="flex items-center justify-start px-4 py-2 bg-gray-200">
                <button className="p-2" onClick={handleClick}>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
                <h2 className="text-lg">{key}</h2>
            </div>
            <div className="flex w-full h-4">
                <button className="w-full  h-auto p-2  text-center rounded-md  hover:bg-slate-200" onClick={()=> setTracksContent(<TrackItem tracks={tracks}/>)}>Track</button>
                <button className="w-full  h-auto p-2  text-center rounded-md hover:bg-slate-200" onClick={()=> setTracksContent(<AlbumItem item={tracks}/>)}>Album</button>
            </div>
            <div>
                {tracksContent}
            </div>
        </>
    )
}

export default ArtistTrack;