import React from 'react';
import './estilo.css';

export default function Topo(){
    return(
        <header>
            <div className='limitar-sessao'>
                <img src='/assets/logo.png' alt=''/>

                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    );
} 
   