import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Tour = ({ id, image, info, price, name, props }) => {
  return (
    <Link to={'/Tour-Detail/' + id} name={name}>
      <Card>
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <Gradient />
      </Card>
    </Link>
  )
}

const Card = styled.div`
  position:relative;
  height:15em;
  border-radius:1rem;


  img{
    height: 100%;
    width:100%;
    background-color: rgba(0,0,0,0.5);
    position:absolute;
    left:0;
    object-fit:cover;
    border-radius:1rem;
  
  }
  h4{
    font-size:1rem;
    white-space:nowrap;
    font-weight:600;
    margin-bottom:1rem;
    position: absolute;
    z-index: 50;
    color: #fff;
    width:100%;
   padding-left:10px;
}
`;

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
 border-radius:1rem;
height:100%;
background:linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.7));
`;

export default Tour