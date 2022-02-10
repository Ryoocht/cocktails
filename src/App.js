import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import SingleCocktail from "./pages/SingleCocktail"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cocktail/:id" component={SingleCocktail} />
        <Route path="*" component={Error} />
      </Routes>
    </Router>
  )
}

export default App