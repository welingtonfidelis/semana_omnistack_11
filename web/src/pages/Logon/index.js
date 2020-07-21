import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(event){
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')

        } catch (error) {
            console.log(error);
            alert('Parece que algo deu errado, tente novamente.')
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}    
                    />

                    <button className="button" type="submit">ENTRAR</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color={'#e02041'}/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}