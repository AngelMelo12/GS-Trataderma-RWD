"use client";

import React, { useEffect } from 'react';
import Link from "next/link";
import "./Header.css";

export default function Layout({children}){

  let usuario = null;

  if (typeof window !== "undefined") {
    usuario = localStorage.getItem("paciente-logado");
  }

  function logOut() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("usuario-valido");
      localStorage.removeItem("paciente-logado");
      window.location.href = "/Home"
    }
  }

  function usuarioLogado(usuario) {
    return usuario != null;
  }

  return (
    <>
      <nav>
        <div className = "logo"><Link className = "Navbar" href ="/Home">TrataDerma</Link></div>
        <ul>
          <li><Link className = "Navbar" href ="/Home">Home</Link></li>
          <li><Link className = "Navbar" href ="/Form">Formulário</Link></li>
          <li><Link className = "Navbar" href ="/Sobre">Informações</Link></li> 
          {usuarioLogado(usuario) ? (
            <li>
              Bem vindo(a), {usuario.nome} <button className="Navbar Login" onClick={logOut}>Sair
            </button>
            </li> 
          ) : (
            <>
              <li><Link className = "Navbar Login" href ="/Cadastro">Cadastro</Link></li>
              <li><Link className = "Navbar Login" href ="/Login">Login</Link></li>
            </>
          )}
          
        </ul>
      </nav>
    </>
  )
}