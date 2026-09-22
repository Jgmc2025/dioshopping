import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cartActions from './store/actions/cart';

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleComprar = () => {
        navigate('/pagamento', { state: { produtoAvulso: product } });
    }

    return(
        <Grid item xs={3} style={{border: "1px solid", textAlign: "center", borderRadius: "10px", 
            boxSizing: "border-box", boxShadow: "0px 1px 8px rgba(0,0,0,0.08)", borderColor: "#ddd",}}>
            <Grid container direction='column'>
                <Grid item>
                <img width="140px" src={product.image} alt={product.name_product}/>
                <Typography variant='h6'>
                    {children}
                </Typography>
                <Typography variant='subtitle1'>
                    R$ {product.price.toFixed(2)}
                </Typography>
                </Grid>

                <div style={{padding: "10px"}}>
                    <Button 
                        variant="contained"
                        onClick={handleComprar}
                        style={{marginRight: '5px', background: "#FFD9B3", color: "#FF7A00"}}
                    >
                        Comprar
                    </Button>
                    <Button 
                        variant="contained"
                        className="text-white"
                        style={{background: "#FF7A00"}}
                        onClick={()=>dispatch(cartActions.Add(cart, product))}
                    >
                        Adicionar
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Card;