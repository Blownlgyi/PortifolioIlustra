import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home.jsx'
import './ScrollSection.css'
import './drawing.css'
import Debugjs from './Components/DebugJs.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ProjectPage1 from './Pages/ProjectPage1.jsx'
import ProjectPage2 from './Pages/ProjectPage2.jsx'
import ProjectPage3 from './Pages/ProjectPage3.jsx'
import ProjectPage4 from './Pages/ProjectPage4.jsx'
import ProjectPage5 from './Pages/ProjectPage5.jsx'
createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/debug' element={<Debugjs/>}/>
          <Route path='/project1' element={<ProjectPage1/>}/>
          <Route path='/project2' element={<ProjectPage2/>}/>
          <Route path='/project3' element={<ProjectPage3/>}/>
          <Route path='/project4' element={<ProjectPage4/>}/>
          <Route path='/project5' element={<ProjectPage5/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
)
