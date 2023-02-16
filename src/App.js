import AccesoAreaPersoal from './components/Acceso Area Persoal/AccesoAreaPersoal.jsx';
import CuadroFooter from './components/Footer/footer.jsx';
import FormularioRexistro from './components/Formulario de Rexistro/FormularioRexistro.jsx';
import Header from './components/Header/Encabezado.jsx';
import Navegador from './components/Navegador/Navegador.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';

function App() {
  return (
    <>
      <Header/>
      <Navegador/>
      <FormularioRexistro/>
      <Newsletter/>
      <CuadroFooter/>
    </>
  );
}

export default App;
