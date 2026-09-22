import React from 'react';
import { useState } from 'react';
import { Button, TextField, Typography } from "@material-ui/core";
import { CreditCardOutlined, LockOutlined, CheckCircleOutline, AddAlertOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import cartActions from "../components/store/actions/cart"

const cores = {
    principal: "#FF7A00",
    claro: "#FF9B3D",
    escuro: "#E56E00",
    fundoSuave: "#FFD9B3"
}

const Pagamentos = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const produtoAvulso = location.state?.produtoAvulso;

    const [numeroCartao] = useState('4532 0151 2345 6789');
    const [nomeCartao] = useState('JOAO DA SILVA');
    const [validade] = useState('12/28');
    const [cvv] = useState('123');
    const [processando, setProcessando] = useState(false);
    const [pagamentoConcluido, setPagamentoConcluido] = useState(false);

    let totalPrice = 0;
    let quantidadeItens = 0;

    if (produtoAvulso) {
        totalPrice = produtoAvulso.price;
        quantidadeItens = 1;
    } else {
        for(let i = 0; i < cart.Cart.length; i++) {
            totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
        }
        quantidadeItens = cart.value;
    }

    const handlePagamento = () => {
        setProcessando(true);

        console.log('Pagamento simulado com:', { numeroCartao, nomeCartao, validade, cvv, totalPrice });

        setTimeout(() => {
            setProcessando(false);
            setPagamentoConcluido(true);

            const historicoAtual = JSON.parse(localStorage.getItem('dioshopping: historico')) || [];
            const novoPagamento = {
                id: Date.now(),
                data: new Date().toLocaleString('pt-BR'),
                itens: produtoAvulso ? [produtoAvulso] : cart.Cart,
                total: totalPrice
            };
            localStorage.setItem('dioshopping: historico', JSON.stringify([novoPagamento, ...historicoAtual]));

            if (produtoAvulso) {
                const itemNoCarrinho = cart.Cart.find(item => item.id === produtoAvulso.id);
                if (itemNoCarrinho) {
                    dispatch(cartActions.DeleteItem(cart, produtoAvulso));
                }
            } else {
                const carrinhoVazio = { value: 0, Cart: [] };
                dispatch({ type: 'CHANGE_CART', localCart: carrinhoVazio });
                localStorage.setItem('dioshopping: cart', JSON.stringify(carrinhoVazio));
            }

            setTimeout(() => {
                navigate('/');
            }, 2000);
        }, 1500);
    }

    if (pagamentoConcluido) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                gap: '20px'
            }}>
                <CheckCircleOutline style={{ fontSize: "80px", color: cores.principal }} />
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Pagamento realizado com sucesso!
                </Typography>
                <Typography style={{ color: "#888" }}>
                    Redirecionando para a página inicial...
                </Typography>
            </div>
        )
    }

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '150px',
            paddingBottom: '50px',
            minHeight: '100vh',
            background: cores.fundoSuave + '33'
        }}>
            <div style={{
                width: "100%",
                maxWidth: "480px",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                overflow: "hidden"
            }}>
                <div style={{
                    background: cores.principal,
                    padding: "30px",
                    textAlign: "center"
                }}>
                    <Typography variant="h5" style={{ color: "white", fontWeight: "bold" }}>
                        <LockOutlined style={{ verticalAlign: "middle", marginRight: "8px" }} />
                        Pagamento Seguro
                    </Typography>
                </div>

                <div style={{
                    background: cores.fundoSuave,
                    padding: "12px 30px",
                    textAlign: "center"
                }}>
                    <Typography variant="body2" style={{ color: cores.escuro, fontWeight: "bold" }}>
                        <AddAlertOutlined /> Ambiente de teste: Os dados abaixo são fictícios e nenhum valor real será cobrado.
                    </Typography>
                </div>

                <div style={{
                    margin: "30px",
                    padding: "25px",
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${cores.principal}, ${cores.escuro})`,
                    color: "white",
                    minHeight: "160px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: `0px 6px 16px ${cores.claro}66`
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <CreditCardOutlined fontSize="large" />
                        <Typography style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            DIO SHOPPING
                        </Typography>
                    </div>
                    <Typography variant="h5" style={{ letterSpacing: "3px" }}>
                        {numeroCartao}
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography style={{ textTransform: "uppercase" }}>
                            {nomeCartao}
                        </Typography>
                        <Typography>
                            {validade}
                        </Typography>
                    </div>
                </div>

                <div style={{
                    padding: "0 30px 30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <TextField
                        label="Número do Cartão"
                        value={numeroCartao}
                        fullWidth
                        InputProps={{ readOnly: true }}
                        InputLabelProps={{ style: { color: cores.escuro } }}
                    />
                    <TextField
                        label="Nome no Cartão"
                        value={nomeCartao}
                        fullWidth
                        InputProps={{ readOnly: true }}
                        InputLabelProps={{ style: { color: cores.escuro } }}
                    />
                    <div style={{ display: "flex", gap: "20px" }}>
                        <TextField
                            label="Validade"
                            value={validade}
                            fullWidth
                            InputProps={{ readOnly: true }}
                            InputLabelProps={{ style: { color: cores.escuro } }}
                        />
                        <TextField
                            label="CVV"
                            value={cvv}
                            type="password"
                            fullWidth
                            InputProps={{ readOnly: true }}
                            InputLabelProps={{ style: { color: cores.escuro } }}
                        />
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px",
                        background: "#f7f7f7",
                        borderRadius: "8px"
                    }}>
                        <Typography variant="subtitle1">
                            {quantidadeItens} {quantidadeItens === 1 ? "item" : "itens"}
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: "bold", color: cores.escuro }}>
                            Total: R$ {totalPrice.toFixed(2)}
                        </Typography>
                    </div>

                    <Button
                        onClick={handlePagamento}
                        disabled={processando || (!produtoAvulso && cart.value === 0)}
                        fullWidth
                        style={{
                            marginTop: "10px",
                            height: "50px",
                            background: processando ? cores.escuro : cores.principal,
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "16px",
                            borderRadius: "8px",
                            textTransform: "none",
                            transition: "background 0.2s"
                        }}
                        onMouseOver={(e) => { if (!processando) e.target.style.background = cores.claro }}
                        onMouseOut={(e) => { if (!processando) e.target.style.background = cores.principal }}
                    >
                        {processando ? "Processando..." : `Finalizar Pagamento: R$ ${totalPrice.toFixed(2)}`}
                    </Button>

                    <Typography variant="caption" style={{ textAlign: "center", color: "#888" }}>
                        Seus dados estão protegidos com criptografia
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Pagamentos;