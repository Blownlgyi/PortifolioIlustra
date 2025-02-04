import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Intro = () => {
    const [scrollY, setScrollY] = useState(0);

    // Função para atualizar o scrollY
    const handleScroll = () => {
        setScrollY(window.scrollY); // Atualiza o valor de scrollY conforme o scroll
    };

    // Adicionando o ouvinte de scroll no useEffect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Cálculo do valor de translateY (com valores negativos)
    const translateValue = Math.min(-scrollY / 3, 8000); // Limitando o translate a -1000px

    return (
        <section className="anim1" style={{ transform: `translateX(${translateValue}px) translateY(${translateValue}px) ` }}>
            <img className="logo" src={logo} alt="Logo" />
            <span>Web Designer | Front end Dev</span>
            <h1>Vinicius Alves</h1>
        </section>
    );
};

export default Intro;
