import React from 'react';
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./Form.css";

export default function Vistoria(){
  return (

    <>
      <Layout>
      </Layout>
      <h1 className="h1_analise">Formulário de Análise</h1>
      <div className="box_analise">
          <div className="box_filho_analise">
            <label className="label_analise"> Há quantos dias percebeu o aparecimento de machas e coceiras?
                <br/>
                <input className="analise_input" type="text"/>
            </label> 
            <br/>
            <label className="label_analise"> Fez uso de algum remédio ou pomada?
                <br/>
                <input className="analise_input" type="text"/>
            </label> 
            <br/>
            <label className="label_analise"> Você é alérgico a algum medicamento?
                <br/>
                <input className="analise_input" type="text"/>
            </label> 
            <br/> 
            <label className="label_analise"> Escolha suas fotos:
                <br/>
                <input className="analise_input" type="file"/>
            </label> 
            <br/> 
            <button className="button_analise" type="submit" onClick={() => {
              if (true) {
                  window.location.href = "/AguardandoVistoria";
              }
              }}>Enviar</button>
            </div>
          <div className="box_filho_analise_img ">
            <img src="https://img.freepik.com/fotos-gratis/maos-de-paciente-que-sofre-de-psoriase_23-2149329631.jpg?w=360&t=st=1700524654~exp=1700525254~hmac=f1760d3a0535b833d0b0a65361c2f74cb891fb730a7ec6d9da11a3bca181030e" alt="Descrição da imagem" className="img_analise" />   
          </div>
      </div> 
      <Footer></Footer>
    </>
  )
}