import { Route, Routes } from 'react-router-dom';
import { lazy, StrictMode } from 'react' 
import Layout from './layout/Layout';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './components/formulaire/Formulaire';
import  Temoignage from './components/TEMOIGNAGE/temoignage';
const Presentation = lazy(() => import('./pages/presentation/Presentation'));
const About = lazy(() => import('./pages/about/About'));
const AboutSecondApp = lazy(() => import('./pages/AboutSecondApp/AboutSecondApp'));


export default function App() {

  return <StrictMode>
  <BrowserRouter>
    <HelmetProvider>
  <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Presentation />}/>
        <Route path='projetJeu' element={<About /> }/>
        <Route path='projetJeuLabyrintheTank' element={<AboutSecondApp /> }/>
        <Route path='formulaire' element={<Form/> }/>
        <Route path='temoignage' element={<Temoignage/> }/>
        
      </Route>
    </Routes>
    </HelmetProvider>
      </BrowserRouter>

    </StrictMode>
}