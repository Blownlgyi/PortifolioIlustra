import { useRef } from "react"
import About from "../Components/About"
import { useNavigate, useOutletContext } from "react-router";

const AboutPage =()=>{
    const nav= useNavigate();
    
    const HandleReturn= ()=>{
        nav(-1)
    
    }   
    return(
        <section className="about-page">
            <button onClick={HandleReturn} className="btn return">
                    &lt;
            </button>
            <div className="geral">
                <div>
                    <h1>Sobre Mim</h1>
                    <p>Orientado a resultados com 3 anos de experiência em projetos complexos no setor
de TI e marketing. Hábil em metodologias ágeis e gestão de projeto, desdobramento
de campanhas, Direção de Arte, Design para mídias sociais, Web Design. Capacidade
de entregar projetos no prazo e colaboração em equipe.</p>
                </div>
                <div>
                    <h1>Experiências</h1>
                    <li>Designer Gráfico Pleno e Web Designer -Laser Eletro Feverei
                    2024 –Presente</li>
                    <li>Diretor de Arte e Web Designer - Comunica Toke Fevereiro 2023 – Junho 2023
                    ● Desenvolvi a campanha de divulgação de um evento artístico, criando identidade visual</li>
                    <li>Designer Gráfico Junior - Fino toque Personalizados Agosto 2021 – Junho 2022
                    </li>
                </div>
                <div>
                    <h1>Cursos</h1>
                </div>
                

            </div>
            <div className="tec">
                    <h1>Tecnologias</h1>
                    <div>
                    {/* <img src={img} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" /> */}

                    </div>

                </div>
        </section>
    )
}
export default AboutPage