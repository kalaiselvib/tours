import React from 'react'
import styled from 'styled-components';


import { ImAirplane } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ToursList/');
    }
    return (
        <div className="home-page-wrapper">
            <div className='home-container'>

                <CenterText >
                    <h2>Travel to your Dream Destinations With</h2>
                    <h2>Travellusion</h2>
                    <Button onClick={handleClick}>
                        Book a Flight <ImAirplane className='icon' />
                    </Button>
                </CenterText>

            </div>
        </div>

    )
}
const CenterText = styled.div`
    font-size: 2rem;
    font-family: 'Koulen', cursive;
    color: rgb(131, 127, 127);
    width: 50%;
    position: absolute;
    margin: 0 auto;
    top: 30%;
    left: 60%;
    transform: translate(-30% , -60%);
  h2{
      margin:0px;
  }
  h2:nth-child(2){
      text-align:let !important;
      color:#fff;
      text-decoration:underline;
   
  }
`;
const Button = styled.button`
    padding:5px 8px 8px 8px;    
    font-size: 1rem;
    height: 50px;
    width: 200px;
    background: #fff;
    border: 2px solid #646363;
    font-family: 'Poppins',sans-serif;
    color: #958f8f;
    font-weight:500;
    cursor:pointer;
 
   .icon{
       padding-left:10px;
       padding-top:10px;
   } 
}
`;
export default Homepage