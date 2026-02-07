import { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {ProductProvider} from './ProductContext.jsx'
import ProductsTable from './components/ProductsTable.jsx'
import AddProducts from './components/AddProducts.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <ProductProvider>
          <NavBar /> 
          <Routes>  
            <Route path="/" element={
              <div className="row">
                <div className="col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
                  <ProductsTable />
                </div>
              </div>
            } /> 

            <Route path="/addproduct" element={
              <div className="row">
                <div className="col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
                  <AddProducts />
                </div>
              </div>
            } />
          </Routes>
        </ProductProvider>
      </Router>
    </div>
  )
}

export default App
