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
        <SidebarComponent/>
        <Routes>
          <Route path="Inicio" element={<Inicio />} />
          <Route path="Ejemplo" element={<Ejemplo />} />
        </Routes>
       
      </>
      
      
      
    );
  }


export default App;
