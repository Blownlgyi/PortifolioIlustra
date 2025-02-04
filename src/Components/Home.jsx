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
      setIsDrawingEnabled((prev) => !prev); // Toggle the drawing state
    };
  
    useEffect(() => {
      // Function to disable drawing when user scrolls
      const handleScroll = () => {
        setIsDrawingEnabled(false); // Disable drawing when user scrolls
      };
  
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
        
             <div>
                <button className="btn-drawing" onClick={toggleDrawing} onTouchStart={toggleDrawing} >
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
