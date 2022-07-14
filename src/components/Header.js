import React from 'react'
import { Link } from 'react-router-dom'
import gametosa from '../img/gametosa.png'
import profilepic from '../img/profilepic.png'
const HeaderStyle = ()=>{
    return (
        <style>
            {`
                .header{
                    padding: 7px 20px;
                    background-color: transparent;
                }
                .header-content{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .img img{
                    width: 140px;
                    height: 35px;
                }
                .btn{
                    background-color: #37bce3;
                    color: white;
                    padding: 12px 17px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                }
                body{
                    background-color: rgb(5, 129, 179);
                }
                .section-one{
                    width: 98%;
                    border: 1px solid rgb(223, 223, 223);
                    border-radius: 10px;
                    margin: auto;
                    margin-top: 15px;
                    background-color: white;
                    color:black;
                }
                
                .section-one .profile-header{
                    padding: 25px 17px;
                    border-bottom: 2px solid rgb(223, 223, 223)  
                    
                }
                .profile-content{
                    padding: 15px 17px;
                    display: flex;
                    align-items: center;
                }
                .profile-content .img img{
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    margin-right: 15px;
                }
                .profile-bottom{
                    padding: 0px 17px 17px 17px;
                }
                .profile-content .data .date-b{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 13px;
                    visibility: hidden;
                }
                .profile-content .data .date-b p{
                    margin-right: 15px;
                }
                .profile-content .data .date-b p span{
                    color: black;
                    font-weight: bold;
                }
                .profile-bottom{
                    font-size: 15px;
                }
                .pages-top{
                    background-color: transparent;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 98%;
                    margin: auto;
                    margin-top: 13px;
                    margin-bottom: 13px;
                    border-radius: 10px;
                    padding: 14px 20px;
                }
                .pages-top .btn-two{
                    width: 15%;
                    font-size: 18px;
                    transition: .14s ease-in;
                    text-align:center;
                    background-color: #37bce3;
                    color: white;
                    padding:8px 5px;
                    border-radius: 8px;
                    cursor: pointer;
                    border-bottom: 2px solid rgb(0, 183, 255);
                    }
                    .pages-top .btn-two:hover{
                    border-bottom: 2px solid white;
                    color: white;
                }                
                @media screen and (max-width:720px){
                    .section-two .pages-top .btn-two{
                        width: 80px;
                        height: 30px;
                        font-size: 10px;
                        text-align:center;
                        background-color: #37bce3;
                        color: white;
                        padding:8px 5px;
                        border-radius: 8px;
                        cursor: pointer;
                    }
                }
            `}
        </style>
    )
}
const Header = () => {
  return (
    <div>
           <header class="header fixed-top">
                <nav>
                    <div class="header-content">
                        <div class="img">
                            <img src={gametosa} alt=""/>
                        </div>
                        <div>
                        <button class="btn">DownLoad App</button>
                        </div>
                    </div>
                </nav>
            </header>
    <div>
    <div class="section">
        <div class="section-one">
            <div class="profile-header">
            </div>
            <div class="profile-content">
                <div class="img">
                    <img src={profilepic} alt=""/>
                </div>
                <div class="data">
                    <h3>XFI Deep</h3>
                    <div class="date-b">
                        <p><span>6.7K</span> Followers</p>
                        <p><span>93</span> Following</p>
                    </div>
                </div>
            </div>
            <h5 class="profile-bottom">owner of xfi esports</h5>
        </div>
    </div>
    <section class="section-two">
        <div class="pages-top">
            <Link to={`/about`} id="home" class="btn-two">About</Link>
            <Link to={`/matches`} id="about" class="btn-two">Matches</Link>
            <Link to={`/guilds`} id="help" class="btn-two">Guilds</Link>
        </div>
        <div className="pages-bottom my-3">	
        </div>
    </section>
    </div>
    <HeaderStyle/>
    </div>
  )
}
export default Header