import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Evento_page from './pages/Eventos/index.js'
import Variavel_estado_page from './pages/Variavel de Estado/index.js'
import Renderizacao_page from './pages/Renderização Condicional/index.js'
import Api_page from './pages/Api-page/index.js'
import Componente_page_1 from './pages/Componentes/Componentes 1/index.js'
import Componente_page_2 from './pages/Componentes/Componentes 2/index.js'
import Componente_page_props from './pages/Componentes/Props/index.js'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/evento_page' element={ <Evento_page />} />
                <Route path='/variavel_estado_page' element={ <Variavel_estado_page /> } />
                <Route path='/renderizacao_page' element={ <Renderizacao_page /> } />
                <Route path='/componente_page_1' element={ <Componente_page_1 /> } />
                <Route path='/componente_page_2' element={ <Componente_page_2 /> } />
                <Route path='/componente_page_props' element={ <Componente_page_props /> } />
                <Route path='/api_page' element={ <Api_page /> } />
            </Routes>
        </BrowserRouter>
    )
}