import React, { useContext } from 'react';
import Track from '../components/Track';
import { ContentContext } from '../song-contexts/content-context';
import { PlayerContext } from '../song-contexts/player-context';
export const Tracks = () => {
    const { localFiles } = useContext(ContentContext);
    const { playTrack } = useContext(PlayerContext)
    return (
        <div className="h-full w-full text-center justify-center bg-transparent">
            <ul className=" p-2 gap-3">
                {localFiles?.map((item, index) => {
                    return (

                        <Track
                            key={index}
                            title={item.title}
                            artists={item.artists}
                            img={item.img}
                            src={item.src}
                            favourite={item.favourite}
                            artistMode={true}
                            handleClick={()=>playTrack(item.title,item.artists,item.img,item.src, item.color)}
                        />

                    )
                })}
            </ul>
        </div>
    )
}
