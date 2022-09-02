import { BrowserRouter, Routes, Route } from 'react-dom'

import Evento_page from './pages/Eventos'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/evento_page' element={ <Evento_page />} />
            </Routes>
        </BrowserRouter>
    )
}