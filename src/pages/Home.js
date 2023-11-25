import React from 'react';
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home(){
  return (
    <>
      <Layout>
      
      </Layout>

      <main>


        <img className="img_Home" src="https://img.freepik.com/fotos-gratis/fundo-medico-3d-com-figura-masculina-com-cerebro-e-dna-strands_1048-8559.jpg?w=1060&t=st=1700522848~exp=1700523448~hmac=a596cae9d56fa2ca625cc961b4acc50f4b632f9431bbd50c7dbeec0107c3670a" alt="Descrição da imagem" />


        <section>
          <h2 className="main_tittle"> DesenvolvimentoHealth </h2>
          <p>
          Somos a TrataDerma! Uma startup especializada em desenvolvimento de sistemas para hospitais, farmácias e unidades de saúde no geral. Nosso objetivo é transformar o mundo por via da tecnologia com o uso principalmente de inteligências artificiais! Somos, no total, 5 desenvolvedores cursando Análise e Desenvolvimento de Sistemas na FIAP em busca de um mundo mais saudável!
          </p>
        </section>
        <section>
          
          <div className="section2">
            <h2>Nosso objetivo:</h2>
            <p>
            Nosso objetivo com esse projeto é a conscientização e auxílio de pessoas que vivem em locais periféricos (onde o volume de serviços de saúde no geral são escassos) possam realizar suas devidas consultas de maneira online. As três coisas necessárias são um celular, internet e um cadastro em nosso sistema! Após o relato do problema (por parte do cliente), será feito um teste prévio da ocorrência da doença, onde o nosso foco é o prognóstico da Dermatite atópica.
            </p>
          </div>

          <div className="analise_button">
            <button className="analise_button_info">
               <a href="/Form">Clique aqui para realizar a sua análise</a>
            </button>
          </div>
        
        </section>
      </main>
      <Footer></Footer>
    </>

    
  )
}

