
const ProductCard = ({elemento}) => {
    return (
        <div> {/* la propiedad unica key tiene que ir en la etiqueta mas alta */}
            <h2>{elemento.name}</h2>
            <h3>${elemento.price}</h3>
        </div>
    );
};

export default ProductCard;