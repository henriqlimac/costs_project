import React from 'react';
import styles from './Home.module.css';
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

export default function Home (){
    return (
        <>
            <section className={styles.homeContainer}>
                <h1>Bem-vindo ao <span>Costs</span>,</h1>
                <p>Comece a gerenciar seus projetos agora mesmo!</p>
                <LinkButton to="/newproject" text="CRIAR PROJETO" />
                <img src={savings} alt="Costs" />
            </section>
        </>
    )
}