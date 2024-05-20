
const rootUrl = "https://ws.audioscrobbler.com/2.0/";
export const apiKey = "ad1241522befbf60cb755d0a8b7307fc";

export async function fetchPlaylist() {
  const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=3J8zEOrREv3Yeh1XsxiONf&offset=0&limit=30';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e58ae4e677msh67ac27498f030fep112f90jsnc9900e03913c',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  const playlist = result.items.map(item=>({
    title:item.track.name,
    artists:item.track.artists.map(art=>art.name),
    src:item.track.preview_url,
  }))
  return playlist ;
} catch (error) {
	console.error(error);
}
}
export async function fetchRandomPlaylists(searchQuery = "Lost Stories", small = false) {
  try {
    const url = `${rootUrl}?method=track.search&track=${encodeURIComponent(searchQuery)}&api_key=${apiKey}&format=json`
    const response = await fetch(url);
    const data = await response.json();
    const playlists = data.results.trackmatches.track.map(track => ({
      title: track.name,
      artists: track.artist,
      img: small ? track.image.find(image => image.size === 'small')['#text'] : track.image,
      src: track.url,
    }));
    return playlists;
  } catch (error) {
    console.error('Error fetching random playlists:', error);
    return [];
  }
}
