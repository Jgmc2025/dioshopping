import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import { Link } from 'react-router-dom';
import { AddCircleOutline, CloseOutlined, DeleteOutline, RemoveCircleOutline, ShoppingCartOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    let totalPrice = 0;

    for(let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if(cart.value > 0){
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
    }

    return(
        <>
            <Button color="black" data-bs-toggle="modal" data-bs-target="#CartModal" style={{ marginRight: '20px' }}>
                <ShoppingCartOutlined style={{ marginRight: '5px' }}/>
                Carrinho
                <span style={{position: "absolute", right: "-18px", top: "-5px", borderRadius: "50%", background: "blue", color: "white", width: "23px"}}>{cart.value}</span>
            </Button>

            {/* Modal */}
            <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                        <button type="button" data-bs-dismiss="modal" style={{border: "none", background: "none"}}>
                            <CloseOutlined/>
                        </button>
                    </div>

                    <div className="modal-body table-responsive">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Produto</th>
                            <th scope="col">Qtd</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.Cart.map( item =>{
                                return(
                                    <tr key={item.id}>
                                        <th><button onClick={()=>dispatch(cartActions.DeleteItem(cart, item))} style={{border: "none", background: "none"}}><DeleteOutline/></button></th>
                                        <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px"/></th>
                                        <th><span className="badge badge-pill" style={{background: "blue"}}>
                                            {item.quantity}
                                        </span></th>
                                        <th>R$ {item.price.toFixed(2)}</th>
                                        <th><button onClick={()=>dispatch(cartActions.AddItem(cart, item))} style={{border: "none", background: "none", color: "blue"}}><AddCircleOutline/></button></th>
                                        <th><button onClick={()=>dispatch(cartActions.RemoveItem(cart, item))} style={{border: "none", background: "none", color: "red"}}><RemoveCircleOutline/></button></th>
                                        <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                                    </tr>
                                )
                            })}
                            <tr>
                            <th colSpan="2" scope="col">Total</th>
                            <th colSpan="3">{cart.value} itens</th>
                            <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                            </tr>
                        </tbody>
                        </table>
                        </div>

                    <div className="modal-footer" justify="space-between">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <Link to="/pagamento" className="btn btn-primary" data-bs-dismiss="modal">Comprar</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
