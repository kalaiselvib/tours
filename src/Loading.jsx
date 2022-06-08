import React from 'react'
import styled from 'styled-components';
import { RiFlightTakeoffFill } from 'react-icons/ri';
import { RiLuggageDepositFill } from 'react-icons/ri';
function Loading() {
    return (
        <div className='primary-bg'>
            <Loader>
                <RiFlightTakeoffFill className="loader-icon loader-icon-1" />
                <RiLuggageDepositFill className="loader-icon loader-icon-2" />
            </Loader>
        </div>
    )
}
const Loader = styled.div`
    position: absolute;
    top: 50%;
    border-radius: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 2rem;
    border:3px solid #B46A6C;
     
  

    .loader-icon{
        font-size:60px;
        color : #C89294
    }
   .loader-icon-2{
        display:none;
    }
 `;
export default Loading