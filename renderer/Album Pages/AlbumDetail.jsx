import { useContext } from "react";
import { ContentContext } from "../song-contexts/content-context";
import AlbumPage from "./AlbumPage.jsx";
import { Tracks } from "../Tracks Pages/Tracks";
import Track from "../components/Track";
import { PlayerContext } from "../song-contexts/player-context";

function AlbumTracks() {
    const {setContent,albumContent,id} = useContext(ContentContext); 
    const {playTrack} = useContext(PlayerContext);
    const {key,tracks} = albumContent; 
    function handleClick(){
        switch(id){
            case "albumPage":
                setContent(<AlbumPage/>);
                break;
            default:
                setContent(<Tracks/>);
        }
    }
    return (
        <>
            <div className="flex items-center justify-start px-4 py-2 bg-gray-200">
                <button className="p-2" onClick={handleClick}>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
            </div>
            <section id="details-page">
                <div id="track-img">
                    {key==="Downloads" ?
                    <>
                    <img src={"https://www.clker.com/cliparts/6/c/1/4/1358105971891943396music_note1.jpg"} alt={key} className="w-3/4 h-auto mx-auto m-auto object-contain rounded-lg shadow-purple-400 shadow-xl" />
                    <div className="mt-4 px-4 text-center">
                        <h3 className="text-lg font-semibold">Downloads</h3>
                    </div>
                    </>
                    :
                    <>
                    <img src={tracks[0].img} alt={key} className="w-3/4 h-auto object-cover rounded-lg shadow-purple-400 shadow-xl" />
                    <div className="mt-4 px-4 text-center">
                        <h3 className="text-lg font-semibold">{tracks[0].title}</h3>
                        <p className="text-sm text-gray-600">{tracks[0].artists}</p>
                    </div>
                    </>
                    }
                </div>
                <div id="track-details"> 
                    <ul>
                    {tracks?.map(song=>{
                        return(
                            <Track
                            key={song.src}
                            title={song.title} 
                            artists={song.artists}
                            src={song.src}
                            handleClick={()=> playTrack(song.title, song.artists, song.img, song.src, song.color)} 
                            favourite={false}
                            dash={true}
                            />
                        )
                    })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AlbumTracks;