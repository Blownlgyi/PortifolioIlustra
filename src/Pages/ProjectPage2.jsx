import Return from '../Components/Return'
import img from './Projetos/Proj2/1.png'
import img2 from './Projetos/Proj2/2.png'

const ProjectPage2 = ()=>{
    return(
        <div className='pWrap'>
            <Return/>
            <div className='apresProject'>
                <h1>Projeto Plataforma de vagas </h1>
                <p>Layout de um aplicativo de farmacia</p>
            </div>
            <img className='projectImg' src={img} alt="" />
            <img className='projectImg' src={img2} alt="" />
        </div>
    )
}
export default ProjectPage2