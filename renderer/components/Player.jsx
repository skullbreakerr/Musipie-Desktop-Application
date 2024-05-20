'use client';
import { ContentContext } from '../song-contexts/content-context';
import { PlayerContext } from '../song-contexts/player-context';
import React, { useContext, useEffect, useRef, useState } from 'react'

export const Player = () => {
    const audioPlayer = useRef();
    const { currentAudioData, isPlaying, setIsPlaying, playNext, getDuration, playPrevious, shuffleMusic, queueList, removeFromQueue } = useContext(PlayerContext);
    const { addToFavourite } = useContext(ContentContext);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [displayDuration, setDisplayDuration] = useState(false);
    const [showQueue, setShowQueue] = useState(false);

    let playerColor = (currentAudioData.color ? "bg-" + currentAudioData.color : "bg-red-300");

    useEffect(() => {
        if (audioPlayer.current) {
            if (isPlaying) {
                audioPlayer.current.play();
            } else {
                audioPlayer.current.pause();
            }
        }
    }, [isPlaying]);


    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.addEventListener('timeupdate', handleTimeUpdate);
            audioPlayer.current.addEventListener('loadedmetadata', () => {
                setDuration(audioPlayer.current.duration);
            });

            return () => {
                audioPlayer.current.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [currentAudioData]);

    const handleTimeUpdate = () => {
        if (!isDragging) {
            setCurrentTime(audioPlayer.current.currentTime);
        }
    };

    const progressBarWidth = (currentTime / duration) * 100 + '%';

    function handlePlay() {
        setIsPlaying(prevState => !prevState);
    }


    function handleAddToFavourite() {

        addToFavourite(!currentAudioData.favourite, currentAudioData.title, currentAudioData.img, currentAudioData.artists, currentAudioData.src, currentAudioData.color)
    }

    function handlePlayPrevious() {
        playPrevious();
    }

    function handlePlayNext() {
        playNext();

    }
    function handleDisplayDuration(e) {
        setDisplayDuration(prev => !prev);
        setTimeout(() => {
            setDisplayDuration(prev => !prev);
        }, 2500);
    }

    function handleOpenQueue() {
        setShowQueue(prev => !prev);
    }

    function handleShuffle() {
        shuffleMusic();
    }

    function handleDragStart() {
        setIsDragging(true);
    }

    function handleDragEnd() {
        setIsDragging(false);
    }

    function handleDrag(event) {
        if (isDragging) {
            const clickedPosition = event.clientX - event.target.offsetLeft;
            const progressBarWidth = event.target.clientWidth;
            const newTime = (clickedPosition / progressBarWidth) * duration;
            audioPlayer.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }



    return (
        <div className="fixed bottom-3 bg-slate-100 left-2 right-2  shadow-md p-4  rounded-[7vh] h-[9.5%]">
            <div className=" fixed bottom-3 left-2 right-2  shadow-md p-4  items-center justify-between flex rounded-[7vh] h-[9.5%]"
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseMove={handleDrag}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
                onTouchMove={handleDrag}
            >
                <div onMouseOver={handleDisplayDuration} className={`z-[-1] fixed ${playerColor}  bottom-3  left-2 right-2 overflow-hidden shadow-md p-4 rounded-[7vh] h-[9.5%]`} style={{ width: progressBarWidth }}></div>
                <audio
                    ref={audioPlayer}
                    src={currentAudioData.src}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handlePlayNext}
                    autoPlay
                />
                <div className="flex  gap-4" >
                    <img className="w-11 h-11 my-1 ml-[-8px] rounded-[5vh] object-cover" src={currentAudioData.img} alt={currentAudioData.title} />

                    <div className='items-center'>
                        <h3 className="text-lg font-semibold">{currentAudioData.title}</h3>
                        <p className="text-sm text-gray-500">{currentAudioData.artists}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 z-[2]">
                    <button className={`${currentAudioData.favourite ? "text-red-500" : "text-gray-500"} hover:text-gray-800`} onClick={handleAddToFavourite}>
                        {/* Like button */}
                        {currentAudioData.favourite ?
                            <span class="material-icons">
                                favorite
                            </span>
                            :
                            <span className='material-symbols-outlined'>
                                favorite
                            </span>
                        }
                    </button>
                    <button className="text-gray-500 hover:text-gray-800" onClick={handlePlayPrevious}>
                        {/* Prev Song */}
                        <span className="material-symbols-outlined">
                            fast_rewind
                        </span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-800" onClick={handlePlay}>
                        {/* Play Circle */}
                        {isPlaying ?

                            <span className="material-symbols-outlined">pause</span>
                            :
                            <span className="material-symbols-outlined">play_arrow</span>
                        }
                    </button>
                    <button className="text-gray-500 hover:text-gray-800" onClick={handlePlayNext}>
                        {/* Fast Forward */}
                        <span className="material-symbols-outlined">
                            fast_forward
                        </span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-800" onClick={handleShuffle}>
                        {/* Shuffle */}
                        <span className="material-symbols-outlined">
                            shuffle
                        </span>
                    </button>
                    <button className="text-gray-500 hover:text-gray-800" onClick={handleOpenQueue}>
                        {/* Song Queue */}
                        <span className="material-symbols-outlined">
                            queue_music
                        </span>
                    </button>
                </div>
                {showQueue && (
                    <div className="absolute right-2 bottom-14 z-10 w-64 bg-slate-100 rounded-lg p-4">
                        <h2 className="text-xl font-bold mb-4">Queue</h2>
                        {queueList.map((song, index) => (
                            <div key={index} className="flex justify-between items-center mb-2 p-1 rounded-md hover:bg-slate-200">
                                <span className="text-sm">{song.title} - {song.artists}</span>
                                <button className="text-sm text-red-500" onClick={() => removeFromQueue(index)}><span class="material-symbols-outlined">
                                    remove
                                </span></button>
                            </div>
                        ))}
                    </div>
                )}


                {(currentTime !== null && displayDuration) && (
                    <div className=" flex w-full absolute bottom-14  justify-between">
                        <p className='left-1 text-white px-2 py-1 rounded'>{getDuration(currentTime)}</p>
                        <p className='right-1 text-white px-2 py-1 rounded'>{getDuration(audioPlayer.current.duration)}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
