import React from 'react'
import Button from 'react-bootstrap/Button'

import './HeaderComponent.css';

export const HeaderComponent = () => {
    return (
        <header className="headerblue d-flex justify-content-between px-3">
            <h5 className="text-light">Front-end Test</h5>
            <Button variant="outline-light" size ="sm" title="Cerrar Sesión">Cerrar Sesión</Button>{' '}  
        </header>        
    )
}
