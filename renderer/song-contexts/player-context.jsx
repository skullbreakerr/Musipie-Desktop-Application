import { createContext, useState } from "react";
import DummyMusic from "../music/DummyMusic";
export const PlayerContext = createContext({
    currentAudioData: {},
    isPlaying: () => { },
    setIsPlaying: () => { },
})

export default function PlayerContextProvider({ children }) {

    const [isPlaying, setIsPlaying] = useState(true);
    const [currentAudioData, setCurrentAudioData] = useState({});
    const [queue, setQueue] = useState(DummyMusic);



    function handlePlayTrack(title, artists, img, src, color) {
        const updateCurrentAudio = {
            title: title,
            artists: artists,
            img: img,
            src: src,
            color: color
        }
        setCurrentAudioData(updateCurrentAudio);
        setIsPlaying(true);
    }
 
    
    function handleAddToQueue(song) {  //favourite,title,img,artists,src

        if (queue.length === 0) {
            setQueue(prev => prev.push(song));
        } else if (queue.length > 0) {
            setQueue(prevState => {
                return [...prevState, song]
            })
        }
    }
  
    function handleRemoveFromQueue(index) {
        const newQueue = [...queue];
        newQueue.splice(index, 1);
        setQueue(newQueue);
    }

    function handlePlayNext() {
        if (queue.length > 0) {
            const currentIndex = queue.findIndex(song => song.src === currentAudioData.src);
            if (currentIndex !== -1) {
                if (currentIndex < queue.length - 1) {
                    setCurrentAudioData(queue[currentIndex + 1]);
                } else {
                    setCurrentAudioData(queue[0]);
                    setIsPlaying(false);
                }
            }
        }
    }

    function handlePlayPrevious() {
        if (queue.length > 0) {
            const currentIndex = queue.findIndex(song => song.src === currentAudioData.src);
            if (currentIndex !== 1) {
                if (currentIndex < queue.length - 1) {
                    setCurrentAudioData(queue[currentIndex - 1]);
                } else {
                    setCurrentAudioData(queue[currentIndex]);
                    setIsPlaying(false);
                }
            }
        }
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleShuffle() {
        const shuffledQueue = shuffleArray([...DummyMusic]);
        handlePlayTrack(shuffledQueue[0].title, shuffledQueue[0].artists, shuffledQueue[0].img, shuffledQueue[0].src, shuffledQueue[0].color);
    }
    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const ctxValue = {
        currentAudioData: currentAudioData,
        isPlaying: isPlaying,
        setIsPlaying: setIsPlaying,
        playTrack: handlePlayTrack,
        playNext: handlePlayNext,
        playPrevious: handlePlayPrevious,
        addToQueue: handleAddToQueue,
        removeFromQueue:handleRemoveFromQueue,
        getDuration: formatTime,
        shuffleMusic: handleShuffle,
        queueList: queue,
    }

    return (
        <PlayerContext.Provider value={ctxValue}>
            {children}
        </PlayerContext.Provider>
    )
}