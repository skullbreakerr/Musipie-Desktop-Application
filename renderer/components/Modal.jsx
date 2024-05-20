import React, { useEffect, useRef } from 'react';

export const Modal = ({ isOpen,children }) => {
    const dialog = useRef();
    useEffect(()=>{
        if (isOpen) {
            dialog.current.showModal()
        }

    },[isOpen]);

    function handleClose(e){
        e.preventDefault();
        dialog.current.close();
    }

    return (
        <dialog ref={dialog} className='p-3 bg-slate-200 rounded-lg shadow-lg h-max w-max'>
            {children}
            <form>
                <button onClick={handleClose} className='py-1 px-2 rounded-lg bg-purple-400'>Close</button>
            </form>
        </dialog>
    )
}
