import Return from '../Components/Return'
import img from './Projetos/Proj3/1.png'
import img2 from './Projetos/Proj3/2.png'
import img3 from './Projetos/Proj3/3.png'
import img4 from './Projetos/Proj3/4.png'
import img5 from './Projetos/Proj3/5.png'
const ProjectPage3 = ()=>{
    return(
        <div className='pWrap'>
            <Return/>
            <div className='apresProject'>
                <h1>Projeto E-commerce </h1>
                <p>Uma plataforma planejada para melhorar a interação de pessoas mais leigas com compras onlines </p>
            </div>
            <img className='projectImg' src={img} alt="" />
            <img className='projectImg' src={img2} alt="" />
            <img className='projectImg' src={img3} alt="" />
            <img className='projectImg' src={img4} alt="" />
            <img className='projectImg' src={img5} alt="" />
        </div>
    )
}
export default ProjectPage3