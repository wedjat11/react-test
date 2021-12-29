import React from 'react'
import Logo from '../logo.png'
import { Container } from 'react-bootstrap'

export const Inicio = () => {
    return (
        <div className='text-center'>
            <Container fluid>
                <img  src={Logo} alt="fireSpot" className="logo"/>
                <h1>Te damos la bienvenida!!</h1>
            </Container>
        </div>
    )
}
