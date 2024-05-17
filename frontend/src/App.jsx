import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home';
import SubUserPage from './Pages/SubUserPage';
import Form from './assets/Form';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="subuser" element={<SubUserPage />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
