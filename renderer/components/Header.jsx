import React,{useContext, useState}  from 'react';
import { ContentContext } from '../song-contexts/content-context';
const Header = ({ title, children }) => {
    const { setOpen } = useContext(ContentContext);
    const handleSearchIconClick = () => {
        setOpen(prev=>!prev);
    };

    return (
        <>
            <div className='flex bg-slate-100 py-3  px-1 mt-0 justify-between'>
                <h1 className=' flex gap-2 justify-center items-center text-2xl text-black   bg-slate-100'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/skull-candy-48fae.appspot.com/o/logo.png?alt=media&token=e28cd3c6-39e4-4f4d-b07f-8b8824d173df' className='h-12 w-12  pb-2 object-contain' />
 
                    {title}
                </h1>
                {children}
                <div className=' flex  gap-4 '>
                     
                    <p>
                        <button onClick={handleSearchIconClick}><span className="material-symbols-outlined">search</span>
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header;