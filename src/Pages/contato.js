import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';
import { DeleteOutline } from '@material-ui/icons';

const Contatos = () => {

    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setMessage(data);
    }, [render])

    const sendMessage = () => {
        setValidator(false);
        if(author.length <= 0 || content.length <= 0){
            return setValidator(!validator)
        }
        const bodyForm = {
            email: author,
            message: content,
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000)
            }
        })
        
        setAuthor('');
        setContent('');
        
        console.log(content)
    }

    const deleteMessage = (messageToDelete) => {
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: messageToDelete.id
            })
        })
        .then((response) => response.json())
        .then((data) => {
            setRender(!render);
        })
        .catch((error) => {
            console.error("Erro ao deletar mensagem:", error);
        })
    }

    return(
        <>
            <div style={{display: "flex", flexDirection: "column", paddingTop: "150px", paddingBottom: "30px",
                alignItems: "center", gap: "30px", border: "1px solid", borderColor: "#ddd", borderRadius: "10px",
                boxSizing: "border-box", boxShadow: "0px 1px 8px rgba(0,0,0,0.08)"}}>
                {validator && 
                    <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                        <strong>Por favor preencha todos os campos!</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                {success && 
                    <div className="alert alert-success alert-dismissible fade show mt-2" role="alert" style={{paddingRight: "20px"}}>
                        <strong>Mensagem foi enviada!</strong>
                    </div>
                }
                <Grid container direction="row" xs={3}>
                    <TextField id="name" label="Nome" value={author} onChange={(event)=>{setAuthor(event.target.value)}} fullWidth/>
                    <TextField id="message" label="Mensagem" value={content} onChange={(event)=>{setContent(event.target.value)}} fullWidth/>
                </Grid>
                <Button onClick={sendMessage} className="mt-2" variant="contained" color="primary" style={{height: "40px"}}>
                    Enviar
                </Button>
            </div>

            <Grid container spacing={2} style={{paddingBottom: "150px"}}>
                {message.map((content) => {
                    return(
                        <Grid item xs={3} key={content.id}>
                            <div className='card mt-2'>
                                <div className="card-body" style={{display: "flex", flexDirection: "row"}}>
                                    <div>
                                        <h5 className="card-title">{content.email}</h5>
                                        <p className="card-text">{content.message}</p>
                                        <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                                    </div>
                                    <button onClick={() => deleteMessage(content)} style={{border: "none", background: "none", position: "absolute", right: "10px"}}><DeleteOutline style={{width: "30px", height: "30px"}}/></button>
                                </div>
                            </div>
                        </Grid>
                    )
                } )}
            </Grid>
        </>
    )
}

export default Contatos;
