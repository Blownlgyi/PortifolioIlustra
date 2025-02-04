import { Link } from 'react-router'
import img from '../assets/Card-about.webp'
import img2 from '../assets/Card-aboutBack.webp'
import { useState } from 'react'
import tecimg from '../assets/1 (1).webp'
import tecimg2 from '../assets/1 (2).webp'
import tecimg3 from '../assets/1 (3).webp'
import tecimg4 from '../assets/1 (4).webp'
import tecimg5 from '../assets/1 (5).webp'
import tecimg6 from '../assets/1 (6).webp'
import tecimg7 from '../assets/1 (7).webp'
import tecimg8 from '../assets/1 (8).webp'
import tecimg9 from '../assets/1 (9).webp'
const About = (props)=>{
    const [cardClass1, setCardClass1]=useState('card c1')
    const [cardClass2, setCardClass2]=useState('card c2')
    const [cardClass3, setCardClass3]=useState('card c3')
    const handleSwitchCard = (id) => {
        // Resetando os cards para que só um tenha a classe 'zindex'
        if (id === 1) {
          setCardClass1('card c1 zindex');
          setCardClass2('card c2');
          setCardClass3('card c3');
        } else if (id === 2) {
          setCardClass1('card c1');
          setCardClass2('card c2 zindex');
          setCardClass3('card c3');
        } else if (id === 3) {
          setCardClass1('card c1');
          setCardClass2('card c2');
          setCardClass3('card c3 zindex');
        }
      };
    const [activeClass, setActiveClass] = useState(null);

  // Função para alternar a classe
        const handleClick = (id) => {
            handleSwitchCard(id)
            setActiveClass((prevId) => (prevId === id ? null : id));
        };


    return(
        <section ref={props.refs} className='about'>
            <div id="section1" >
                <h1 className='s-title' >Sobre mim</h1>
                <p>Conheça um pouco sobre mim e minhas experiências <strong>
                clique em uma carta  </strong>  </p>

            {/* <button className='btn' >Sobre mim</button> */}
            </div>
            <div className='cards'>
                <div  className={cardClass1}>
                    <div onClick={() => handleClick(1)}
                        className={`content ${activeClass === 1 ? 'animCard' : ''}`} >
                    <div className='front'>
                    <img className='about-img' src={img} alt="" />

                    </div>
                    <div className='back'>
                        <h1>Perfil</h1>
                        <p>Tenho 23 anos, e trabalho com Web Designer a 3 anos sempre buscando formas de interações e abordagens diferentes para o produto. sempre em busca de desafios e sempre buscando o alinhamento com o cliente</p>
                        <img className='about-img' src={img2} alt="" />

                    </div>
                    

                    </div>

                </div>
                <div className={cardClass2}>
                    <div onClick={() => handleClick(2)}
                        className={`content ${activeClass === 2 ? 'animCard' : ''}`}>
                    <div className='front'>
                    <img className='about-img' src={img} alt="" />

                    </div>
                    <div className='back'>
                       <h1>Tecnologias</h1>
                       <div className="tec">
                            <img src={tecimg} alt="" />
                            <img src={tecimg2} alt="" />
                            <img src={tecimg3} alt="" />
                            <img src={tecimg4} alt="" />
                            <img src={tecimg5} alt="" />
                            <img src={tecimg6} alt="" />
                            <img src={tecimg7} alt="" />
                            <img src={tecimg8} alt="" />
                            <img src={tecimg9} alt="" />
                       </div>
                        <img className='about-img' src={img2} alt="" />

                    </div>
                    

                    </div>

                </div>
                {/* <div className={cardClass3}>
                    <div onClick={() => handleClick(3)}
                        className={`content ${activeClass === 3 ? 'animCard' : ''}`}>
                    <div className='front'>
                    <img className='about-img' src={img} alt="" />

                    </div>
                    <div className='back'>
                        <p>Tenho 23 anos, e trabalho com Web Designer a 3 anos sempre buscando formas de interações e abordagens diferentes para o produto. sempre em busca de desafios e sempre buscando o alinhamento com o cliente</p>
                        <img className='about-img' src={img2} alt="" />

                    </div>
                    

                    </div>

                </div> */}
            </div>
           

            
       
    </section>
    )
}
export default About