import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from './component/Adminlogin/Adminlogin';
import ForgetPassword from "./component/Adminlogin/ForgetPassword/ForgetPassword";
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import LoginRestrictedRoute from './component/LoginRestrictedRoute/LoginRestrictedRoute'
import Layout from './component/Layout/Layout';
import Dashboard from './component/Dashboard/Dashboard';
import Challenges from './component/Challenges/Challenges';
import Words from './component/Words/Words';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginRestrictedRoute><Adminlogin/></LoginRestrictedRoute>}></Route>
      <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
      <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>}></Route>
      <Route path="/challenges" element={<ProtectedRoute><Layout><Challenges /></Layout></ProtectedRoute>}></Route>
      <Route path="/words" element={<ProtectedRoute><Layout><Words /></Layout></ProtectedRoute>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
