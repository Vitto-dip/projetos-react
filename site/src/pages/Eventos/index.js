import './index.scss'


import Tema from '../components/header/index.js'
import { useEffect, useState } from 'react'

export default function Evento_page() {
    const [linguagem, setLinguagem] = useState('');
    const [texto, setTexto] = useState('Olá, seja bem-vindo!');

    const [titulo, setTitulo] = useState(false);

    function textos() {
        if (texto === null) {
            return(setTitulo(false))
        }
        else if (linguagem === null) {
            return(setTitulo(true))
        }
    }


    return (
        <main>
            <Tema tema="Eventos" />

            <section className='evento-page'>
                <div className="info">

                    {titulo === false &&
                        <h2> {linguagem} </h2>
                    }

                    {titulo === true &&
                        <h2> {texto} </h2>
                    }

                    <input className='texto-input' type="text" placeholder='Digite aqui' onChange={e => setTexto(e.target.value)} />

                    <select className='selecionar' onChange={e => setLinguagem(e.target.value)}>
                        <option disabled selected hidden >Selecione</option>
                        <option value="JavaScript" >JavaScript</option>
                        <option value="CSharp" >CSharp</option>
                        <option value="Python" >Python</option>
                        <option value="TypeScript" >TypeScript</option>
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