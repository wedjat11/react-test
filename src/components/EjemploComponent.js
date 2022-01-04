import React, { useEffect, useState } from 'react'
import { EjemploDatos } from './EjemploDatos';


var _page = 1 ;
export const EjemploComponent = () => { 
    
    const[usuarios, setUsuarios]= useState([]);

    useEffect(() => {
        getDatos();
    },[])

    const getDatos= async() =>{
        var url=`https://jsonplaceholder.typicode.com/posts?_page=${_page}&_limit=20`;
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

    //btn_pag
    function nextPage(){
        if (_page<5){
            _page++;
            console.log(_page)
            getDatos();
        }
        else
        window.alert("No hay mas datos para mostrar") 

        
    }
    function backPage(){
        _page--;
        getDatos();
        
    }
    function restartPage(){
        _page = 0;
        getDatos();
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
            <div className='text-center p-sm-3'>
                <button onClick={nextPage} className=' rounded btn-primary me-2'>Siguiente</button>
                <button onClick={backPage} className=' rounded  me-2 '>Anterior</button>
                <button onClick={restartPage} className=' rounded btn-warning rounded'>Restart</button>

            </div>           
        </div>
    )
}
