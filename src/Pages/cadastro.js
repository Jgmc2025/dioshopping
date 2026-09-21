import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@material-ui/core/';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');

    const handleCadastro = () => {
        setError('');
        if (nome.length <= 0 || email.length <= 0 || senha.length <= 0 || confirmarSenha.length <= 0) {
            return setError('Preencha todos os campos para continuar!');
        }
        if (senha !== confirmarSenha) {
            return setError('As senhas não coincidem!');
        }
        if (senha.length < 6) {
            return setError('A senha deve ter no mínimo 6 caracteres!');
        }
        // TODO: substituir por chamada real de cadastro (fetch/API)
        console.log('Cadastro com:', { nome, email, senha });
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleCadastro();
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
                    Criar Conta
                </Typography>

                {error &&
                    <div className="alert alert-warning" role="alert" style={{ marginBottom: "20px" }}>
                        {error}
                    </div>
                }

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                    <TextField
                        id="nome"
                        label="Nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
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
                    <TextField
                        id="confirmarSenha"
                        label="Confirmar Senha"
                        type="password"
                        value={confirmarSenha}
                        onChange={(event) => setConfirmarSenha(event.target.value)}
                        onKeyPress={handleKeyPress}
                        fullWidth
                    />
                </div>

                <Button
                    onClick={handleCadastro}
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ height: "45px" }}
                >
                    Cadastrar
                </Button>
            </div>

            <Typography style={{ marginTop: "20px" }}>
                Já tem uma conta?{' '}
                <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>
                    Fazer login
                </Link>
            </Typography>
        </div>
    )
}

export default Cadastro;