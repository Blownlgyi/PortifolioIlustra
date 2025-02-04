

import ProjectCards from './ProjectCards'
import img from '../Pages/Projetos/Covers/1.png'
import img2 from '../Pages/Projetos/Covers/2.png'
import img3 from '../Pages/Projetos/Covers/3.png'
import img4 from '../Pages/Projetos/Covers/4.png'
import img5 from '../Pages/Projetos/Covers/5.png'
const Projects = ()=>{
    return(
        <section className='project'>
            <div  >
                <h1 className='s-title' >Projetos</h1>
                <p>Apaixonado por desenho e tecnologia, desenvolvo propostas integrativas para trazer experiências novas dentro dos projetos.</p>
                
            </div>
        
            <div className='cardsprojects'>
                <a href="/project5" target='blank'>
                    <ProjectCards img={img5}/>
                </a>
                <a href="/project4" target='blank'>
                <ProjectCards img={img3}/></a>
                <a href="/project3" target='blank'>
                <ProjectCards img={img4}/></a>
                <a href="/project2" target='blank'>
                <ProjectCards img={img2}/></a>
                <a href="/project1" target='blank'>
                <ProjectCards img={img}/></a>
                
                
               
             
                
            </div>
       
    </section>
    )
}
export default Projects