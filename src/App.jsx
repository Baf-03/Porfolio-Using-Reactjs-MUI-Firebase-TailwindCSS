import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DialogWithForm } from "./Pages/SigninModal";
import ResponsiveAppBar from "./Components/Header/Navbar";
import Admin from "./Pages/Admin";
import AuthRoute from "./Routes/AuthRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
function App() {

  return (
    <>
      <div className=" sticky top-0 bg-white z-20 w-[100%]" >
        <ResponsiveAppBar/>
      </div>
    <Routes>
        <Route index element={<Home/>} />

        {/* <Route element={<DialogWithForm/>}>
            <Route path="admin" element={<Admin/>}/>
        </Route> */}
        <Route element={<AuthRoute/>}>
            <Route element={<DialogWithForm/>} path="/login"/>
        </Route>
        <Route element={<ProtectedRoute/>}>
            <Route element={<Admin/>} path="/admin"/>
        </Route>
    </Routes>
  
     
    </>
  );
}

export default App;
