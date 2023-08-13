import { useState } from "react";
import Context from "./contexts/Context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';

function App() {  

  const [token, setToken] = useState(localStorage.getItem("token"));
  const contextValue = { token, setToken };

  return (  
    
    <Context.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage />} />
        </Routes>
      </BrowserRouter>  
    </Context.Provider>

  )
}

export default App
