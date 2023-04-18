import React from 'react';
import './estilo.css';

export function SecaoSobre(){
    return (
        <section className="secao-sobre">
            <div className='limitar-secao'>
                <h2>Quem Somos Nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa,
                   sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                   

           <div className='container-cards'>
               
               <img src='assets/loja.png' alt="loja"></img>

               <div className='card'>
                <h4>Nossas Filiais</h4>
               <p>Hoje temos mais de 20 filiaispelo Brasil e América</p>
               </div>

               <div className='card'>
                <h4>Atendimento Flexivel</h4>
              <p>Nossa equipe é treinado para te atender</p>
               </div>
               <img src='assets/atendimento.png' alt="atendimento"></img>
                </div> 
                </div>        
        </section>
    );
}