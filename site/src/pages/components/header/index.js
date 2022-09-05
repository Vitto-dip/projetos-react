import './index.scss'

export default function Tema(props) {
    return(
        <section className="titulos">
            <h1> Estudando ReactJS | {props.tema} </h1>
        </section>
    )
}