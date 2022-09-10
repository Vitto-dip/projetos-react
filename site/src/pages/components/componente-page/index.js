import './index.scss'

export default function Cubinhos(props) {
    return(
        <div className={props.alinhamento}>
            <h2> {props.secao} </h2>
            <div className="container-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
                <img src="/assets/images/telinha.png" alt="" />
            </div>
        </div>
    )
}