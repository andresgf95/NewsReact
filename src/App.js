import ColumnaPrincipal from './components/columna principal/ColumnaPrincipal.jsx';
import CuadroFooter from './components/Footer/CuadroFooter.jsx';
import Header from './components/Header/Encabezado.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';

function App() {
  return (
    <>
      <Header/>
      <ColumnaPrincipal/>
      <Newsletter/>
      <CuadroFooter/>
    </>
  );
}

export default App;
