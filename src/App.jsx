import { useState } from "react";
import Context from "./contexts/Context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import NewProductPage from "./pages/NewProductPage";
import MyProductsPage from "./pages/MyProductsPage";
import ProductPage from "./pages/ProductPage";

function App() {  

  const [token, setToken] = useState(localStorage.getItem("token"));
  const contextValue = { token, setToken };

  return (  
    
    <Context.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignInPage />} />
          <Route path='/cadastro' element={<SignUpPage />} />
          <Route path='/home' exact element={<HomePage />} />
          <Route path='/produto/:id' element={<ProductPage />} />
          <Route path='/novoproduto' element={<NewProductPage />} />
          <Route path='/meusprodutos' element={<MyProductsPage />} />          
        </Routes>
      </BrowserRouter>  
    </Context.Provider>

  )
}

export default App
