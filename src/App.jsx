import { useContext } from 'react';
import './App.css'
import LoginRoutes from './routes/Login/index'
import { Context } from './context/Context';
import DashboardRoutes from './routes/Dashboard';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  const {token} = useContext(Context);
  if(token){
    return <DashboardRoutes/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App
