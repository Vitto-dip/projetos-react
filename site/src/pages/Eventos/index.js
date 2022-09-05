import './index.scss'


import Tema from '../components/header/index.js'

export default function Evento_page() {
    return (
        <main>
            <Tema tema="Eventos" />

            <section className='evento-page'>
                <div className="info">

                    <h2>Olá, seja bem-vindo!</h2>

                    <input className='texto-input' type="text" placeholder='Digite aqui' />

                    <select className='selecionar'>
                        <option value="Selecione" >Selecione</option>
                        <option value="Selecione" >Selecione</option>
                        <option value="Selecione" >Selecione</option>
                    </select>

                    <div>
                        <input type="checkbox" /><label>Opção 1</label>
                        <input type="checkbox" /><label>Opção 2</label>
                    </div>

                    <div>
                        <input type="checkbox" /><label>Opção 1</label>
                        <input type="checkbox" /><label>Opção 2</label>
                    </div>

                    <button>Okay</button>

                </div>
            </section>
            
        </main>
    )
}