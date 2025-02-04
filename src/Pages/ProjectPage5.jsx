import Return from '../Components/Return'
import img from './Projetos/Proj5/1.png'
import img2 from './Projetos/Proj5/2.png'
import img3 from './Projetos/Proj5/3.png'
const ProjectPage5 = ()=>{
    return(
        <div className='pWrap'>
            <Return/>
            <div className='apresProject'>
                <h1>Projeto Catalogo</h1>
                <p>O MVP do produto é o desenvolvimento de um catalogo de moveis para atender a rede de varejo sendo uma alternativa a tablets</p>
            </div>
            <img className='projectImg' src={img} alt="" />
            <img className='projectImg' src={img2} alt="" />
            <img className='projectImg' src={img3} alt="" />
        </div>
    )
}
export default ProjectPage5