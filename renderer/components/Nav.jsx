import React, { useContext } from 'react';
import { Button } from './Button';
import Spotify from '../Spotify Pages/Spotify';
import Favourite from '../Favourite Pages/Favourite';
import { Tracks } from '../Tracks Pages/Tracks';
import { ContentContext } from '../song-contexts/content-context';
import PlaylistPage from '../Playlist Pages/PlaylistPage';
import AlbumPage from '../Album Pages/AlbumPage.jsx';
import ArtistPage from '../Artists Pages/ArtistsPage.jsx';

const Nav = () => {

    const {setContent:setMainContent,setId} = useContext(ContentContext);

    function handleClick(id) {
        switch (id) {
            case "spotify":
                setMainContent(<Spotify />);
                setId("spotify");
                break;
            case "favourites":
                setMainContent(<Favourite />);
                setId("favourites");
                break;
            case "playlist":
                setMainContent(<PlaylistPage/>);
                setId("playlist");
                break;
            case "albums":
                setMainContent(<AlbumPage/>);
                setId("albums");
                break;
            case "artists":
                setMainContent(<ArtistPage/>);
                setId("artists");
                break;
            case "tracks":
                setMainContent(<Tracks />);
                setId("tracks");
                break;
            default:
                break;
        }
    }
    return (
        <nav>
            <ul >
                <Button onClick={() => handleClick("spotify")} >Spotify</Button>
                <Button onClick={() => handleClick("favourites")} >Favourites</Button>
                <Button onClick={() => handleClick("playlist")} >Playlists</Button>
                <Button onClick={() => handleClick("albums")} >Albums</Button>
                <Button onClick={() => handleClick("artists")} >Artists</Button>
                <Button onClick={() => handleClick("tracks")} >Tracks</Button>
            </ul>
        </nav>
    )
}

export default Nav;