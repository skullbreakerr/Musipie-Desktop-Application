import { useContext } from "react"
import { ContentContext } from "../song-contexts/content-context"
import Track from "../components/Track";
import ArtistTrack from "../Artists Pages/ArtistTrack.jsx";
export default function ArtistsPage(){
    const {localFiles,setArtistContent,setContent} = useContext(ContentContext);

    function openArtistTrack(key,track){
        let artistData = {key,tracks:[track]};
        setArtistContent(artistData);
        setContent(<ArtistTrack/>);
    }
    return(
        <>
            <ul>
                {localFiles?.map(track=>{
                    return(
                        <Track
                         key={track.src}
                         title={track.artists}
                         img={track.img}
                         artists={"1 Track | 1 Album"}
                         src={track.src}
                         handleClick={()=> openArtistTrack(track.artists,track)}
                        />
                    )
                })}
            </ul>
        </>
    )
}
