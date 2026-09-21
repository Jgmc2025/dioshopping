import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import { CloseOutlined, ContactsOutlined, HomeOutlined } from '@material-ui/icons';

const Header = () => {
    const navigate = useNavigate();
    const [modalAberto, setModalAberto] = useState(false);

    const userStorage = localStorage.getItem('dioshopping: user');
    const user = userStorage ? JSON.parse(userStorage) : null;

    const getIniciais = (nomeCompleto) => {
        const partes = nomeCompleto.trim().split(' ');
        const primeira = partes[0]?.[0] || '';
        const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';
        return (primeira + ultima).toUpperCase();
    }

    const handleLogout = () => {
        localStorage.removeItem('dioshopping: token');
        localStorage.removeItem('dioshopping: user');
        setModalAberto(false);
        navigate('/login');
    }

    const modalContent = modalAberto && (
        <div 
            onClick={() => setModalAberto(false)}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1050
            }}
        >
            <div 
                onClick={(event) => event.stopPropagation()}
                style={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "30px",
                    width: "300px",
                    textAlign: "center",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.15)"
                }}
            >   
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px"}}>
                    <h4>Perfil</h4>
                    <button type="button" onClick={() => setModalAberto(false)} style={{border: "none", background: "none", marginTop: "-10px"}}>
                        <CloseOutlined />
                    </button>
                </div>
                <Typography variant="h6" style={{textAlign: "start"}}>
                    <b>Usuário:</b> {user?.nome}
                </Typography>
                <Typography variant="h6" style={{ marginBottom: "25px", textAlign: "start" }}>
                    <b>Email:</b> {user?.email}
                </Typography>
                <Button
                    onClick={handleLogout}
                    variant="contained"
                    color="secondary"
                    fullWidth
                >
                    Sair
                </Button>
            </div>
        </div>
    );

    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} 
        style={{marginBottom: "50px", left: 0, top: 0, paddingLeft: "40px", paddingRight: "40px", borderBottom: "1px solid", height: 90, position: "fixed",
        zIndex: 2, background: "white"}}>
            <Typography variant='h3' style={{fontFamily: "Archivo Black", fontWeight: "bold"}}>
                <span style={{color: "blue"}}>
                    DIO
                </span>
                <span style={{fontStyle: "italic"}}>
                    SHOPPING
                </span>
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Link to="/">
                    <Button color="black">
                        <HomeOutlined style={{ marginRight: '5px' }}/>
                        Início
                    </Button>
                </Link>
                <Link to="/contato">
                    <Button color="black">
                        <ContactsOutlined style={{ marginRight: '5px' }}/>
                        Contato
                    </Button>
                </Link>
                <Cart />
            </div>

            {user ? (
                <>
                    <Button
                        onClick={() => setModalAberto(true)}
                        style={{
                            background: "blue",
                            color: "white",
                            borderRadius: "50%",
                            minWidth: "45px",
                            width: "45px",
                            height: "45px",
                            fontWeight: "bold"
                        }}
                    >
                        {getIniciais(user.nome)}
                    </Button>
                    {ReactDOM.createPortal(modalContent, document.body)}
                </>
            ) : (
                <div style={{background: "blue", borderRadius: "5px"}}>
                    <Link to="/login">
                        <Button style={{color: "white"}}>
                            Login
                        </Button>
                    </Link>
                </div>
            )}
        </Grid>
    )
}

export default Header;