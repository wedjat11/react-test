import React from 'react'
import Logo from '../assets/img/logo.png'
import { Container } from 'react-bootstrap'

export const Inicio = () => {
    return (
        <div className='text-center mt-md-4'>
            <Container fluid>
                <img  src={Logo} alt="Logo_bienvenida" className="logo"/>
                <h1>Te damos la bienvenida!!</h1>
            </Container>
        </div>
    )
}
