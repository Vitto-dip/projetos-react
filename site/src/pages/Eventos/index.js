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
                        <option value="0" disabled selected hidden >Selecione</option>
                        <option value="1" >JavaScript</option>
                        <option value="2" >CSharp</option>
                        <option value="3" >Python</option>
                        <option value="4" >TypeScript</option>
                    </select>

                    <div>
                        <div className="input-box">
                            <input type="checkbox" /><label>Opção 1</label>
                            <input type="checkbox" /><label>Opção 2</label>
                        </div>

                        <div className="input-box">
                            <input type="checkbox" /><label>Opção 1</label>
                            <input type="checkbox" /><label>Opção 2</label>
                        </div>
                    </div>

                    <button>Okay</button>

                </div>
            </section>
            
        </main>
    )
}