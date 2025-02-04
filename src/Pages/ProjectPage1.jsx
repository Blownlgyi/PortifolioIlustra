import Return from '../Components/Return'
import img from './Projetos/Proj/1.png'
import img2 from './Projetos/Proj/2.png'
const ProjectPage1 = ()=>{
    return(
        <div className='pWrap'>
            <Return/>
            <div className='apresProject'>
                <h1>Projeto e-commerce personalizados </h1>
                <p>Site de vendas de produtos personalizados</p>
            </div>
            <img className='projectImg' src={img} alt="" />
            <img className='projectImg' src={img2} alt="" />
        </div>
    )
}
export default ProjectPage1