// 'use client';
import React, { useContext} from 'react'
import  Header  from '../components/Header';
import Nav from '../components/Nav'
import { Player } from '../components/Player'
import { ContentContext } from '../song-contexts/content-context';
import SearchModal from '../components/SearchModal';


export default function HomePage() {
  const {content} = useContext(ContentContext);
  return (
    <main className="w-auto h-auto">
        <Header title={'MUSIPIE'}>
        <h1></h1>
        </Header>
        
        <Nav />
        <SearchModal />
        <div className="justify-center items-center p-2 pb-16">
          {content}
        </div>
        <Player />
    </main>
  )
}
