import React from 'react'
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

export default About