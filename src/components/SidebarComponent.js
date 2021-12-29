import React from 'react';
import {Link} from 'react-router-dom';

import { Example } from './ModalComponent';





export const SidebarComponent = () => {
    return (
        <aside className= "w-25">
          
            <nav className="nav flex-column">
                <Link to="/Inicio">Inicio</Link>
                <Link to="/Ejemplo">Ejemplo</Link>
            </nav>
            <div>
            <Example/>
            
            </div>
      
        </aside>
    )
}