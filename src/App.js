import React from 'react'
import './App.css';
import Header from './components/Header'
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import About from './components/About'
import Matches from './components/Matches'
const App = () => {
  return (
    <div>
		<BrowserRouter>
			<div className="app">
				<Header/>
				<Routes>
						<Route exact path="/about" element={<About/>}/>
						<Route exact path='/matches' element={<Matches/>}/>
				</Routes>
			</div>
		</BrowserRouter>
    </div>
  )
}
export default App