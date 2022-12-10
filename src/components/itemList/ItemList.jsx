import Item from "../item/Item"
import "./ItemList.css"

const ItemList = ({ items }) => {
    return (
        <div className="container-cards">
            {items.map((elemento) => {
                return <Item key={elemento.id} elemento={elemento} />
            })}
        </div>
    )
}

export default ItemList