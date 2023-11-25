import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./Cadastro.css";


const schema = yup.object({
    login: yup.string()
            .email('Digite um email válido')
            .required('O campo email é de preenchimento obrigatório!'),
    senha: yup.string()
            .min(3, "A senha deve ter mais de 3 digitos!")
            .required(),
    nome: yup.string()
            .required('O campo nome é de preenchimento obrigatório!'),
    cpf: yup.string()
            .min(11,'O CPF deve ter 11 dígitos!')
            .required('O campo CPF é de preenchimento obrigatório!'),
    rg: yup.string()
            .min(11,'O RG deve ter 10 dígitos!')
            .required('O campo RG é de preenchimento obrigatório!'),
    dataNascimento: yup.date()
            .required("É necessário preencher a data!"),
    sexo: yup.string()
            .required("É necessário selecionar uma opção!"),
    grupoSanguineo: yup.string()
            .required("É necessário informar um grupo sanguíneo!"),
    cep: yup.string()
            .required("É necessário preecnher o CEP!"),
    numero: yup.number()
            .required("É necessário informar o número!"),
    pontoReferencia: yup.string(),
    numeroDdi: yup.number()
            .required("Número DDI é obrigatório!"),
    numeroDdd: yup.number()
            .required("Número DDD é obrigatório!"),
    numeroTelefone: yup.number()
            .required("Telefone é obrigatório!"),
    tipoTelefone: yup.string()
            .required("Tipo do telefone é obrigatório!"),
    
}).required();

export default function Cadastro(){
    
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    function inserirPaciente(paciente){
  
        const autenticaDTO = {
            login: paciente.login,
            senha: paciente.senha,
            status: 'a'
        };

        cadastraAutentica(autenticaDTO)
        .then(responseAutentica => {
            const pacienteDTO = {
                nome: paciente.nome,
                cpf: paciente.cpf,
                rg: paciente.rg,
                dataNascimento: formatDate(paciente.dataNascimento),
                sexo: paciente.sexo,
                grupoSanguineo: paciente.grupoSanguineo,
                id_autentica: responseAutentica.id
            };

            return cadastraPaciente(pacienteDTO);
        })
        .then(responsePaciente => {
            const enderecoDTO = {
                cep: paciente.cep,
                numero: paciente.numero,
                pontoReferencia: paciente.pontoReferencia,
                paciente: {id: responsePaciente.id}
            };

            const telefoneDTO = {
                numeroDdi: paciente.numeroDdi,
                numeroDdd: paciente.numeroDdd,
                numeroTelefone: paciente.numeroTelefone,
                tipoTelefone: paciente.tipoTelefone,
            }
    
            cadastraEndereco(enderecoDTO);
            cadastraTelefone(telefoneDTO);
        });

        window.alert("Cadastro realizado com sucesso!");
        window.location.href = "/Login";
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    function cadastraAutentica(autentica) {
        return fetch("http://127.0.1:80/autentica", {
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

    function cadastraPaciente(paciente) {
        return fetch("http://127.0.1:80/paciente", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(paciente),
        })
        .then((res) => {return res.json()})
        .then((json) => {return json});
    }

    function cadastraEndereco(endereco) {
        return fetch("http://127.0.1:80/enderecoPaciente", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(endereco),
        })
        .then((res) => {return res.json()})
        .then((json) => {return json});
    }

    function cadastraTelefone(telefone) {
        return fetch("http://127.0.1:80/telefonePaciente", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(telefone),
        })
        .then((res) => {return res.json()})
        .then((json) => {return json});
    }

    return(
        <>
        <Layout>
        </Layout>
        <div className="box_body">
            <form onSubmit={handleSubmit(inserirPaciente)}>
                <fieldset className="formulario">
                    <h1 className="h1_cadastro">Cadastro de usuário</h1>
                    <label forhtml="login">Email: 
                        <br/>
                        <input type="text" placeholder="seuemail@email.com" {...register('login')} />
                        <span>{ errors.nome?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="senha">Senha: 
                        <br/>
                        <input type="password" {...register('senha')} />
                        <span>{ errors.nome?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="nome">Nome completo: 
                        <br/>
                        <input type="text" placeholder="José da Silva" {...register('nome')} />
                        <span>{ errors.nome?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="cpf">CPF: 
                        <br/>
                        <input type="text" placeholder="123.456.890-01" {...register('cpf')}/>
                        <span>{ errors.cpf?.message }</span>
                    </label>
                    <br />
                    <label forhtml="rg">RG: 
                        <br/>
                        <input type="text" placeholder="51.123.345-4" {...register('rg')}/>
                        <span>{ errors.rg?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="dataNascimento">Data de Nasciemnto:
                        <br/> 
                        <input type="date" {...register('dataNascimento')} />
                        <span>{ errors.dataNascimento?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="sexo">Sexo:
                        <select {...register('sexo')}>
                            <option>Selecionar gênero</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="X">Prefiro não opinar</option>
                        </select>
                        <span>{ errors.sexo?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="grupoSanguineo">Grupo sanguíneo:
                        <br/> 
                        <input type="text" {...register('grupoSanguineo')} />
                        <span>{ errors.grupoSanguineo?.message }</span>
                    </label>
                    <br/>
                    <label forhtml="cep">CEP: 
                        <br/>
                        <input type="text" placeholder="000000-000" {...register('cep')} />
                        <span>{ errors.cep?.message }</span>
                    </label>
                    <br />
                    <label forhtml="numero">Número: 
                        <br/>
                        <input type="text" placeholder="12" {...register('numero')} />
                        <span>{ errors.numero?.message }</span>
                    </label>
                    <label forhtml="pontoReferencia">Ponto de Referência: 
                        <br/>
                        <input type="text" placeholder="Apto. 3, Casa com muro amarelo..." {...register('pontoReferencia')} />
                        <span>{ errors.pontoReferencia?.message }</span>
                    </label>
                    <br />
                    <label forhtml="numeroDdi">DDI: 
                        <br/>
                        <input type="number" placeholder="55" {...register('numeroDdi')} />
                        <span>{ errors.numeroDdi?.message }</span>
                    </label>
                    <br />
                    <label forhtml="numeroDdd">DDD: 
                        <br/>
                        <input type="number" placeholder="11" {...register('numeroDdd')} />
                        <span>{ errors.numeroDdi?.message }</span>
                    </label>
                    <br />
                    <label forhtml="numeroTelefone">Número de telefone: 
                        <br/>
                        <input type="number" placeholder="1241234" {...register('numeroTelefone')} />
                        <span>{ errors.numeroDdi?.message }</span>
                    </label>
                    <br />
                    <label forhtml="tipoTelefone">Tipo do telefone: 
                        <br/>
                        <input type="text" placeholder="Celular" {...register('tipoTelefone')} />
                        <span>{ errors.numeroDdi?.message }</span>
                    </label>
                    <br />
                    <button className="button_cad" type="submit">Cadastrar</button>
                </fieldset>
            </form>
        </div>
        <Footer></Footer>
        </>          
    )
}