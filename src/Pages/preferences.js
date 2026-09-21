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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preferences;
