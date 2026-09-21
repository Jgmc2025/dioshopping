import React from 'react';
import ReactDOM from 'react-dom';
import { CloseOutlined, HistoryOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Historico = () => {
    const historico = JSON.parse(localStorage.getItem('dioshopping: historico')) || [];

    const modalContent = (
        <div className="modal fade" id="HistoricoModal" tabIndex="-1" aria-labelledby="HistoricoModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ marginTop: "120px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="HistoricoModalLabel">Histórico de Pagamentos</h5>
                        <button type="button" data-bs-dismiss="modal" style={{border: "none", background: "none"}}>
                            <CloseOutlined/>
                        </button>
                    </div>

                    <div className="modal-body table-responsive">
                        {historico.length === 0 ? (
                            <p style={{ textAlign: "center", padding: "20px", color: "#888" }}>
                                Nenhum pagamento realizado ainda.
                            </p>
                        ) : (
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Data</th>
                                        <th scope="col">Itens</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historico.map(pagamento => (
                                        <tr key={pagamento.id}>
                                            <td>{pagamento.data}</td>
                                            <td>
                                                {pagamento.itens.map(item => item.name_product).join(', ')}
                                            </td>
                                            <td>R$ {pagamento.total.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        <>
            <Button color="black" data-bs-toggle="modal" data-bs-target="#HistoricoModal" style={{ marginRight: '20px' }}>
                <HistoryOutlined style={{ marginRight: '5px' }}/>
                Histórico
            </Button>

            {ReactDOM.createPortal(modalContent, document.body)}
        </>
    )
}

export default Historico;