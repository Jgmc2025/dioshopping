import React from 'react';
import { CloseOutlined, PersonOutline } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Preferences = () => {

    return(
        <>
            <Button color="black" data-bs-toggle="modal" data-bs-target="#PreferenceModal">
                <PersonOutline style={{ marginRight: '5px' }}/>
                Preferências
            </Button>

            {/* Modal */}
            <div className="modal fade" id="PreferenceModal" tabIndex="-1" aria-labelledby="PreferenceModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="PreferenceModalLabel">Preferências</h5>
                            <button type="button" data-bs-dismiss="modal" style={{border: "none", background: "none"}}>
                                <CloseOutlined/>
                            </button>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", margin: "20px", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "row", gap: "15px",}}>
                                <h6 className="modal-title">Tema:</h6>
                                <select>
                                    <option>Claro</option>
                                    <option>Escuro</option>
                                </select>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", gap: "15px",}}>
                                <h6 className="modal-title">Categorias:</h6>
                                <select>
                                    <option>Direita</option>
                                    <option>Esquerda</option>
                                    <option>Oculta</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preferences;
