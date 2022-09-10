import './index.scss'

import Tema from '../../components/header/index.js'
import Cubinhos from '../../components/componente-page'


export default function Componente_page_1() {
    return(
        <main>
            <Tema tema="Componentes"/>
            <section className="page_componente_1">

                <Cubinhos alinhamento="alinhamento-1" secao="Seção 1" />

                <Cubinhos alinhamento="alinhamento-2" secao="Seção 2" />

                <Cubinhos alinhamento="alinhamento-3" secao="Seção 3" />

            </section>
        </main>
    )
}