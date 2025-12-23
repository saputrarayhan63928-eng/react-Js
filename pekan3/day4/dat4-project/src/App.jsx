import "./App.css";

// import {Routes,Route} from "react-router-dom"
// import NavBar from './component/CreateMulti-PageApplicationWithReactRouter/component/Navbar'
// import Home from './component/CreateMulti-PageApplicationWithReactRouter/pages/Home'
// import About from './component/CreateMulti-PageApplicationWithReactRouter/pages/About'
// import Contact from './component/CreateMulti-PageApplicationWithReactRouter/pages/Contact'

// import { Routes, Route } from "react-router-dom";
// import Navbar from './component/ImplementasiNavigationMenu/component/Navbar';
// import Home from './component/ImplementasiNavigationMenu/pages/Home';
// import About from './component/ImplementasiNavigationMenu/pages/About';
// import Contact from './component/ImplementasiNavigationMenu/pages/Contact';

// import { Routes, Route } from "react-router-dom";
// import Navbar from './component/CreateRouteWithParameters/components/Navbar';
// import Home from './component/CreateRouteWithParameters/pages/Home';
// import Products from './component/CreateRouteWithParameters/pages/Products';
// import ProductDetail from './component/CreateRouteWithParameters/pages/ProductDetail';

import { Routes, Route } from "react-router-dom";
import Navbar from "./component/ImplementasiNestedRoutingStructure/component/Navbar";
import Dashboard from "./component/ImplementasiNestedRoutingStructure/pages/dashboard/Dashboard";
import Profile from "./component/ImplementasiNestedRoutingStructure/pages/dashboard/Profile";
import Settings from "./component/ImplementasiNestedRoutingStructure/pages/dashboard/Settings";

function App() {
  return (
    <>
      {/* <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes> */}

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
