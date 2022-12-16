/* import style from "./Item.module.css"  *//* styles va a ser un objeto */
import { Link } from "react-router-dom";
import {Typography, Card, CardActions, CardContent, CardMedia, Button} from "@mui/material"

const Item = ({ elemento }) => { /* siempre se me olvida poner esto entre corchetes */
    return (
        
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image={elemento.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                {elemento.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ${elemento.price}
                </Typography>
                {elemento.description}
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Agregar al carrito</Button>
                <Button as={Link} to={`/itemDetail/${elemento.id}`} size="small" variant="contained">Ver más</Button>
            </CardActions>
        </Card>
    );
}

export default Item;

/* <div className={style.card}>
            <h2></h2>
            <h3>$</h3>
            <img src= alt="producto" className={style.imgCard}/>
            <Link }>Ver detalles</Link>
        </div> */