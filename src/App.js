import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';

const AppContent = () => {
  const location = useLocation()
  const isLoginOrRegister = (location.pathname === "/login" || location.pathname === "/cadastro" || location.pathname === "/pagamento")
  return(
    <Container maxWidth="xl">
      {!isLoginOrRegister && <Header />}
      <Routes />
    </Container>
  )
}

const App = () => {
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <Provider store={store}>
        <Router>
          <AppContent />
        </Router>
    </Provider>
  )
}

export default App;
