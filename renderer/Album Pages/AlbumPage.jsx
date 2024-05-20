import { useContext } from "react"
import { ContentContext } from '../song-contexts/content-context.jsx';
import Playlist,{PlaylistCard } from '../components/Playlist.jsx';
import  AlbumTracks  from '../Album Pages/AlbumDetail.jsx';

function AlbumPage() {
  const { setContent, setAlbumContent, setId, localFiles} = useContext(ContentContext);

  function openAlbum(key, album) {
    setId("albumPage");
    if (key==="Downloads") {
      let albumContent = { key, tracks:[...album]};
      setAlbumContent(albumContent);
      setContent(<AlbumTracks />);
    }else{
      let albumContent = {key,tracks:[album]};
      setAlbumContent(albumContent);
      setContent(<AlbumTracks />);
    }
  }

  return (
    <>
      <Playlist>
        {localFiles?.map(item => {
          return (
            <PlaylistCard
              key={item.title}
              title={item.title}
              tracks={item.artists}
              img={item.img}
              handleOpenTracks={() => openAlbum(item.title, item)} />
          )
        })}

        <PlaylistCard
          key={"Downloads"}
          title={"Downloads"}
          tracks={""}
          handleOpenTracks={()=> openAlbum("Downloads",localFiles)}
        />
      </Playlist>
    </>
  );
}

export default AlbumPage;