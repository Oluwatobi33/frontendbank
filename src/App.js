import logo from './logo.svg';
import './App.css';
import './App2.css';
// import '/App.js'
import { Route, Routes } from "react-router-dom"
import Every from './component/Every';
import NavBar from './component/NavBar';
import Shop from "./component/Shop";
import ExistingCust from './component/ExistingCust';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Product from './component/Purity';
import Background from './component/Background';
import Error from './component/Error';
import Home from './component/Home';
import Contact from './component/Contact';
import Forget from './component/Forget';
import Hist from './component/Hist';
import Patient from './component/Patient';
import Dashboard from './component/Dashboard';
import Page from './component/Page';
import DataList from './component/DataList';
function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<NavBar />}></Route>
        <Route path='/Background' element={<Background />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Patient' element={<Patient />}></Route>
        <Route path='/ExistingCust' element={<ExistingCust />}></Route>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Every' element={<Every />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Forget' element={<Forget />} />
        <Route path='/Hist' element={<Hist />} />
        <Route path='/Page' element={<Page />} />
        <Route path='/DataList' element={<DataList />} />
        <Route path='/*' element={<Error />} /> 
      </Routes>
    </>
  );
}
export default App;
