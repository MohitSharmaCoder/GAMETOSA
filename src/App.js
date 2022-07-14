import React from 'react'
import './App.css';
import Header from './components/Header'
import {BrowserRouter , Routes, Route } from 'react-router-dom'
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
// about

const AboutStyle = ()=>{
    return (
        <style>
            {`
                .cards{
                    padding: 10px;
                }
                .cards .card{
                    border-radius: 10px;
                    padding: 15px;
                    margin: 10px;
                    background-color: rgb(2, 33, 41);
                    color: white;
                }
                .card-title h4{
                    margin-bottom: 5px;
                }
            `}
        </style>
    )
}
const About = () => {
  return (
    <div>
        <div class="cards">
            <div class="card">
                <div class="card-title">
                    <h4>Short Bio</h4>
                </div>
                    <p>Owener of XFI ESPORTS</p>
            </div>
            <div class="card">
                <div class="card-title">
                    <h4>City</h4>
                </div>
                    <p>Kolkata</p>
            </div>
            <div class="card">
                <div class="card-title">
                    <h4>Short Bio</h4>
                </div>
                    <p>Organization Name</p>
            </div>
        </div>
        <AboutStyle/>
    </div>
  )
}
// matches

const MatchStyle = ()=>{
    return (
        <style>
            {`
                 .matches{
                    margin: 10px;
                    background-color: rgb(2, 33, 41);
                    color: white;
                    border-radius: 10px;
                }
                .matches .date-coins{
                    padding: 15px;
                    text-align: center;
                }
                .matches .date-coins p{
                    border: 1px solid gray;
                    padding: 5px;
                    
                }
                .matches .price-entry, .matches .Practice, .matches .Match-Ended{
                    display: flex;
                    justify-content: space-between;
                    margin: 8px 10px;
                }
                .matches .price-entry, .matches .Match-Ended{
                    color: rgb(201, 199, 199);
                    font-weight: 400;
                    font-size: 16px;
                }
                .matches .Practice{
                    font-size: 24px;
                    color: white;
                }
                .matches .squad-ttp{
                    display: flex;
                    justify-content: space-between;
                    font-size: 15px;
                    padding: 5px 10px;
                    background-color:rgba(13, 55, 75, 0.801)
                }
                .matches .card-btn{
                    background-color: rgb(255, 113, 88);
                    border: none;
                    width: 100%;
                    text-align: center;
                    padding: 10px;
                    color: white;
                    font-size: 17px;
                    border-radius: 0px 0px 10px 10px;
                }
            `}
        </style>
    )
}
const Matches = () => {
	return (
	  <div>
		  <div class="matches">
			  <div class="date-coins">
				  <p>25 Feb 2022 (<span class="time">08:45 pm</span>) <span class="coins">0 coins/1 kill</span></p>
			  </div>
			  <div class="price-entry">
				  <p>Price Pool</p> <p>Entry</p>
			  </div>
			  <div class="Practice">
				  <p>Practice</p> <p>0</p>
			  </div>
			  <div class="Match-Ended">
				  <p>Match Ended</p> <p>10 sports</p>
			  </div>
			  <div class="squad-ttp">
				  <p>SQUAD</p> <p>TTP</p>
			  </div>
			  <button class="card-btn">no</button>
		  </div>
		  <MatchStyle/>
	  </div>
	)
  }
export default App