import React from 'react';
import { Routes, Route} from "react-router-dom";

import { HeaderComponent } from './components/HeaderComponent';
import { SidebarComponent } from './components/SidebarComponent';
import { Ejemplo } from './paginas/Ejemplo';
import { Inicio } from './paginas/Inicio';


 export function App() {
  
    return (
      <>
      <HeaderComponent/>
      <div className="fluid-container">
        <div className="row">
          <div className="col-sm-2 p-0">
          <SidebarComponent/> 
          </div>
          <div className="col-sm-10 p-2" >
            <Routes>
              <Route path="Inicio" element={<Inicio />} />
              <Route path="Ejemplo" element={<Ejemplo />} />
            </Routes>
          </div>
        </div>
      </div>   
      </>     
    );
  }


export default App;
