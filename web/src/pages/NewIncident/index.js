import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoPng from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const ongId = localStorage.getItem('ongId');
            const data = {
                title, 
                description,
                value
            }
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');

        } catch (error) {
            console.log(error);
            alert('Parece que algo deu errado, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoPng} alt="Logo" />

                    <h1>Cadastras novo caso</h1>
                    <p>Descreva o caso detalhadamente para econtrar um herói para ajudar a resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color={'#e02041'} />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}