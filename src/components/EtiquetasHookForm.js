import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "./EtiquetasHookForm.css";

const schema = yup.object({
    nome: yup.string()
             .required('O campo nome é de preenchimento obrigatório!'),
    email: yup.string()
              .email('Digite um email válido')
              .required('O campo email é de preenchimento obrigatório!'),
    cpf: yup.string()
            .min(11,'O CPF deve ter 11 dígitos!')
            .required('O campo CPF é de preenchimento obrigatório'),
    mensagem: yup.string()
            .required('O campo Mensagem não pode estar vacio'),
}).required();

export default function Etiquetas(){
    
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const [cliente,setCliente] = useState({'nome':'','email':'','cpf':'','mensagem':''}); 
    
    const [listaClientes, setListaClientes] = useState([]);

    function inserirCliente(cliente){
        setListaClientes([...listaClientes,cliente]);
        console.log(listaClientes);
    }


    return(
    
        <div>
            <h1>Contato</h1>
            <form onSubmit={handleSubmit(inserirCliente)}>
                <fieldset className="formulario">
                    <legend>Dados de Contato</legend>
                    <label forhtml="nome">Nome: 
                        <input type="text" placeholder="José da Silva" {...register('nome')} />
                        <span>{ errors.nome?.message }</span>
                    </label>
                    <br />
                    <label forhtml="email">E-Mail: 
                        <input type="text" placeholder="examplo@examplo.com" {...register('email')}/>
                        <span>{ errors.email?.message }</span>
                    </label>
                    <br />
                    <label forhtml="cpf">CPF: 
                        <input type="text" placeholder="123.456.890-01" {...register('cpf')}/>
                        <span>{ errors.cpf?.message }</span>
                    </label>
                    <br />
                    <label forhtml="mensagem">Mensagem: 
                        <textarea placeholder="Dígite sua mensagem" cols={30} rows={10} {...register('mensagem')}></textarea>
                        <span>{ errors.mensagem?.message }</span>
                    </label>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>
            <div>
                <div className="painel">
                    {listaClientes.map((cli,index)=>
                    <div className="etiqueta" key={index}>
                        <h1>Dados Enviados</h1>
                        <p>Nome: { cli.nome }</p>
                        <p>E-Mail: { cli.email }</p>
                        <p>CPF: { cli.cpf }</p>
                        <p>Mensagem: { cli.mensagem}</p>

                    </div>
                    
                    )}
                </div>
            </div>
        </div>
    )
}