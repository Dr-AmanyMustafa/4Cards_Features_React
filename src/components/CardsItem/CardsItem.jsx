import "./CardsItem.css"
function CardsItem(props){

    if (props.color == "cyan") {
        return (
            <>
        <section className="cyan">
            <span id="card_title">{props.CardsTitle}</span>
            <p id="card_paragraph">{props.CardsDescription}</p>
            <img id="card_img" src={props.CardsImg} />
        </section>            
            </>
        )
        } else if (props.color == "red"){
            return <section className="red">
            <span id="card_title">{props.CardsTitle}</span>
            <p id="card_paragraph">{props.CardsDescription}</p>
            <img id="card_img" src={props.CardsImg} />
        </section>
        }        
    else if (props.color == "orange"){
        return <section className="orange">
        <span id="card_title">{props.CardsTitle}</span>
        <p id="card_paragraph">{props.CardsDescription}</p>
        <img id="card_img" src={props.CardsImg} />
    </section>
    } else {
        return <section className="blue">
        <span id="card_title">{props.CardsTitle}</span>
        <p id="card_paragraph">{props.CardsDescription}</p>
        <img id="card_img" src={props.CardsImg} />
    </section>
    }
}

export default CardsItem