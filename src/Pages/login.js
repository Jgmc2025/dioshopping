import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(false);
    const handleLogin = () => {
        setError(false);
        if (email.length <= 0 || senha.length <= 0) {
            return setError(true);
        }
        // TODO: substituir por chamada real de autenticação (fetch/API)
        console.log('Login com:', { email });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '150px', paddingBottom: '50px' }}>
            <div style={{
                border: "1px solid",
                borderColor: "#ddd",
                width: "400px",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 30px",
                boxSizing: "border-box",
                boxShadow: "0px 2px 10px rgba(0,0,0,0.08)"
            }}>
                <Typography variant="h4" style={{ fontFamily: "Archivo Black", marginBottom: "30px" }}>
                    <span style={{ color: "blue" }}>DIO</span>
                    <span style={{ fontStyle: "italic" }}>SHOPPING</span>
                </Typography>

                <Typography variant="h5" style={{ marginBottom: "25px" }}>
                    Login
                </Typography>

                {error &&
                    <div className="alert alert-warning" role="alert" style={{ marginBottom: "20px" }}>
                        Preencha email e senha para continuar!
                    </div>
                }

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
                    <TextField
                        id="senha"
                        label="Senha"
                        type="password"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
                </div>

                <Button
                    onClick={handleLogin}
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ height: "45px" }}
                >
                    Entrar
                </Button>
            </div>
            <Typography style={{ marginTop: "20px" }}>
                Não tem uma conta?{' '}
                <Link to="/cadastro" style={{ color: "blue", textDecoration: "none" }}>
                    Cadastre-se
                </Link>
            </Typography>
        </div>
    )
}

export default Login;