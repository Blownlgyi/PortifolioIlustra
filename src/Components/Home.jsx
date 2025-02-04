import { useEffect, useState } from "react";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";
import Debugjs from "./DebugJs";
import img from '../assets/Pencil.png'
import { AnimationIntro } from "./AnimationIntro";

const Home = () => {
  
        const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);

        const toggleDrawing = () => {
          setIsDrawingEnabled((prev) => !prev); // Alterna o estado de desenho
        };
    return (
        <>
            <AnimationIntro/>
             <div>
                <button className="btn-drawing" onClick={toggleDrawing}>
                    <img src={img} alt="" />
                    {isDrawingEnabled ? "Desabilitar Desenho" : "Habilitar Desenho"}
                </button>
                <Debugjs toggleDrawing={isDrawingEnabled} />
                </div>
            <Intro />
            <section 
                className="container anim2">
                <About />
                <Projects />
            </section>
        </>
    );
};

export default Home;
