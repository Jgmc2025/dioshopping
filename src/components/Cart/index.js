import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import { Link } from 'react-router-dom';
import { DeleteOutline, ShoppingCartOutlined } from '@material-ui/icons';
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
            <Button color="black" data-bs-toggle="modal" data-bs-target="#CartModal">
                <ShoppingCartOutlined/>
                Carrinho
            </Button>

            {/* Modal */}
            <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
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
                                        <th><button onClick={()=>dispatch(cartActions.DeleteItem(cart, item))}><DeleteOutline/></button></th>
                                        <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px"/></th>
                                        <th><span className="badge badge-pill bg-warning">
                                            {item.quantity}
                                        </span></th>
                                        <th>R$ {item.price.toFixed(2)}</th>
                                        <th><button onClick={()=>dispatch(cartActions.AddItem(cart, item))} className="badge badge-pill bg-primary"><i className="fas fa-plus"></i></button></th>
                                        <th><button onClick={()=>dispatch(cartActions.RemoveItem(cart, item))} className="badge badge-pill bg-danger"><i className="fas fa-minus"></i></button></th>
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
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <Link to="/pagamento" className="btn btn-secondary" data-bs-dismiss="modal">Comprar</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
