import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import { ContactsOutlined, HomeOutlined } from '@material-ui/icons';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} style={{marginBottom: "50px", marginTop: "15px"}}>
            <Typography variant='h3'>
                Dio Shopping
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
        </Grid>
    )
}

export default Header;
