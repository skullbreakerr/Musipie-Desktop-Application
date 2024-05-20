import { createContext, useState, useEffect } from 'react';
import Favourite from '../Favourite Pages/Favourite';
import DummyMusic from "../music/DummyMusic";
// import { set } from 'firebase/database';
import { useRouter } from 'next/router';
import { Tracks } from '../Tracks Pages/Tracks';

export const ContentContext = createContext({
    openModel: () => { },
    openStatus: false,
    setOpen: () => { },
    content: <></>,
    setContent: () => { },
    localFiles: [],
    setPlaylistTracks: ()=>{},
    recentlyAdded:[],
    mostPlayed:[],
    favourite:[],
    addToFavourite:()=>{},
    playlistTracks:{},
})

export default function ContentProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mainContent, setMainContent] = useState(<Favourite />);
    const [id,setId]= useState("");
    const [localFiles, setLocalFiles] = useState(DummyMusic);
    const [recentlyAdded,setRecentlyAdded] = useState(DummyMusic.toSpliced(1,1));
    const [mostPlayed,setMostPlayed] = useState(DummyMusic.toSpliced(0,1));
    const [favourite,setFavourite] = useState([DummyMusic[0]]);
    const [playlistTracks,setPlaylistTracks] = useState({});
    const [trackDetails,setTrackDetails] = useState({}); 
    const [albumContent,setAlbumContent] = useState({});
    const [artistContent,setArtistContent] = useState({});
 
    function handleAddToFavourite(liked=false,title,img,artists,src,color){
        const newFavourite = {
            title,
            img,
            artists,
            src,
            favourite:liked,
            color,
        }
        setFavourite(prevState=>{
            prevState.map(item=>{
                if (item.title===newFavourite.title) {
                    return  [...prevState];
                }
             })    

            return [newFavourite,...prevState];
            
        });
    }

    const searchTracks = async (query) => {
        return new Promise((resolve) => {
            const results = localFiles.filter(track => {
                return track.title.toLowerCase().includes(query.toLowerCase()) || track.artists.toLowerCase().includes(query.toLowerCase());
            });
            resolve(results);
        });
    };

 

    const ctxValue = {
        isOpen,
        setOpen: setIsOpen,
        setContent: setMainContent,
        content: mainContent,
        localFiles: localFiles,
        setPlaylistTracks: setPlaylistTracks,
        recentlyAdded:recentlyAdded,
        mostPlayed:mostPlayed,
        favourite:favourite,
        addToFavourite:handleAddToFavourite,
        playlistTracks: playlistTracks,
        setTrackDetails: setTrackDetails,
        getTrackDetails:trackDetails,
        id:id,
        albumContent,
        setAlbumContent,
        setId:setId,
        setArtistContent,
        artistContent,
        searchTracks,   
    }

    return (
        <ContentContext.Provider value={ctxValue}>
            {children}
        </ContentContext.Provider>
    )
}