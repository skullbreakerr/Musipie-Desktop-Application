'use client';
import { useContext, useState, useEffect } from "react";
import { ContentContext } from "../song-contexts/content-context";
import PlaylistPage from "../Playlist Pages/PlaylistPage";
import { Tracks } from "../Tracks Pages/Tracks";
import Favourite from "../Favourite Pages/Favourite";
import { PlayerContext } from "../song-contexts/player-context";

export default function DetailsPage() {
    const [duration, setDuration] = useState(null);
    const { getTrackDetails, setContent, id } = useContext(ContentContext);
    const { getDuration } = useContext(PlayerContext);
    const { img, title, artists, src, path } = getTrackDetails;
    useEffect(() => {
        const audio = new Audio(src);

        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        return () => {
            audio.removeEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });
        };
    }, [src]);

    function handleClick() {
        switch (id) {
            case "playlist":
                setContent(<PlaylistPage />);
                break;
            case "tracks":
                setContent(<Tracks />);
                break;
            default:
                setContent(<Favourite />)
                break;
        }
    }

    return (
        <>
            <div className="flex items-center justify-start px-4 py-2 bg-gray-200">
                <button className="p-2" onClick={handleClick}>
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
                <h2 className="text-lg">Details</h2>
            </div>
            <section id="details-page">
                <div id="track-img">
                    <img src={img} alt={title} className="w-3/4 h-auto object-cover rounded-lg shadow-purple-400 shadow-xl" />
                    <div className="mt-4 px-4 text-center">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-gray-600">{artists}</p>
                    </div>
                </div>
                <div id="track-details">
                    <p>Title: <span >{title}</span></p>
                    <p>Artists: <span >{artists}</span></p>
                    <p>Path: <span >{path}</span></p>
                    <p>duration: <span >{getDuration(duration)}</span></p>
                </div>
            </section>
        </>
    )
}
