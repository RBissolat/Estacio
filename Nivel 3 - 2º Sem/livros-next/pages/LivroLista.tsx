
import type{ NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Livro from '../classes/modelo/Livro';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
    const Promise = await fetch(baseURL);
    const livros:Array<Livro> = await Promise.json();
    return livros;
}

const excluirLivro = async (codigo:number) => {
    const Promise = await fetch(baseURL+'/'+codigo,{method:"DELETE"});
}

const LivroLista:NextPage = () => { 
    const [livros, setLivros] = useState(Array<Livro>);
    const [carregado, setCarregado] = useState(Boolean);

    useEffect(() => {
        const effect = async() => {
            obter().then(value => {
                setLivros(value);
            });
            setCarregado(true);
        }
        effect()
    }, [carregado]);

    const excluir = (codigo:number) => {
        excluirLivro(codigo);
        setCarregado(false);
    };

    return (
        <div className='styles.container'>
            <Head>
                <title>Loja Next</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <main className={styles.main}>
                <div className='container'>
                    <h1 className='text-center'>Catálogo de Livros</h1>
                    <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Titulo</td>
                            <td>Resumo</td>
                            <td>Editora</td>
                            <td>Autores</td>
                        </tr>
                    </thead>
                    <tbody>
                        { livros && livros.map( livro => (
                            <LinhaLivro livro={livro} excluir={() => excluir(livro.codigo)} key={livro.codigo}/>
                        ))}
                    </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default LivroLista;