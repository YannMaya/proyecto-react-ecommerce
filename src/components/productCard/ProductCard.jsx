

const ProductCard = ({elemento}) => { /* siempre se me olvida poner esto entre corchetes */
    return (
        <div key={elemento.id}>
            <h2>{elemento.name}</h2>
            <h3>{elemento.price}</h3>
            <img src={elemento.img} alt="producto"/>
        </div>
    )
}

export default ProductCard;