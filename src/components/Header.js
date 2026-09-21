import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import { ContactsOutlined, HomeOutlined } from '@material-ui/icons';

const Header = () => {
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
            <div style={{background: "blue", borderRadius: "5px"}}>
                <Link to="/login">
                    <Button style={{color: "white"}}>
                        Login
                    </Button>
                </Link>
            </div>
        </Grid>
    )
}

export default Header;
