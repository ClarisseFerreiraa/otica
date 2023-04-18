import React from "react";
import './estilo.css';

export function SecaoProdutos(){
    return (
        <section className="secao-produtos">
            <div className='limitar-secao'>
                <h3>Nossos Produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
 

              <div className="container-produtos">
              <div className="box-produto">
              <h4>Òculos de grau</h4>
              <img src= 'assets/oculos01.png' alt></img>
              <p>R$ 500,00</p>
       </div>
            <div className="box-produto">
              <h4>Òculos transition</h4>
              <img src='assets/oculos02.png' alt=''></img>
              <p>R$ 750,00</p>
        </div>
             <div className="box-produto">
              <h4>Òculos de sol</h4>
              <img src='assets/oculos03.png' alt=''></img>
              <p>R$ 700,00</p>
       </div>

              <div className="box-produto">
              <h4>Òculos infantil</h4>
              <img src='assets/oculos04.png' alt=''></img>
              <p>R$ 500,00</p>
             </div>
             </div>
             <div>
            <h4>Todos os nossos produtos inclue</h4>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
             </div>
             </div>
            
             

        </section>
    );
}