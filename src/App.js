
import './App.css';
import Pages from './Pages';
import { BrowserRouter } from 'react-router-dom';
import logo from './assets/img/logo.png';

function App() {


  return (
    <div className='page-wrapper'>
      <BrowserRouter>
        <img src={logo} className="logo" alt='logo' />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
