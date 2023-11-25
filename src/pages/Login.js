import Layout from "../components/Layout";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Cadastro.css";

const schema = yup.object({
  login: yup.string()
          .email('Digite um email válido')
          .required('O campo email é de preenchimento obrigatório!'),
  senha: yup.string()
          .min(3, "A senha deve ter mais de 3 digitos!")
          .required(),
}).required();

export default function Login() {

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

  function inserirLogin(login) {
    if (typeof window !== "undefined") {
      buscaLogin(login)
      .then(loginResponse => {

        if (loginResponse == undefined || loginResponse == null) {
          window.alert("Informações de login inválidas!");
          window.location.href = "/Login";
        }
        window.location.href = "/Home";
        // return buscaPacienteLogin(loginResponse.id);
      });
      // Tentamos buscar o paciente pelo login, porém não conseguimos :(
        
      // .then(pacienteResponse => {
      //   window.alert(pacienteResponse)
      //   localStorage.setItem("usuario-valido", loginResponse.id);
      //   localStorage.setItem("paciente-logado", pacienteResponse);
      //   window.location.href = "/Home";
      // });
    }
  }

  function buscaLogin(autentica) {
    return fetch("http://127.0.1:80/autentica/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(autentica),
    })
    .then((res) => {return res.json()})
    .then((json) => {return json});
  }

  function buscaPacienteLogin(id) {
    return fetch("http://127.0.1:80/paciente/autentica/" + id, {
      method: "GET",
      mode: "cors",
    })
    .then((res) => {return res.json()})
    .then((json) => {return json});
  }

  return (
    <>
      <Layout>
      </Layout>
      <div className="boty_login">
        <div className="box_login">
          
          <form onSubmit={handleSubmit(inserirLogin)}>
            <fieldset className="formulario">
              <h1 className="h1_cadastro">Login</h1>
              <label forhtml="login">Email: 
                  <br/>
                  <input type="email" placeholder="seuemail@email.com" {...register('login')} />
                  <span>{ errors.nome?.message }</span>
              </label>
              <br/>
              <label forhtml="senha">Senha: 
                  <br/>
                  <input type="password" {...register('senha')} />
                  <span>{ errors.nome?.message }</span>
              </label>
              <br/>      
              <button className="button_cad" type="submit">Login</button>
            </fieldset>
          </form>
        </div>       
      </div>
      <Footer></Footer>
    </>
  );
}
