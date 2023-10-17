import './App.css';
import Login from './components/Login';
import Sign_up from './components/Sign_up';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Sign_up} />
        <Route path='/login' exact Component={Login} />
      </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
