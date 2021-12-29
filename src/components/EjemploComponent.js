import React, { useEffect, useState } from 'react'
import { EjemploDatos } from './EjemploDatos';

export const EjemploComponent = () => {


    const[usuarios, setUsuarios]= useState([]);

    useEffect(() => {
        getDatos();
    }, [])

    const getDatos= async() =>{
        const url='https://jsonplaceholder.typicode.com/posts?userId=1'
        const resp = await fetch (url);
        const data  = await resp.json(); 

        const datos = data.map( dato =>{
            return{
                title: dato.title,
                id: dato.id,
                userid: dato.userId,
                body: dato.body
            }
        })
        
        //console.log(datos);
        setUsuarios(datos);
    }
   
    

   

    return (
        <div>
            {
                usuarios.map(dato =>(
                <EjemploDatos
                    key={dato.id}   
                    {...dato}
                />        
                ))
            }
    
            
        </div>
    )
}
