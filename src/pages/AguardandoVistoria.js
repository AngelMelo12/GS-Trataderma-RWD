import React from 'react';
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./AguardandoVistoria.css";

export default function AguardandoVistoria(){
  return (
    <>
      <Layout> 
      </Layout>

      <h1 className="h1_analise_1">Processo em análise</h1>
      <p className="p_analise_1">O que acontece agora? Veja abaixo:</p>

      <div className="box_analise_1">
        <p className="p_info">
         • Suas fotos foram encaminhadas para o médico Dermatologista.
          </p> 
          <p className="p_info">
          • O médico analisará as imagens e detectará a presença ou ausência da dermatite atópica.
          </p> 
          <p className="p_info">
          • Caso o prognóstico seja positivo, e o grau de dermatite atópica seja considerado alto ou muito alto, você receberá algumas instruções para controlar a dermatite por determinado período, e em até 48 horas um profissional retornará informações sobre o pré-agendamento da sua consulta num hospital mais próximo.
          </p> 
          <p className="p_info">
          • Caso o prognóstico seja positivo, porém o grau de dermatite atópica seja considerado leve, você receberá instruções para realizar o controle da dermatite em casa, sem a necessidade de agendar uma consulta.
        </p>
      </div>

      <div className="analise_button">
            <button className="analise_button_info">
               <a href="/Form">Realizar nova consulta</a>
            </button>
          </div>

      <img src="https://img.freepik.com/vetores-gratis/banner-medico-de-pesquisa-genetica-moderna-com-eletrocardiografo-e-design-cruzado_1017-45460.jpg?w=1380&t=st=1700528727~exp=1700529327~hmac=2141c8af6c67eded95e0f7d59e93e661c00931b7a15545ad698e55afcccf5ed8" alt="Descrição da imagem" className="img_analise_1" />   



      <Footer></Footer>
    </>
    
  )
}