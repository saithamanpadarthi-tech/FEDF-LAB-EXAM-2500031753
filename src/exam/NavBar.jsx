import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home';
import DisplayBranch from './DisplayBranch';
import AddBranch from './AddBranch';
import ApiDemo from './ApiDemo';
import NotFound from './NotFound';
import "./nav.css"
export default function NavBar() {
  return (
    <div>
    <nav className="navbarcss">
    <Link to="/">Home</Link>
    <Link to="Registration">Add Branch</Link>
    <Link to="Display">View Branches</Link>
    <Link to="API">API</Link>
    <Link to="*"></Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Registration" element={<AddBranch/>} />
      <Route path="Display" element={<DisplayBranch/>} />
      <Route path="API" element={<ApiDemo/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  )
}
