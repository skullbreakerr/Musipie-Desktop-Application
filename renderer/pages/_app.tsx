import React from 'react'
import type { AppProps } from 'next/app'
import ContentProvider from '../song-contexts/content-context'
import '../styles/globals.css'
import PlayerContextProvider from '../song-contexts/player-context'
import SpotifyProvider from '../song-contexts/spotify-context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContentProvider>
      <SpotifyProvider>
        <PlayerContextProvider>
          <Component {...pageProps} />
        </PlayerContextProvider >
      </SpotifyProvider>
    </ContentProvider>
  )
}

export default MyApp;