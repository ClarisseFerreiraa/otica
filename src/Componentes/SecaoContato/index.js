import React from 'react';
import './estilo.css';

export function SecaoContato(){
    return (
        <section id="contato" className="secao-contato">
            <div className='limitar-sessao'>
                <h3>Fale conosco!</h3>
                 <p> Não perca tempo, venha conhecer </p>
                 <div className="contato-container">
                    <div className="contato-conteudo">
                    <h4>Contato:</h4>
                 <div>
                 <img src='assets/local.png' alt=""></img>
                 <span>Nova Iguaçu, RJ</span>
                 </div>
                 <div>
                 <img src='assets/telefone.png' alt=""></img>
                 <span>(21) 99999-9999</span>
                 </div>
                 <div>
                 <img src='assets/email.png' alt=""></img>
                 <span>contato@oticavida.com</span>
                 </div>   
                 </div>  

            <div className= "contato-conteudo">
                <h4>Nossas redes sociais:</h4>
            <div>
            <img src='assets/fb.png' alt=""></img>
            <p>/OticaVida</p>
            </div>

            <div>
            <img src='assets/ig.png' alt=""></img>
            <p>@oticavidarj</p>
            </div>

          <div>
          <img src='assets/tt.png' alt=""></img>
          <p>@oticavidarj</p>
     </div>
     </div>
     </div>
     </div>
        </section>
    );
}