import React from 'react';
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./Sobre.css";

export default function Sobre(){
  return (

    <>
      <Layout>
      </Layout>
      <div className="box_analise">
          <div className="box_filho_analise">
            <h3>Dermatite atópica</h3>
            <img className='box_image' src='https://blog.creamy.com.br/wp-content/uploads/2021/05/interna-CRE-dermatite-atopica.jpg' />
            <p>É uma doença crônica e hereditária que causa inflamação da pele, levando ao aparecimento de lesões e coceira.</p>
            <br/>
            <h3>Dermatite herpetiforme</h3>
            <img className='box_image' src='https://static1.minhavida.com.br/diseases/c3/56/95/4e/pessoa-com-bolhas-avermelhadas-nas-costas-um-dos-sintomas-da-dermatite-orig-1.jpg' />
            <p>É uma doença autoimune que provoca aglomerados de bolhas avermelhadas e intensamente pruriginosas e edemas semelhantes a urticária em pessoas com doença celíaca..</p>
            <br/>
          </div>
          <div className="box_filho_analise">
            <h3>Dermatite seborréica</h3>
            <img className='box_image' src='https://dermacentrum.com.br/wp-content/uploads/2019/06/dermatite-seborreica.jpg' />
            <p>É uma inflamação na pele que causa principalmente descamação e vermelhidão em algumas áreas da face, como sobrancelhas e cantos do nariz, couro cabeludo, orelhas e tórax.</p>
            <br/>
            <h3>Dermatite de contato</h3>
            <img className='box_image' src='https://vitat.com.br/wp-content/uploads/2022/04/dermatite-de-contato.jpg' />
            <p>É uma reação inflamatória na pele decorrente da exposição a um agente capaz de causar irritação ou alergia, como nesse caso por exemplo, após o uso de um colar..</p>
            <br/>
          </div>
      </div>
      
      <Footer></Footer>
    </>
  )
}