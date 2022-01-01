import React from 'react';
import {Link} from 'react-router-dom';

import { Example } from './ModalComponent';





export const SidebarComponent = () => {
    return (
          <>
            <nav className="nav flex-column ps-0 sidebar text-center">
                <Link to="/Inicio" className='p-3 link_nav'>Inicio</Link>
                <Link to="/Ejemplo" className='p-3 pb-4 link_nav'>Ejemplo</Link>
                <Example/>  
            </nav>        
        </>
    )
}