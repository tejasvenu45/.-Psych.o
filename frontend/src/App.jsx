
import Layout from "./pages/Layout.jsx"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Chat from "./pages/Chat.jsx";
function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Layout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="chat" element={<Chat />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
