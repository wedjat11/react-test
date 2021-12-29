import React from 'react'

export const EjemploDatos = ({id, userId, title, body}) => {
    //console.log(id, userId, title, body);
    return (
        <div className='w-75 mx-auto'>
            <div className="row align-items-center">
                <div className="col-sm-1">
                    <h4>{id}</h4>
                </div>
                <div className="col-sm">
                    <h4> {title} </h4>
                </div>
                <div className="col-sm-6">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}
