import React from 'react'
const MatchStyle = ()=>{
    return (
        <style>
            {`
                 .matches{
                    margin: 10px;
                    // background-color: rgb(46, 44, 44);
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

export default Matches