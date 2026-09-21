import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Pagamentos from './Pages/pagamento';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route
                path="/pagamento"
                element={<Pagamentos />}
            />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/cadastro"
                element={<Cadastro />}
            />
        </Routes>
    )
}

export default MainRoutes;
