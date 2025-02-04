import Return from '../Components/Return'
import img from './Projetos/Proj4/1.png'
import img2 from './Projetos/Proj4/2.png'
import img3 from './Projetos/Proj4/3.png'
import img4 from './Projetos/Proj4/4.png'
import img5 from './Projetos/Proj4/5.png'
import img6 from './Projetos/Proj4/6.png'
import img7 from './Projetos/Proj4/7.png'
const ProjectPage4 = ()=>{
    return(
        <div className='pWrap'>
            <Return/>
            <div className='apresProject'>
                <h1>Projeto Plataforma de vagas </h1>
                <p>O produto é o desenvolvimento de uma interface mais amistosa para usuarios da plataforma</p>
            </div>
            <img className='projectImg' src={img} alt="" />
            <img className='projectImg' src={img2} alt="" />
            <img className='projectImg' src={img3} alt="" />
            <img className='projectImg' src={img4} alt="" />
            <img className='projectImg' src={img5} alt="" />
            <img className='projectImg' src={img6} alt="" />
            <img className='projectImg' src={img7} alt="" />
        </div>
    )
}
export default ProjectPage4